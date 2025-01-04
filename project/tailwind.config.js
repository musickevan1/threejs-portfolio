/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        matrix: {
          950: '#001a00', // Lighter dark green
          900: '#002800', // Lighter background
          800: '#003800',
          700: '#004800',
          600: '#006800',
          500: '#008F11',
          400: '#00AF11',
          300: '#00CF11',
        },
      },
      fontFamily: {
        mono: ['Share Tech Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};