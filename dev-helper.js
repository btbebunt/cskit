#!/usr/bin/env node

const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Kill all Node.js processes
function killNodeProcesses() {
  return new Promise((resolve) => {
    if (process.platform === 'win32') {
      exec('taskkill /f /im node.exe', (error) => {
        // Ignore errors - processes might not exist
        resolve();
      });
    } else {
      exec('pkill -f node', (error) => {
        // Ignore errors - processes might not exist
        resolve();
      });
    }
  });
}

// Clean build artifacts
function cleanBuild() {
  return new Promise((resolve) => {
    const dirsToClean = ['.next', 'node_modules/.cache'];
    
    dirsToClean.forEach(dir => {
      if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    });
    
    // Clear npm cache
    exec('npm cache clean --force', (error) => {
      // Ignore errors
      resolve();
    });
  });
}

// Start development server with stability options
function startDevServer() {
  const args = [
    'dev',
    '--port', '3000',
    '--hostname', 'localhost',
    '--turbo' // Use Turbo for better performance
  ];
  
  const devProcess = spawn('npx', ['next', ...args], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: '1',
      NODE_OPTIONS: '--max-old-space-size=4096',
      WATCHPACK_POLLING: 'true'
    }
  });
  
  devProcess.on('error', (error) => {
    console.error('Failed to start development server:', error);
  });
  
  process.on('SIGINT', () => {
    devProcess.kill('SIGINT');
    process.exit(0);
  });
}

// Main function
async function main() {
  console.log('🧹 Cleaning build artifacts...');
  await killNodeProcesses();
  await cleanBuild();
  
  console.log('🚀 Starting stable development server...');
  startDevServer();
}

main().catch(console.error);
