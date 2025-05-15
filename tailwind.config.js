/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-fast': 'pulse 1s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out'
      },
      keyframes: {
        fadeIn : {
          '0%' : {opacity: 0},
          '100%' : {opacity: 100},
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
