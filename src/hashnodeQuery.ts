import { HashNodeArticleResponse } from 'HashNodeTypes'

export const BASE_URL = 'https://gql.hashnode.com/'

const getQuery = (publicationName: string, limit: number) => {
  return `{
  publication(host: "${publicationName}") {
    posts(first: ${limit}) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
          reactionCount
          replyCount
        }
      }
    }
  }
}`
}

export const fetchPosts = async (
  publicationName: string,
  limit: number
): Promise<HashNodeArticleResponse> => {
  const query = getQuery(publicationName, limit)
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
  const { data } = await response.json()
  return data
}
