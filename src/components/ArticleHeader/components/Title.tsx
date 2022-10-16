import { Box, BoxProps, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { rem } from 'polished'
import { COLOR_INTENT } from 'theme'

const DIVIDER_WIDTH = rem(150)
const DIVIDER_HEIGHT = rem(1)

export interface TitleProps extends BoxProps {
  title: string
  categories?: {
    name: string
    slug: string
  }[]
}

export const Title = ({ categories, title, ...rest }: TitleProps) => (
  <Box pt="12" mb="12" {...rest}>
    <Flex mb="4">
      {categories &&
        categories.map(({ name, slug }) => (
          <Link href={slug} key={slug}>
            <Text fontWeight="medium">{name}</Text>
          </Link>
        ))}
    </Flex>
    <Heading
      as="h1"
      fontSize="6xl"
      mb="2"
      color={COLOR_INTENT.TITLE.TITLE}
      fontWeight="medium"
      letterSpacing="tight"
      textShadow={`${COLOR_INTENT.TITLE.TEXT_SHADOW} 0px 0px 25px`}
    >
      {title}
    </Heading>
    <Divider mt="3" width={DIVIDER_WIDTH} borderWidth={DIVIDER_HEIGHT} />
  </Box>
)
