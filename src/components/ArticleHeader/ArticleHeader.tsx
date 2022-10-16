import { Box, Container, Flex } from '@chakra-ui/react'
import { CONTAINER_MAX_WIDTH_PX, NAVBAR_MAX_WIDTH } from 'theme'
import { Title, TitleProps } from './components'

const HEADER_HEIGHT = '58vh'
const HEADER_BRIGHTNESS = 0.85

interface Props {
  titleProps: TitleProps
  titleImage: string
}

export const ArticleHeader = ({ titleProps, titleImage }: Props) => (
  <Flex
    position="relative"
    _before={{
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: -1,
      backgroundImage: `url(${titleImage})`,
      backgroundPosition: 'center',
      backgroundPositionY: '70%', // TODO set this per image
      backgroundSize: 'cover',
      filter: `brightness(${HEADER_BRIGHTNESS})`,
    }}
    alignItems="flex-end"
    height={HEADER_HEIGHT}
  >
    <Box width="100%" px={{ base: '0', xl: '6' }}>
      <Container
        maxWidth={{
          base: CONTAINER_MAX_WIDTH_PX,
          xl: NAVBAR_MAX_WIDTH,
        }}
      >
        <Title {...titleProps} />
      </Container>
    </Box>
  </Flex>
)
