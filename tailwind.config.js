/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          50: '#171717',
          100: '#141414',
          200: '#121212',
          300: '#0F0F0F',
          400: '#0C0C0C',
          500: '#0A0A0A',
          600: '#080808',
          700: '#050505',
          800: '#030303',
          900: '#000000',
        },
        muted: {
          DEFAULT: '#A1A1AA',
          light: '#D4D4D8',
          dark: '#71717A',
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
