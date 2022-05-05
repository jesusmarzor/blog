const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'border': 'border',
      }
    },
    colors: {
      transparent: colors.transparent,
      gray: colors.gray,
      sky: colors.sky,
      white: colors.white,
      dark: {
        100: '#303131',
        200: '#2b2c2c'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
