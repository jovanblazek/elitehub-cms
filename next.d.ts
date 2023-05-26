// next.d.ts
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

declare module 'next' {
  export declare type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
  }
}
