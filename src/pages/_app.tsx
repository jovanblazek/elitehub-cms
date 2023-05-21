import { ChakraProvider } from '@chakra-ui/react'
import { apiPlugin, storyblokInit } from '@storyblok/react'
import type { AppProps } from 'next/app'
import { theme } from 'theme'
// import { Navbar } from 'components/Navbar'
import Feature from '../components/Feature/Feature'
import Grid from '../components/Grid/Grid'
import Page from '../components/Page/Page'
import Teaser from '../components/Teaser/Teaser'
import '@fontsource/rubik/400.css'
import '@fontsource/rubik/500.css'
import '@fontsource/rubik/600.css'
import '@fontsource/rubik/700.css'
import '@fontsource/saira/400.css'
import '@fontsource/saira/700.css'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
})

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    {/* <Navbar /> */}
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
