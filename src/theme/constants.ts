import { transparentize } from 'polished'

export const DEVICE_BREAKPOINTS = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
}

// WIKI color palette: https://coolors.co/000000-292929-494949-70b8ff-494949
// https://coolors.co/70b8ff-0070e0-16161a-242629-72757e-e6e6e6-ffffff
export const COLORS = {
  brand: {
    sunsetGlow: '#FFB52E',
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
  other: {
    discordBlurple: '#7289DA',
  },
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const COLOR_INTENT = {
  NAVBAR: {
    BACKGROUND: COLORS.brand.raisinBlack,
    CTA_HOVER: COLORS.other.discordBlurple,
  },
  NAVLINK: {
    TEXT: COLORS.brand.platinum,
    HOVER: COLORS.brand.sunsetGlow,
  },
  BUTTON: {
    OUTLINE: {
      BOX_SHADOW: transparentize(0.8, COLORS.brand.white),
      BACKGROUND: 'transparent',
      TEXT: COLORS.brand.white,
      HOVER: {
        BOX_SHADOW: transparentize(0.25, COLORS.brand.white),
        BACKGROUND: 'transparent',
      },
    },
  },
  TITLE: {
    TITLE: COLORS.brand.white,
    DESCRIPTION: COLORS.brand.platinum,
  },
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FONT_FAMILY = {
  HEADING: 'Saira, sans-serif',
  TEXT: 'Rubik, sans-serif',
}

export const TEXT_COLOR = COLORS.brand.platinum
export const BASE_FONT_SIZE_PX = '16px'
export const HEADER_HEIGHT_PX = '80px'
export const CONTAINER_MAX_WIDTH_PX = '1020px'
