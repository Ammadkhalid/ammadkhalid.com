const customTheme = {
  animation: {
    'slideDown': '',
  },
  keyframes: {

  },
  transitionProperty: {
    'menu': 'margin, padding, opacity',
    'content': 'top',
    'spacing': 'margin, padding'
  },
  letterSpacing: {
    verytight: '-.090em',
  },
  screens: {
    'xxs': {
      'max': '360px'
    },
    // @media max-width <= 360px

    'xs': '475px',
    // @media min-width >= 475px
  }
};

module.exports = customTheme;