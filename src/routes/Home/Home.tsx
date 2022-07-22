import { Box } from '@chakra-ui/react'
import { ArticleHeader } from 'components/ArticleHeader'

export const Home = () => (
  <Box mb="80">
    {/* <div>Hello world!</div>
    <Button variant="outline">Hello world</Button>
    <Link href="/guide/bounty-hunting">to guide</Link> */}
    <ArticleHeader
      titleProps={{
        title: 'Background Simulation',
        description: 'Lorem ipsum dolor sit amet.',
        categories: [
          {
            name: 'Mechaniky',
            slug: 'mechaniky',
          },
        ],
      }}
      titleImage="/image.jpeg"
      authorProps={{
        name: 'John Doe',
        image: '/image.jpeg',
        date: 'Jun 9, 2022',
      }}
    />
  </Box>
)
