import { Container, Flex, Grid, Icon, IconButton, Img, Text } from '@chakra-ui/react'
import { DiscordAlt } from '@emotion-icons/boxicons-logos'
import { rem } from 'polished'
import { ROUTES } from 'shared/constants'
import { COLOR_INTENT, FONT_FAMILY, HEADER_HEIGHT_PX } from 'theme'
import { NavLink } from './NavLink'

const LOGO_COLUMN_WIDTH = rem(200)
const NAVBAR_MAX_WIDTH = rem(1200)

type NavLinkType = {
  href: string
  text: string
}

export const NAVLINKS: NavLinkType[] = [
  {
    href: ROUTES.NEWS,
    text: 'Novinky',
  },
  { href: ROUTES.GUIDE, text: 'Návody' },
  {
    href: ROUTES.ENGINEERS,
    text: 'Engineers',
  },
  {
    href: ROUTES.BEGINNERS,
    text: 'Začiatočníci',
  },
]

export const Navbar = () => (
  <Flex
    height={HEADER_HEIGHT_PX}
    backgroundColor={COLOR_INTENT.NAVBAR.BACKGROUND}
    alignItems="center"
    px="6"
  >
    <Container maxWidth={NAVBAR_MAX_WIDTH}>
      <Grid gridTemplateColumns={`${LOGO_COLUMN_WIDTH} 1fr`} gridGap={2}>
        <Flex alignItems="center" gap="2">
          <Img src="/elitehub-logo.svg" alt="logo" borderRadius="full" width="9" height="9" />
          <Text color="brand.sonicSilver" fontSize="3xl">
            /
          </Text>
          <Text fontWeight="semibold" fontSize="2xl" fontFamily={FONT_FAMILY.HEADING}>
            Elitehub
          </Text>
        </Flex>
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
      </Grid>
    </Container>
  </Flex>
)
