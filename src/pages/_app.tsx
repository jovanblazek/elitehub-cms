import { ChakraProvider } from '@chakra-ui/react'
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import { NextPageWithLayout } from 'next'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { theme } from 'theme'
import { REPOSITORY_NAME } from 'utils/prismicClient'
import '@fontsource/rubik/400.css'
import '@fontsource/rubik/500.css'
import '@fontsource/rubik/600.css'
import '@fontsource/rubik/700.css'
import '@fontsource/saira/400.css'
import '@fontsource/saira/700.css'

type MyAppProps = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <PrismicPreview repositoryName={REPOSITORY_NAME}>
          {getLayout(<Component {...pageProps} />)}
        </PrismicPreview>
      </PrismicProvider>
    </ChakraProvider>
  )
}

export default MyApp
