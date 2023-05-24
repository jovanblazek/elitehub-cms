import { SliceZone } from '@prismicio/react'
import { SliceSimulator } from '@prismicio/slice-simulator-react'
import { BODY_BG_COLOR } from 'theme'
import { components } from 'components/slices'

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={(props) => <SliceZone {...props} components={components} />}
    state={{}}
    background={BODY_BG_COLOR}
  />
)

export default SliceSimulatorPage

export const getStaticProps = () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true }
  }
  return { props: {} }
}
