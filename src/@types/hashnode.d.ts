declare module 'HashNodeTypes' {
  export interface PageInfo {
    hasNextPage: boolean
    endCursor?: string
  }

  export interface Edge {
    node: PostNode
  }

  export interface PostNode {
    title: string
    brief: string
    slug: string
    publishedAt: string
    coverImage: CoverImage
    reactionCount: number
    replyCount: number
  }

  export interface CoverImage {
    url: string
  }

  export interface Posts {
    totalDocuments: number
    pageInfo: PageInfo
    edges: Edge[]
  }

  export interface HashNodeArticleResponse {
    data: {
      publication: {
        posts: Posts
      }
    }
  }
}