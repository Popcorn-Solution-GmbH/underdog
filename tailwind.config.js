module.exports = {
  prefix: 'twcss-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    colors: {
      tiefsee: '1A2B3C',
      wintermorgen: '#EAEDF2',
      terra: '#A78C59',
    },
    fontFamily: {
      chaney: ['CHANEY'],
      archivo: ['ArchivoNarrow'],
    },
    fontSize: {
      sm: '16px',
      base: '20px',
      xl: '31.25px',
      '2xl': '39.06px',
      '3xl': '48.83px',
      '4xl': '61.04px',
      '5xl': '76.29px',
    },
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
    },
  },
  plugins: [],
};
