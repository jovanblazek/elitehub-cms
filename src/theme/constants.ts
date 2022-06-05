export const DeviceBreakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
}

export interface ThemeColors {
  brand: {
    black: string
    white: string
  }
  state: {
    success: string
    warning: string
    error: string
    info: string
    hover: string
    hoverLight: string
  }
}

// WIKI color palette: https://coolors.co/000000-292929-494949-70b8ff-494949
// https://coolors.co/70b8ff-0070e0-16161a-242629-72757e-e6e6e6-ffffff
export const Colors = {
  brand: {
    navyBlue: '#0070E0',
    skyBlue: '#70B8FF',
    pianoBlack: '#16161A',
    raisinBlack: '#242629',
    sonicSilver: '#72757E',
    platinum: '#E6E6E6',
    white: '#FFFFFF',
  },
  state: {
    // TODO get these from eva design system - color tool
    success: '#76CA66',
    warning: '#FBC756',
    error: '#BA0000',
    info: '#A0C3FF',
  },
}

export const TEXT_COLOR = Colors.brand.platinum
export const BASE_FONT_SIZE_PX = '16px'
export const HEADER_HEIGHT_PX = '80px'
