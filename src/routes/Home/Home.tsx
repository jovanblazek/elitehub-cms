import { Box, Container } from '@chakra-ui/react'
import { ArticleHeader } from 'components/ArticleHeader'

export const Home = () => (
  <Box>
    {/* <div>Hello world!</div>
    <Button variant="outline">Hello world</Button>
    <Link href="/guide/bounty-hunting">to guide</Link> */}
    <ArticleHeader
      titleProps={{
        title: 'Exploration',
        categories: [
          {
            name: 'Mechaniky',
            slug: 'mechaniky',
          },
        ],
      }}
      titleImage="/exploration.jpeg"
    />
    <Container mb="80">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est erat, auctor eget
      ultrices vel, mollis a diam. Cras pretium dolor interdum justo pellentesque maximus. Nulla
      tempor velit velit, vel egestas elit pulvinar id. Cras cursus libero risus, quis euismod neque
      fermentum in. Vivamus maximus, est eget porta pretium, velit nisi commodo leo, eget tristique
      elit eros non nisl. Maecenas interdum ac ante quis tempor. Nam finibus iaculis tellus, ut
      ultricies enim. Nunc ac odio at elit gravida egestas ut sed quam. Proin blandit justo euismod
      leo tempor cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Sed egestas feugiat lectus, eget hendrerit diam rutrum vel. Donec feugiat
      justo tempor, dignissim dui eu, dapibus nisi. Mauris dictum convallis leo et iaculis. Maecenas
      aliquam diam justo, a rhoncus nunc tempus in. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia curae; Ut tincidunt ullamcorper tempor. Suspendisse
      facilisis quam ac velit semper accumsan. Donec non semper leo. Aliquam fringilla mi libero. In
      ex urna, ornare volutpat metus non, sagittis blandit mi. Fusce orci mi, efficitur vel pulvinar
      quis, placerat vitae eros. Praesent vitae lectus lacinia, sodales sapien sit amet, laoreet
      justo. Donec et nunc sed leo tincidunt imperdiet. Aenean eget eleifend nunc, efficitur sodales
      velit. Morbi eu laoreet dolor. Donec malesuada fringilla rhoncus. Donec consectetur dui nec
      ante dapibus mollis. Ut eros felis, hendrerit eu cursus in, volutpat id augue. Vivamus feugiat
      magna eget purus maximus sodales. Etiam risus dui, malesuada id imperdiet sed, bibendum
      porttitor metus. Donec quis tellus sed turpis convallis iaculis. Aenean tortor ligula, luctus
      eget feugiat sit amet, tempus gravida enim. Sed et ante a nulla suscipit molestie. Fusce lacus
      sapien, pharetra nec dapibus ut, imperdiet nec ex. Donec porta pretium metus eget ornare. Nam
      nulla lorem, auctor at mauris quis, dapibus sollicitudin mauris. Nunc sed sapien accumsan,
      tincidunt neque in, ultricies urna. Aenean accumsan dolor non ante tristique faucibus. Cras
      pellentesque ut nisi vitae lacinia. Ut libero risus, dignissim eget augue id, feugiat
      fermentum odio. Fusce accumsan rhoncus ex, non consectetur nunc fermentum sed. Proin consequat
      gravida nunc, non accumsan metus consectetur at. Donec sed massa est. Nunc sit amet odio eu
      arcu tempus tristique id quis magna. Duis id eros lectus. Duis elementum nibh sed egestas
      varius. Nunc ac turpis sollicitudin, tincidunt orci eget, accumsan sem. Aliquam a lacinia
      lectus, sed convallis ex. Nulla in ipsum et tortor ullamcorper laoreet. Suspendisse luctus
      consequat tincidunt. Vivamus maximus porttitor lacus, eget venenatis nisl. Maecenas eget
      viverra justo. Vivamus imperdiet elementum dui eu sollicitudin.
    </Container>
  </Box>
)
