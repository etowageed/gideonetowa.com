module.exports = {
  content: ['./public/**/*.html',
            './public/**/*.js'],
  theme: {
    extend: {
      zIndex: {
'100' : 100,
      },
      colors: {
        'body': '#17171F',
        'dark-text': '#3d3d3d',
        'primary-accent': '#9490FA',
        'primary-col': '#5F59F7',
        'primary-txt': '#9490FA',
        'input': '#2E2E35',
      },
      fontFamily: {
        'lato': ["'lato'", 'sans-serif']
      },
      width: {
        '600px': '37.5rem',
        '500px': '31.25rem',
        '48%': '48%',
        '45%': '45%',
      },
      height: {
        '420px': '420px',
        '22rem':'22rem',
      },
    },
  },
  variants: {
    extend: {},
  },
}
