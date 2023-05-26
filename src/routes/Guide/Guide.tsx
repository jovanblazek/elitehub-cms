import { ReactNode } from 'react'
import { SliceZone } from '@prismicio/react'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { ArticleHeader } from 'components/ArticleHeader'
import { getLayout } from 'components/Layout'
import { components } from 'components/slices'
import { createPrismicClient } from 'utils/prismicClient'

export const Guide = ({ article }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{article.data.title}</title>
    </Head>
    <ArticleHeader
      titleImage="/exploration.jpeg"
      titleProps={{
        titleText: article.data.title,
      }}
    />
    <SliceZone slices={article.data.slices} components={components} />
  </>
)

export const getStaticProps = async ({
  previewData,
  params,
}: GetStaticPropsContext<{
  uid: string
}>) => {
  try {
    if (!params) {
      throw new Error('Missing params when getting static props for guide')
    }
    const client = createPrismicClient({ previewData })
    const article = await client.getByUID('article', params.uid)
    const [navigation] = await Promise.all([
      client.getSingle('navigation'),
      client.getByUID('article', params.uid),
    ])

    return {
      props: {
        navigation,
        article,
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  const client = createPrismicClient()
  const articles = await client.getAllByType('article')

  const paths = articles.map(({ uid }) => ({
    params: {
      uid,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

Guide.getLayout = (page: ReactNode) => getLayout(page)
