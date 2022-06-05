import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { PortableText } from 'components/PortableText'

interface Props {
  guide: {
    title: string
    slug: {
      current: string
    }
    categories: {
      title: string
    }[]
    body: never
  }
}

export const Guide = ({ guide }: Props) => {
  console.log(guide)
  return (
    <Flex flexDirection="column">
      <h1>{guide.title}</h1>
      <PortableText value={guide.body} />
      <Link href="/">Back</Link>
    </Flex>
  )
}
