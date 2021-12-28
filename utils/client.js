import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com'
})

export default client
