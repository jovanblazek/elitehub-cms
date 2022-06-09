import { Container, Img } from '@chakra-ui/react'
import { AuthorDivider } from 'components/AuthorDivider'
import { Title } from 'components/Title'

export const Home = () => (
  <Container mb="80">
    {/* <div>Hello world!</div>
    <Button variant="outline">Hello world</Button>
    <Link href="/guide/bounty-hunting">to guide</Link> */}

    <Title
      title="Background Simulation"
      description="Lorem ipsum dolor sit amet."
      categories={[
        {
          name: 'Mechaniky',
          slug: 'mechaniky',
        },
      ]}
      my="12"
    />
    <Img src="/image.jpeg" borderRadius="md" my="8" />
    <AuthorDivider name="Jovan Blazek" image="/image.jpeg" date="Jun 9, 2022" />
  </Container>
)
