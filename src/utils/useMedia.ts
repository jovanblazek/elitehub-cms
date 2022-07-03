import { useBreakpointValue } from '@chakra-ui/react'

export const useMedia = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false })
  const isTablet = useBreakpointValue({ base: false, sm: true })
  const isDesktop = useBreakpointValue({ base: false, md: true })

  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}
