import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { ArticleHeader } from 'components/ArticleHeader'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => (
  <ArticleHeader
    titleImage="/exploration.jpeg"
    titleProps={{
      titleText: slice.primary.title,
    }}
  />
)

export default Hero
