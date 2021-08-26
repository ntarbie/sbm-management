const colors = require('tailwindcss/colors')


module.exports = {
  purge: {
    enabled: false,
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
          stop1: '#f38b11', 
          stop2: '#f76120',
        },
        dark: {
          DEFAULT: '#F76120',
          bg: '#101628',
          card: '#21283B'
        }
      },
      gridTemplateRows: {
        'auto-2': 'repeat(2, minmax(0, auto))',
        'auto-4': 'repeat(4, minmax(0, auto))'
      },
      height: {
        'screen-75': '74vh'
      },

      minHeight: {
        '96': '24rem'
      },
      maxWidth: {
        '3/4': '75%',
        '1ch': '1ch',
        '24ch': '24ch'
      },
      zIndex: {
        'back': '-1',
        '0': 0,
        '25': 25,
        '50': 50,
        '75': 75,
        '80': 80,
        '90': 90,
        '100': 100,
      },
      translate: {
        '100': '100%',
        '-100': '-100%'
      }
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}
