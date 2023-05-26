import { get } from 'lodash'
import { Navbar } from 'components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigation = get(children, ['props', 'navigation'], [])
  return (
    <>
      <Navbar navigation={navigation} />
      <main>{children}</main>
    </>
  )
}

export const getLayout = (
  page: React.ReactNode,
  layoutProps: Omit<LayoutProps, 'children'> = {}
) => <Layout {...layoutProps}>{page}</Layout>
