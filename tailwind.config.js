/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        green: {
          100: '#e9ffc8',
          200: '#d2fe98',
          300: '#b4f95d',
          400: '#96ef2c',
          500: '#77d50d',
          600: '#66c206',
          700: '#458209',
          800: '#39660e',
          900: '#315611',
        },
      },
    },
  },
  plugins: [],
}