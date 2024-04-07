/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'pacifico': ['Pacifico', 'Arial', 'sans-serif']
    },
    extend: {
      width: {
        '180': '180px',
        '360': '368px',
        '361': '368px'
      },
      height: {
        '90': '90px',
        '130': '137px',
        '180': '180px',
      },
      colors: {
        'custom-dark': '#23261E',
        'primary': '#637368',
        'custom-brown': '#A67C49',
        'secondary': '#F2D7B6',
        'offwhite': '#F2EDDF',
        'card-primary': '#FFFBE8',
        'card-secondary':'#DBD9C5'
      }},
  },
  plugins: [],
}

