import { Box, Container, Img } from '@chakra-ui/react'
import { COLORS } from 'theme'
import { AuthorDivider, AuthorProps } from 'components/AuthorDivider'
import { Title, TitleProps } from 'components/Title'

interface Props {
  titleProps: TitleProps
  titleImage?: string
  authorProps: AuthorProps
}

export const ArticleHeader = ({ titleProps, titleImage, authorProps }: Props) => (
  <Box position="relative">
    <Container>
      <Title {...titleProps} />
      <Img src={titleImage} borderRadius="md" my="8" />
      <AuthorDivider {...authorProps} />
    </Container>
    {/* 
    // TODO: use simple exploration images
  */}
    <Box
      // backgroundImage="/bgimage.jpg"
      borderTop={`1px solid ${COLORS.brand.sonicSilver}`}
      backgroundColor={COLORS.brand.raisinBlack}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom="200px"
      backgroundSize="cover"
      zIndex={-1}
    />
  </Box>
)
