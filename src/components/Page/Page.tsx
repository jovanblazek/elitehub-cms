import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { GridStoryblok, PageStoryblok } from 'generated/storyblok-components'

interface PageInterface {
  blok: PageStoryblok
}

export const Page: React.FC<PageInterface> = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body &&
      blok.body.map((nestedBlok: GridStoryblok) => (
        // nestedBlok: GridStoryblok is not necesarily true, but we do not have types for any block
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
  </main>
)
