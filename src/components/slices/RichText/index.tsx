import { Box, Heading, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { COLOR_INTENT } from 'theme'

/**
 * Props for `RichText`.
 */
export type RichTextProps = SliceComponentProps<Content.RichTextSlice>

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  console.log('richtext')
  return (
    <PrismicRichText
      field={slice.primary.content}
      components={{
        heading1: ({ children }) => <Heading as="h1">{children}</Heading>,
        heading2: ({ children }) => <Heading as="h2">{children}</Heading>,
        heading3: ({ children }) => <Heading as="h3">{children}</Heading>,
        heading4: ({ children }) => <Heading as="h4">{children}</Heading>,
        heading5: ({ children }) => <Heading as="h5">{children}</Heading>,
        heading6: ({ children }) => <Heading as="h6">{children}</Heading>,
        oList: ({ children }) => <OrderedList>{children}</OrderedList>,
        oListItem: ({ children }) => <ListItem>{children}</ListItem>,
        list: ({ children }) => <UnorderedList>{children}</UnorderedList>,
        listItem: ({ children }) => <ListItem>{children}</ListItem>,
        hyperlink: ({ node, children }) => (
          <PrismicNextLink field={node.data}>
            <Text
              as="span"
              color={COLOR_INTENT.LINK.TEXT}
              _hover={{
                textDecor: 'underline',
              }}
            >
              {children}
            </Text>
          </PrismicNextLink>
        ),
        // TODO use chakras aspect ratio and add values to iframe
        embed: ({ node }) => (
          <Box
            data-oembed={node.oembed.embed_url}
            data-oembed-type={node.oembed.type}
            data-oembed-provider={node.oembed.provider_name}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: node.oembed.html
                ? node.oembed.html.replace(/width="\d+"/, '').replace(/height="\d+"/, '')
                : '',
            }}
          />
        ),
      }}
    />
  )
}

export default RichText
