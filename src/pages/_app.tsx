import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from 'theme'
import { Header } from 'components/Header'
import '@fontsource/rubik/400.css'
import '@fontsource/saira/400.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
