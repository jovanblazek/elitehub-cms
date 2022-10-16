import { rem, transparentize } from 'polished'

export const DEVICE_BREAKPOINTS = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
}

export const Z_INDEX = {
  NAVBAR: 100,
}

// WIKI color palette: https://coolors.co/000000-292929-494949-70b8ff-494949
// https://coolors.co/70b8ff-0070e0-16161a-242629-2f2f37-72757e-e6e6e6-ffffff
export const COLORS = {
  SUNSET_GLOW: '#FFB52E',
  PIANO_BLACK: '#16161A',
  RAISIN_BLACK: '#242629',
  JET: '#2F2F37',
  SONIC_SILVER: '#72757E',
  PLATINUM: '#E6E6E6',
  WHITEOUT: '#FBFBFB',
  WHITE: '#FFFFFF',
  BLACK: '#000000',

  BLURPLE: '#7289DA',
  NAVY_BLUE: '#0070E0',
  SKY_BLUE: '#70B8FF',
} as const

export const COLOR_INTENT = {
  NAVBAR: {
    BACKGROUND: COLORS.RAISIN_BLACK,
    MOBILE_BACKGROUND: COLORS.JET,
    CTA_HOVER: COLORS.BLURPLE,
  },
  NAVLINK: {
    TEXT: COLORS.WHITEOUT,
    HOVER: COLORS.SUNSET_GLOW,
  },
  BUTTON: {
    PRIMARY: {
      BACKGROUND: COLORS.NAVY_BLUE,
    },
    OUTLINE: {
      BOX_SHADOW: transparentize(0.8, COLORS.WHITE),
      BACKGROUND: 'transparent',
      TEXT: COLORS.WHITE,
      HOVER: {
        BOX_SHADOW: transparentize(0.25, COLORS.WHITE),
        BACKGROUND: 'transparent',
      },
    },
  },
  ARTICLE_HEADER: {
    BACKGROUND: COLORS.BLACK,
    TITLE: {
      TITLE: COLORS.WHITE,
      SUBTITLE: COLORS.PLATINUM,
      TEXT_SHADOW: COLORS.BLACK,
    },
  },
}

export const FONT_FAMILY = {
  HEADING: 'Rubik, sans-serif',
  TEXT: 'Rubik, sans-serif',
}

export const TEXT_COLOR = COLORS.PLATINUM
export const BASE_FONT_SIZE_PX = '16px'
export const HEADER_HEIGHT_PX = '80px'
export const CONTAINER_MAX_WIDTH_PX = '1020px'
export const NAVBAR_MAX_WIDTH = rem(1280) // chakra-ui's container.xl is 1280px
