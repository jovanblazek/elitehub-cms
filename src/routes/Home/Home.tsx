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
        // subtitle: 'Lorem ipsum dolor sit amet.',
        categories: [
          {
            name: 'Mechaniky',
            slug: 'mechaniky',
          },
        ],
      }}
      titleImage="/exploration.jpeg"
    />
  </Box>
)
