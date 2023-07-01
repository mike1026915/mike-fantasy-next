/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    screens: {
      'sm': {'min': '125vh'},
      'md': {'max': '125vh'}
    },
    colors: {
      ...colors,
      'light-green': '#78dcca',
      'dark-green': '#6A6E4F',
    },
  },

  plugins: [],
}
