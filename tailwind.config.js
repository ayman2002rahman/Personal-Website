/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        glass: {
          white: 'rgba(255, 255, 255, 0.05)',
          'white-10': 'rgba(255, 255, 255, 0.1)',
          'white-20': 'rgba(255, 255, 255, 0.2)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.15)',
          purple: 'rgba(139, 92, 246, 0.15)',
          'purple-strong': 'rgba(139, 92, 246, 0.3)',
        },
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
        'glass-heavy': '24px',
      },
      backgroundImage: {
        'glass-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 45%, rgba(139,92,246,0.08) 100%)',
        'hero-gradient':
          'linear-gradient(120deg, rgba(139,92,246,0.35), rgba(236,72,153,0.2), rgba(59,130,246,0.3))',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-glow': '0 8px 32px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'glass-hover': '0 16px 48px rgba(139, 92, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glow-sm': '0 0 15px rgba(139, 92, 246, 0.3)',
        'glow-md': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 60px rgba(139, 92, 246, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'gradient-shift-slow': 'gradient-shift 15s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'equalizer-1': 'equalizer 0.8s ease-in-out infinite',
        'equalizer-2': 'equalizer 0.6s ease-in-out infinite 0.2s',
        'equalizer-3': 'equalizer 0.9s ease-in-out infinite 0.4s',
        'equalizer-4': 'equalizer 0.7s ease-in-out infinite 0.1s',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        equalizer: {
          '0%, 100%': { height: '4px' },
          '50%': { height: '20px' },
        },
      },
    },
  },
  plugins: [],
}
