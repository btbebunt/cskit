/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is enabled by default in Next.js 13+
  
  // Development optimizations to prevent module errors
  experimental: {
    // Disable problematic optimizations that cause module errors
    optimizeCss: false,
    // Enable better error handling
    esmExternals: 'loose',
  },
  
  // Webpack configuration for better development stability
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Disable aggressive caching that causes module errors
      config.cache = {
        type: 'memory',
        maxGenerations: 1,
      }
      
      // Better error handling
      config.stats = 'errors-warnings'
      
      // Disable problematic optimizations
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Create a single chunk to avoid module resolution issues
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
            },
          },
        },
      }
      
      // Better module resolution
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
          path: false,
          os: false,
        },
      }
    }
    
    return config
  },
  
  // Disable problematic features that cause module errors
  typescript: {
    // Don't fail build on type errors during development
    ignoreBuildErrors: false,
  },
  
  eslint: {
    // Don't fail build on lint errors during development
    ignoreDuringBuilds: false,
  },
  
  // Better development server configuration
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  
  // Disable source maps in development to prevent module errors
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
