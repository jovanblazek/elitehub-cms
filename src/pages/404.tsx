import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import { Home } from '@emotion-icons/boxicons-solid'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from 'shared/constants'

const NOT_FOUND_MESSAGE = 'Houston, máme problém'
const BUTTON_TEXT = 'Domov'

const NotFound = () => (
  <Flex flexDirection="column" justifyContent="center" gap="6" mt="16" px="8">
    <Box textAlign="center">
      <Image layout="intrinsic" src="/404_orange.png" width={264} height={138} />
    </Box>
    <Text textAlign="center" fontSize="xl">
      {NOT_FOUND_MESSAGE}
    </Text>
    <Link href={ROUTES.HOME}>
      <Button variant="outline" width="max-content" mx="auto" leftIcon={<Icon as={Home} />}>
        {BUTTON_TEXT}
      </Button>
    </Link>
  </Flex>
)

export default NotFound
