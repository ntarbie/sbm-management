const colors = require('tailwindcss/colors')


module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html','./src/**/*.js','./src/**/*.css'],

  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        primary: {
          DEFAULT: '#F76120',
          bg: '#f1f1f1',
          text: '#03071D',
          footerbg: '#03071D',
        }
      },
      gridTemplateRows: {
        'auto-2': 'repeat(2, minmax(0, auto))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
