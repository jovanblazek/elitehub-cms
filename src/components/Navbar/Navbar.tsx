import { Button, Container, Flex, Grid, Icon, Text } from '@chakra-ui/react'
import { DiscordAlt } from '@emotion-icons/boxicons-logos'
import Link from 'next/link'
import { rem } from 'polished'
import { ROUTES } from 'shared/constants'
import { COLOR_INTENT, FONT_FAMILY, HEADER_HEIGHT_PX } from 'theme'

const LOGO_COLUMN_WIDTH = rem(200)
const CTA_TEXT = 'Pridaj sa!'

type NavLinkType = {
  href: string
  text: string
}

export const NavLinks: NavLinkType[] = [
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

/**
 * - Add logo
 * - Add discord join button link
 * - Add search icon in the future
 */

export const Navbar = () => (
  <Flex
    height={HEADER_HEIGHT_PX}
    backgroundColor={COLOR_INTENT.NAVBAR.BACKGROUND}
    alignItems="center"
    fontSize="lg"
    fontFamily={FONT_FAMILY.HEADING}
  >
    <Container maxWidth="1200px">
      <Grid gridTemplateColumns={`${LOGO_COLUMN_WIDTH} 1fr`} gridGap={4}>
        <div>logo</div>
        <Flex gap="8" justifySelf="end" alignItems="center">
          {NavLinks.map(({ href, text }) => (
            <Link key={text} href={href}>
              <Text
                cursor="pointer"
                _hover={{
                  color: COLOR_INTENT.NAVBAR.LINK_HOVER,
                  textDecoration: 'underline', // TODO update to animated border bottom
                }}
              >
                {text}
              </Text>
            </Link>
          ))}
          <Button
            variant="outline"
            leftIcon={<Icon as={DiscordAlt} />}
            _hover={{
              boxShadow: `${COLOR_INTENT.NAVBAR.CTA_HOVER} 0 0 0 2px inset`,
            }}
          >
            <Text>{CTA_TEXT}</Text>
          </Button>
        </Flex>
      </Grid>
    </Container>
  </Flex>
)
