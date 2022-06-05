import { Box, Image } from '@chakra-ui/react'
import { PortableText as PortableTextReact } from '@portabletext/react'
import imageBuilder from '@sanity/image-url'
import { SanityImageObject, SanityImageSource } from '@sanity/image-url/lib/types/types'
import sanityClient from 'utils/sanityClient'

const getImageUrl = (source: SanityImageSource) => imageBuilder(sanityClient).image(source)

const Components = {
  types: {
    // TODO: Figure out how to make this use next/image
    image: ({ value }: { value: SanityImageObject }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return <Image src={getImageUrl(value).toString()} alt={value.alt || ''} />
    },
  },
}

interface Props {
  value: never
}

export const PortableText = ({ value }: Props) => (
  <PortableTextReact value={value} components={Components} />
)
