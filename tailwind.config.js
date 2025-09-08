/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",   // indigo
        secondary: "#ec4899", // pink
        accent: "#22d3ee",    // cyan
        muted: "#a1a1aa",
      },
      boxShadow: {
        'glow-primary': "0 0 15px rgba(99,102,241,0.6)",
        'glow-secondary': "0 0 15px rgba(236,72,153,0.6)",
        'glow-accent': "0 0 15px rgba(34,211,238,0.6)",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(120deg)' },
          '66%': { transform: 'translateY(-20px) rotate(240deg)' }
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'glow-pulse': {
          from: {
            filter: 'drop-shadow(0 0 5px hsl(120 100% 50% / 0.8))'
          },
          to: {
            filter: 'drop-shadow(0 0 20px hsl(120 100% 50% / 1)) drop-shadow(0 0 40px hsl(120 80% 60% / 0.8))'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate'
      },
      backdropBlur: {
        glass: '20px'
      }
    },
  },
  plugins: [],
}
