import { Box, BoxProps, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { COLOR_INTENT } from 'theme'

export interface TitleProps extends BoxProps {
  title: string
  description?: string
  categories?: {
    name: string
    slug: string
  }[]
}

export const Title = ({ categories, title, description, ...rest }: TitleProps) => (
  <Box pt="12" mb="12" {...rest}>
    <Flex mb="4">
      {categories &&
        categories.map(({ name, slug }) => (
          <Link href={slug}>
            <Text fontWeight="medium">{name}</Text>
          </Link>
        ))}
    </Flex>
    <Heading
      as="h1"
      fontSize="5xl"
      mb="2"
      color={COLOR_INTENT.TITLE.TITLE}
      fontWeight="bold"
      letterSpacing="tight"
    >
      {title}
    </Heading>
    <Text color={COLOR_INTENT.TITLE.DESCRIPTION}>{description}</Text>
  </Box>
)
