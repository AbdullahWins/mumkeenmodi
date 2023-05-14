/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary: ['Inter', 'sans-serif'],
        secondary: ['Karla', 'sans-serif'],
      },
      colors: {
        primary : '#fcf1b1',
        secondary : '#ff9933',
        ash : '#fefefe',
        ashDark : '#E8ECEF',
        offWhite : '#f5f5f5',
        fade : '#6c7275',
        black : '#0c0c0c',
        green : '#cfede4',
      },
      backgroundImage: {
        'gradient-primary' : 'linear-gradient(270deg, #FCF1B1 0%, rgba(252, 241, 177, 0) 100%);'
      },

    },
  },
  plugins: [],
}