/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'serif']
      },
      backgroundImage: {
        'home': 'url(images/pxfuel.jpg)',
        // 'home': 'url(images/home4.jpg)',
      },
      colors:{
        'black-300': '#282c34',
        'black-400': '#222222',
        'black-500': '#151515'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

