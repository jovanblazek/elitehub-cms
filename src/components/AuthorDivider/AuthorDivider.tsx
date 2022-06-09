import { Box, Divider, Flex, FlexProps, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface Props extends FlexProps {
  name: string
  image: string
  date: string
}

export const AuthorDivider = ({ name, image, date }: Props) => (
  <>
    <Text>Autor</Text>
    <Flex justifyContent="space-between" alignItems="center" py="4">
      <Flex alignItems="center" gap="4">
        <Box position="relative" overflow="hidden" borderRadius="full" width="44px" height="44px">
          <Image src={image} alt={name} width={44} height={44} objectFit="cover" />
        </Box>
        <Text fontWeight="bold">{name}</Text>
      </Flex>
      <Flex pl="4" borderLeft="1px" height="32px" alignItems="center">
        <Text>{date}</Text>
      </Flex>
    </Flex>
    <Divider />
  </>
)
