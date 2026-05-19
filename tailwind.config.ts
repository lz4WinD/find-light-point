import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fedcaa',
          200: '#fdb678',
          300: '#fb9642',
          400: '#f97c1e',
          500: '#f76c11',
          600: '#e5500a',
          700: '#c03a0a',
          800: '#9c2d10',
          900: '#7d2511',
        },
        warm: {
          bg: '#fef9f3',
          card: '#ffffff',
          text: '#3d2c1f',
          subtext: '#8b7355',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(251, 150, 66, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(251, 150, 66, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config