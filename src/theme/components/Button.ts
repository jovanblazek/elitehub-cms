import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    _focus: {
      boxShadow: 'none',
    },
    borderRadius: 'md',
  },
  variants: {
    primary: {
      h: '44px',
      bgColor: 'brand.navyBlue',
      color: 'white',
      px: '5',
    },
    outline: {
      color: 'brand.white',
      bgColor: 'transparent',
      borderColor: 'brand.navyBlue',
      h: '44px',
      px: '5',
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
