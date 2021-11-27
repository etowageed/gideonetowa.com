module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
      },
      height: {
        '420px': '420px',
      },
    },
  },
  variants: {
    extend: {},
  },
}
