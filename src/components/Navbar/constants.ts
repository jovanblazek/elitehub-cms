import { ROUTES } from 'shared/constants'

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
