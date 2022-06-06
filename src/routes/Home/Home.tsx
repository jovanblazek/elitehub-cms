import { Button } from '@chakra-ui/react'
import Link from 'next/link'

export const Home = () => (
  <>
    <div>Hello world!</div>
    <Button variant="outline">Hello world</Button>
    <Link href="/guide/bounty-hunting">to guide</Link>
  </>
)
