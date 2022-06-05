import { Image, Text, VStack } from '@chakra-ui/react'
import { PortableText as PortableTextReact } from '@portabletext/react'
import imageBuilder from '@sanity/image-url'
import { SanityImageObject, SanityImageSource } from '@sanity/image-url/lib/types/types'
import sanityClient from 'utils/sanityClient'

interface BlockContentImage {
  value: SanityImageObject & { alt?: string; caption?: string }
}

const getSanityImage = (source: SanityImageSource) => imageBuilder(sanityClient).image(source)

const Components = {
  types: {
    // TODO: Figure out how to make this use next/image
    image: ({ value }: BlockContentImage) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <VStack>
          <Image src={getSanityImage(value).url()} alt={value.alt || ''} />
          {value.caption && <Text>{value.caption}</Text>}
        </VStack>
      )
    },
  },
}

interface Props {
  value: never
}

export const PortableText = ({ value }: Props) => (
  <PortableTextReact value={value} components={Components} />
)
