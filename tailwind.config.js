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
      xl: '25.31px',
      'xl-md': '31.25px',
      '2xl': '28.48px',
      '2xl-md': '39.06px',
      '3xl': '32.04px',
      '3xl-md': '48.83px',
      '4xl': '36.04px',
      '4xl-md': '61.04px',
      '5xl': '40.55px',
      '5xl-md': '76.29px',
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
