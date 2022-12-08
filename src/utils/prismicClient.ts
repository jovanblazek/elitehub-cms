import { ClientConfig, createClient, getRepositoryName } from '@prismicio/client'
import { CreateClientConfig, enableAutoPreviews } from '@prismicio/next'
import { ROUTES } from 'shared/constants'
import sm from '../../sm.json'

/**
 * The project's Prismic repository name.
 */
export const REPOSITORY_NAME = getRepositoryName(sm.apiEndpoint)

// Update the routes array to match your project's route structure
const PrismicRoutes: ClientConfig['routes'] = [
  {
    type: 'home_page',
    path: ROUTES.HOME,
  },
  // {
  //   type: 'page',
  //   path: '/:uid',
  // },
]

export const createPrismicClient = ({ previewData, req, ...config }: CreateClientConfig = {}) => {
  const client = createClient(REPOSITORY_NAME, {
    routes: PrismicRoutes,
    ...config,
  })

  enableAutoPreviews({ client, previewData, req })

  return client
}
