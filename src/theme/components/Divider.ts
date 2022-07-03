import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { COLORS } from 'theme/constants'

export const Divider: ComponentSingleStyleConfig = {
  baseStyle: {
    borderBottomWidth: '2px',
    borderColor: COLORS.brand.sunsetGlow,
    opacity: 1,
  },
}
