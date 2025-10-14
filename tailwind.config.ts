import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-kr': ['var(--font-noto-sans-kr)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'jetbrains-mono': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        primary: {
          bg: '#0a0a0a',
          'bg-secondary': '#111111',
          'bg-accent': '#1a1a1a',
        },
        accent: {
          blue: '#00ccff',
          green: '#00ff88',
          purple: '#8b5cf6',
          pink: '#ff0080',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #00ccff, #8b5cf6)',
        'gradient-secondary': 'linear-gradient(135deg, #00ff88, #00ccff)',
        'gradient-accent': 'linear-gradient(135deg, #ff0080, #8b5cf6)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 204, 255, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'code-flow': 'codeFlow 3s ease-in-out infinite',
        'pulse-glow': 'pulse 2s ease-in-out infinite',
        'title-glow': 'titleGlow 3s ease-in-out infinite',
        'stat-float': 'statFloat 3s ease-in-out infinite',
        'icon-float': 'iconFloat 3s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        codeFlow: {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(20px)' },
          '50%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.5)', opacity: '1' },
        },
        titleGlow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(0, 204, 255, 0.5)' },
          '50%': { textShadow: '0 0 40px rgba(0, 204, 255, 0.8)' },
        },
        statFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        iconFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-5px) rotate(5deg)' },
        },
        ripple: {
          'to': { transform: 'scale(2)', opacity: '0' },
        },
        slideInRight: {
          'from': { transform: 'translateX(100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          'from': { transform: 'translateX(0)', opacity: '1' },
          'to': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
