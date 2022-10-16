import { useState } from 'react'
import {
  Container,
  Flex,
  Icon,
  IconButton,
  Img,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import { DiscordAlt } from '@emotion-icons/boxicons-logos'
import { MenuAltRight } from '@emotion-icons/boxicons-regular'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import NextLink from 'next/link'
import { ROUTES } from 'shared/constants'
import { COLOR_INTENT, FONT_FAMILY, HEADER_HEIGHT_PX, NAVBAR_MAX_WIDTH, Z_INDEX } from 'theme'
import { useMedia } from 'utils/useMedia'
import { NAVLINKS } from './constants'
import { MobileMenu } from './MobileMenu'
import { NavLink } from './NavLink'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDesktop } = useMedia()
  useScrollPosition(
    ({ currPos }) => {
      const isScrolledNew = currPos.y < -80
      if (isScrolledNew !== isScrolled) {
        setIsScrolled(isScrolledNew)
      }
    },
    [isScrolled],
    undefined,
    false,
    0
  )

  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={Z_INDEX.NAVBAR}
      height={HEADER_HEIGHT_PX}
      backgroundColor={
        isScrolled || (isMenuOpen && !isDesktop) ? COLOR_INTENT.NAVBAR.BACKGROUND : 'transparent'
      }
      boxShadow={isScrolled || (isMenuOpen && !isDesktop) ? 'base' : 'none'}
      _hover={{
        backgroundColor: COLOR_INTENT.NAVBAR.BACKGROUND,
        boxShadow: 'base',
      }}
      alignItems="center"
      px={{ base: '0', sm: '6' }}
      transition="ease-in-out 0.2s background-color"
    >
      <Container maxWidth={NAVBAR_MAX_WIDTH}>
        <Flex justifyContent="space-between" alignItems="center" gap={2}>
          <LinkBox as="div">
            <Flex alignItems="center" gap="2" color={COLOR_INTENT.NAVLINK.TEXT}>
              <Img src="/elitehub-logo.svg" alt="logo" borderRadius="full" width="9" height="9" />
              <Text color="brand.sonicSilver" fontSize="3xl">
                /
              </Text>
              <NextLink href={ROUTES.HOME} passHref>
                <LinkOverlay>
                  <Text fontWeight="semibold" fontSize="2xl" fontFamily={FONT_FAMILY.HEADING}>
                    Elitehub
                  </Text>
                </LinkOverlay>
              </NextLink>
            </Flex>
          </LinkBox>
          {isDesktop ? (
            <Flex gap="8" justifySelf="end" alignItems="center">
              {NAVLINKS.map(({ href, text }) => (
                <NavLink href={href} text={text} key={text} />
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
                cursor="pointer"
                onClick={() => {
                  setIsMenuOpen((prevState) => !prevState)
                }}
              >
                <Icon as={MenuAltRight} width="8" height="8" />
              </Text>
              <MobileMenu isOpen={isMenuOpen} />
            </>
          )}
        </Flex>
      </Container>
    </Flex>
  )
}
