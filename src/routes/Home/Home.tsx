import { SliceZone } from '@prismicio/react'
import type { InferGetStaticPropsType, PreviewData } from 'next'
import Head from 'next/head'
import { Navbar } from 'components/Navbar'
import { components } from 'components/slices'
import { createPrismicClient } from 'utils/prismicClient'

export const Home = ({ page, navigation }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{page.data.seo_title}</title>
    </Head>
    <Navbar navigation={navigation} />
    <SliceZone slices={page.data.slices} components={components} />
  </>
)

export const getStaticProps = async ({ previewData }: { previewData: PreviewData }) => {
  const client = createPrismicClient({ previewData })
  const [navigation, page] = await Promise.all([
    client.getSingle('navigation'),
    client.getSingle('home_page'),
  ])

  return {
    props: {
      navigation,
      page,
    },
  }
}
