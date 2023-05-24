import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import { ROUTES } from 'shared/constants'
import config from '../../slicemachine.config.json'

/**
 * The project's Prismic repository name.
 */
export const REPOSITORY_NAME = config.repositoryName

/**
 * A list of Route Resolver objects that define how a document's `url` field
 * is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// Update the routes array to match your project's route structure.
const PrismicRoutes: prismic.ClientConfig['routes'] = [
  {
    type: 'home_page',
    path: ROUTES.HOME,
  },
  // {
  //   type: 'page',
  //   path: '/:uid',
  // },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param clientConfig - Configuration for the Prismic client.
 */
export const createPrismicClient = (clientConfig: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(REPOSITORY_NAME, {
    routes: PrismicRoutes,
    ...clientConfig,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: clientConfig.previewData,
    req: clientConfig.req,
  })

  return client
}
