import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import category from './category'
import author from './author'
import guide from './guide'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // The following are document types which will appear in the studio.
    guide,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
