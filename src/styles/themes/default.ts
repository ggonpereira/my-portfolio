export const theme = {
  colors: {
    primary: {
      darker: '#01080e',
      darkerBlue: '#011221',
      darkBlue: '#011627',
    },
    secondary: {
      lightGrey: '#81A1C1',
      grey: '#607b96',
      darkGrey: '#273e53',
      darkerGrey: '#1C2B3A',
      greenish: '#3c9d93',
      purpleBlue: '#4d5bce',
    },
    white: '#ffffff',
    white100: '#E5E9F0',
    opacityWhite: 'rgb(255, 255, 255, 0.5)',
    accent: {
      orange: '#fea55f',
      lightOrange: '#FFAC6B',
      aquaGreen: '#43d9ad',
      salmon: '#e99287',
      lilac: '#c98bdf',
    },
    error: '#E93E36',
    lines: '#1e2d3d',
    gradients: {
      blue: '#4d5bce',
      green: '#43d9ad',
    },
  },
}

export type DefaultTheme = typeof theme
