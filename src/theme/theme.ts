import { extendTheme } from '@chakra-ui/react'
import { Styles } from '@chakra-ui/theme-tools'
import * as Components from './components'
import {
  BASE_FONT_SIZE_PX,
  COLORS,
  DEVICE_BREAKPOINTS,
  FONT_FAMILY,
  HEADER_HEIGHT_PX,
  TEXT_COLOR,
} from './constants'

export const GlobalStyles: Styles = {
  global: {
    html: {
      fontSize: BASE_FONT_SIZE_PX,
      scrollBehavior: 'smooth',
      scrollPaddingTop: HEADER_HEIGHT_PX,
    },
    body: {
      height: '100vh',
      minHeight: '100vh',
      minWidth: '320px',
      color: TEXT_COLOR,
      fontFamily: 'Rubik, sans-serif',
      backgroundColor: COLORS.PIANO_BLACK,
    },
    '*, *::before, &::after': {
      borderColor: 'brand.skyBlue',
    },
    'a, button': {
      touchAction: 'manipulation',
    },
  },
}

const CustomTheme = {
  colors: {
    ...COLORS,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  breakpoints: DEVICE_BREAKPOINTS,
  styles: GlobalStyles,
  fonts: {
    body: FONT_FAMILY.TEXT,
    heading: FONT_FAMILY.TEXT,
  },
  components: {
    ...Components,
  },
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const theme = extendTheme(CustomTheme)
