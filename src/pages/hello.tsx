/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getStoryblokApi, ISbStoriesParams, StoryblokComponent } from '@storyblok/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useEditableContent } from '../utils/useEditableContent'

const Page: InferGetStaticPropsType<typeof getStaticProps> = ({ story: s }) => {
  const story = useEditableContent(s)

  return (
    <>
      {/* {story?.content?.seo_content?.content && <Seo {...story.content.seo_content?.content} />} */}
      <Head>
        <title>{story ? story.name : 'My Site'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoryblokComponent blok={story.content} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params?.slug ? `pages/${(params.slug as string[]).join('/')}` : 'pages/home'

  const sbParams: ISbStoriesParams = {
    version: 'draft',
    // resolve_relations: resolveRelations,
    // resolve_links: 'url',
  }

  const storyblokApi = getStoryblokApi()

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      story: data ? data.story : false,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/', {
    starts_with: 'pages',
  })

  const paths = []
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  Object.keys(data.links).forEach((linkKey) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'pages/home') {
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const { slug } = data.links[linkKey]
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const splittedSlug = slug.split('/').slice(1)

    paths.push({ params: { slug: splittedSlug } })
  })

  paths.push({ params: { slug: false } })

  return {
    paths,
    fallback: false,
  }
}

export default Page
