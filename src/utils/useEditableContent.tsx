/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from 'react'
import { getStoryblokBridge, USE_STORYBLOK_BRIDGE } from './getStoryblokBridge'

export const useEditableContent = (initialPage: unknown) => {
  const [page, setPage] = useState(initialPage)

  useEffect(() => {
    setPage(initialPage)
  }, [initialPage])

  useEffect(() => {
    let bridge: any
    void (async () => {
      if (USE_STORYBLOK_BRIDGE) {
        bridge = await getStoryblokBridge()

        bridge.on('input', (event: unknown) => {
          if (event) {
            // @ts-ignore
            setPage(event.story)
          }
        })
        bridge.on(['change', 'published'], () => window.location.reload())
      }
    })()

    return () => {}
  }, [])

  return page
}
