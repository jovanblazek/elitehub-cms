import { Flex, Grid, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { rem } from 'polished'
import { ROUTES } from 'shared/constants'
import { HEADER_HEIGHT_PX } from 'theme'

const LOGO_COLUMN_WIDTH = rem(200)

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

export const Header = () => (
  <Grid
    gridTemplateColumns={`${LOGO_COLUMN_WIDTH} 1fr`}
    gridGap={4}
    px={4}
    alignItems="center"
    height={HEADER_HEIGHT_PX}
  >
    <div>logo</div>
    <Flex gap="4" justifySelf="end">
      {NavLinks.map(({ href, text }) => (
        <Link key={text} href={href}>
          <Text cursor="pointer" fontSize="lg" fontWeight="semibold">
            {text}
          </Text>
        </Link>
      ))}
    </Flex>
  </Grid>
)
