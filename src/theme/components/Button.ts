import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { COLOR_INTENT } from 'theme/constants'

const BUTTON_HEIGHT = '44px'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    _focus: {
      boxShadow: 'none',
    },
    borderRadius: 'md',
  },
  variants: {
    primary: {
      h: BUTTON_HEIGHT,
      bgColor: COLOR_INTENT.BUTTON.PRIMARY.BACKGROUND,
      color: 'white',
      px: '5',
    },
    outline: {
      border: 'none',
      color: COLOR_INTENT.BUTTON.OUTLINE.TEXT,
      bgColor: COLOR_INTENT.BUTTON.OUTLINE.BACKGROUND,
      h: BUTTON_HEIGHT,
      px: '5',
      transition: 'box-shadow 0.2s',
      boxShadow: `${COLOR_INTENT.BUTTON.OUTLINE.BOX_SHADOW} 0 0 0 1px inset`,
      _hover: {
        bgColor: COLOR_INTENT.BUTTON.OUTLINE.HOVER.BACKGROUND,
        boxShadow: `${COLOR_INTENT.BUTTON.OUTLINE.HOVER.BOX_SHADOW} 0 0 0 2px inset`,
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
