import * as core from '@actions/core'
import { fetchPosts } from './hashnodeQuery'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const publicationName: string = core.getInput('HASHNODE_PUBLICATION_NAME')
    const postCount: number = parseInt(core.getInput('POST_COUNT'))
    const outputFileName: string = core.getInput('FILE')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Publication Name: ${publicationName}`)
    core.debug(`Post Count: ${postCount}`)
    core.debug(`Output File Name: ${outputFileName}`)

    // fetch posts from hashnode
    const posts = await fetchPosts(publicationName, postCount)

    core.debug(
      `Posts: ${JSON.stringify(
        posts.data.publication.posts.edges.map(edge => edge.node)
      )}`
    )
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
