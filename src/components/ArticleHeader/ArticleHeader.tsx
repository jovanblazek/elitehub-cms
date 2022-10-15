import { Container, Flex } from '@chakra-ui/react'
import { Title, TitleProps } from 'components/Title'

const HEADER_HEIGHT = '50vh'
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
      backgroundSize: 'cover',
      filter: `brightness(${HEADER_BRIGHTNESS})`,
    }}
    alignItems="flex-end"
    height={HEADER_HEIGHT}
  >
    <Container>
      <Title {...titleProps} filter="revert" />
    </Container>
  </Flex>
)
