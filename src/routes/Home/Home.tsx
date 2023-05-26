import { ReactNode } from 'react'
import { SliceZone } from '@prismicio/react'
import type { InferGetStaticPropsType, PreviewData } from 'next'
import Head from 'next/head'
import { getLayout } from 'components/Layout'
import { components } from 'components/slices'
import { createPrismicClient } from 'utils/prismicClient'

export const Home = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{page.data.seo_title}</title>
    </Head>
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

Home.getLayout = (page: ReactNode) => getLayout(page)
