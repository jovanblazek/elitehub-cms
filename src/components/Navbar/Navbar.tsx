import { useState } from 'react'
import { Container, Flex, Icon, IconButton, Img, Text } from '@chakra-ui/react'
import { DiscordAlt } from '@emotion-icons/boxicons-logos'
import { ChevronDown } from '@emotion-icons/boxicons-regular'
import { rem } from 'polished'
import { COLOR_INTENT, FONT_FAMILY, HEADER_HEIGHT_PX, Z_INDEX } from 'theme'
import { useMedia } from 'utils/useMedia'
import { NAVLINKS } from './constants'
import { MobileMenu } from './MobileMenu'
import { NavLink } from './NavLink'

const NAVBAR_MAX_WIDTH = rem(1200)

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDesktop } = useMedia()

  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={Z_INDEX.NAVBAR}
      height={HEADER_HEIGHT_PX}
      backgroundColor={COLOR_INTENT.NAVBAR.BACKGROUND}
      alignItems="center"
      px={{ base: '0', sm: '6' }}
    >
      <Container maxWidth={NAVBAR_MAX_WIDTH}>
        <Flex justifyContent="space-between" alignItems="center" gap={2}>
          <Flex alignItems="center" gap="2">
            <Img src="/elitehub-logo.svg" alt="logo" borderRadius="full" width="9" height="9" />
            <Text color="brand.sonicSilver" fontSize="3xl">
              /
            </Text>
            <Text fontWeight="semibold" fontSize="2xl" fontFamily={FONT_FAMILY.HEADING}>
              Elitehub
            </Text>
          </Flex>
          {isDesktop ? (
            <Flex gap="8" justifySelf="end" alignItems="center">
              {NAVLINKS.map(({ href, text }) => (
                <NavLink href={href} text={text} />
              ))}
              <IconButton
                variant="outline"
                aria-label="Discord"
                icon={<Icon as={DiscordAlt} />}
                w="44px"
                _hover={{
                  boxShadow: `${COLOR_INTENT.NAVBAR.CTA_HOVER} 0 0 0 2px inset`,
                }}
              />
            </Flex>
          ) : (
            <>
              <Text
                fontWeight="medium"
                cursor="pointer"
                onClick={() => {
                  setIsMenuOpen((prevState) => !prevState)
                }}
              >
                Menu
                <Icon as={ChevronDown} width="6" height="6" />
              </Text>
              <MobileMenu isOpen={isMenuOpen} />
            </>
          )}
        </Flex>
      </Container>
    </Flex>
  )
}
