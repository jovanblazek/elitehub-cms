import { GetStaticPaths, GetStaticProps } from 'next'
import sanityClient from 'utils/sanityClient'
// eslint-disable-next-line no-restricted-exports
export { Guide as default } from 'routes/Guide'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await sanityClient.fetch(
    `*[_type == "guide" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = '' } = context?.params || {}
  const guide = await sanityClient.fetch(
    `
    *[_type == "guide" && slug.current == $slug][0]{title, body}
  `,
    { slug }
  )
  return {
    props: {
      guide,
    },
  }
}
