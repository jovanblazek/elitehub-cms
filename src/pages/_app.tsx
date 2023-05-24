import { ChakraProvider } from '@chakra-ui/react'
import { apiPlugin, storyblokInit } from '@storyblok/react'
import type { AppProps } from 'next/app'
import { theme } from 'theme'
import { StoryblokComponents } from 'components/constants'
// import { Navbar } from 'components/Navbar'
import '@fontsource/rubik/400.css'
import '@fontsource/rubik/500.css'
import '@fontsource/rubik/600.css'
import '@fontsource/rubik/700.css'
import '@fontsource/saira/400.css'
import '@fontsource/saira/700.css'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_ACCESS_TOKEN,
  use: [apiPlugin],
  components: StoryblokComponents,
})

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    {/* <Navbar /> */}
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
