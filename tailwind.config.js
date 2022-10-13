/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      '2xs': 12,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 22,
      '2xl': 24,
      '3xl': 28,
      '4xl': 32
    },
    colors: {
      accentuated: {
        light: '#41A152',
        dark: '#276131'
      },

      primary: {
        light: '#4B4B4B',
        dark: '#000000'
      },
      secondary: {
        light: '#E1E1E1',
        dark: '#BCBCBC'
      },
      alert: {
        positive: '#66C39B',
        negative: '#C9252D',
        warning: '#FF9900',
        informative: '#2C7DD9'
      },
      white: '#FFFFFF',
      transparent: 'transparent',
      background: '#f3f3f4'
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat']
      },
      spacing: {
        '8.5px': '8.5px',
        '9.5px': '9.5px',
        '10.5px': '10.5px',
        '12px': '12px',

        '17px': '17px',
        '19px': '19px',
        '21px': '21px',
        '24px': '24px'
      }
    }
  },
  plugins: []
};
