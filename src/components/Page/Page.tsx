/* eslint-disable */
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

// @ts-ignore
const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: unknown) => (
      // @ts-ignore
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
)

export default Page
