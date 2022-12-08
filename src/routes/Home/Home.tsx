import { SliceZone } from '@prismicio/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { components } from 'slices'
import { createPrismicClient } from 'utils/prismicClient'
import type { HomePageDocument } from '../../../.slicemachine/prismicio'

export const Home = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{page.data.seo_title}</title>
    </Head>
    <SliceZone slices={page.data.slices} components={components} />
  </>
)

export const getStaticProps: GetStaticProps<{
  page: HomePageDocument
}> = async ({ previewData }) => {
  const client = createPrismicClient({ previewData })
  const page = await client.getSingle('home_page')

  return {
    props: {
      page,
    },
  }
}
