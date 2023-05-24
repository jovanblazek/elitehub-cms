import { Box } from '@chakra-ui/react'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { GridStoryblok } from 'generated/storyblok-components'

interface GridBlockInterface {
  blok: GridStoryblok
}

export const Grid: React.FC<GridBlockInterface> = ({ blok }) => (
  <Box
    display="grid"
    gridTemplateColumns={{
      xs: 'repeat(1, 1fr)',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      xl: 'repeat(4, 1fr)',
    }}
    {...storyblokEditable(blok)}
  >
    {blok.columns &&
      blok.columns.map((nestedBlok: GridStoryblok) => (
        // nestedBlok: GridStoryblok is not necesarily true, but we do not have types for any block
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
  </Box>
)
