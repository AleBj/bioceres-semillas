module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      divideStyle: ['hover', 'focus'],
    }
  },
  theme: {
    screens: {
      '2xs': '375px',
      xs: '415px',
      s: '650px',
      m: '769px',
      l: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2100px',
      'landscape': { 'orientation': 'landscape' },
      'portrait': { 'orientation': 'portrait' },
      'portrait-large': { 'raw': '(orientation: portrait) and (min-width: 650px)' },
      'has-hover': { 'raw': '(hover: hover) and (pointer: fine)' },
      'has-hover-l': { 'raw': '(hover: hover) and (pointer: fine) and (min-width: 650px)' },
      'max-3xl': { 'max': '2100px' },
      'max-s': { 'max': '649px' },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: 'var(--light)',
        always: '#ffffff',
      },
      black: {
        DEFAULT: 'var(--dark)',
        always: '#000000',
      },
      gray: {
        DEFAULT: '#eeeeee',
        '2': '#868686',
        '3': '#D8D8D8',
        '4': '#888A8B',
        '5': '#D2DADF',
        '6': '#E2E3E6',
        'dark': '#555555'
      },
    },
    borderColor: theme => ({
      ...theme('colors')
    }),
    fontFamily: {
      '1': ['suisse', 'sans-serif'],
    },
    fontSize: {
      ...new Array(250)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`
          return acc
        }, {}),
    },
    spacing: {
      // generate 0 through 50 (counting up by 1)
      ...new Array(101)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`
          return acc
        }, {}),
      // generate 55 through 300 (counting up by 5)
      ...new Array(100)
        .fill()
        .map((_, i) => (11 + i) * 5)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`
          return acc
        }, {}),
    },
    zIndex: {
      ...new Array(11)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = val
          return acc
        }, {}),
    },
    gridColumn: {
      ...new Array(36)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[`span-${val}`] = `span ${val} / span ${val}`
          return acc
        }, {}),
    },
    gridColumnStart: {
      ...new Array(36)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val}`
          return acc
        }, {}),
    },
    gridColumnEnd: {
      ...new Array(36)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val}`
          return acc
        }, {}),
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.23, 1, 0.32, 1)',
      'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
      'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
      'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
      'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
      'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
      'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
      'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
      'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    extend: {
      height: {
        'full-screen': '100svh',
      },
      minHeight: {
        'full-screen': '100svh',
      },
    }
  },
  plugins: [],
}