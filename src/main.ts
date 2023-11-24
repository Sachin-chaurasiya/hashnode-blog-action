import * as core from '@actions/core'
import { fetchPosts } from './hashnodeQuery'
import fs from 'fs'
import commitFile from './commitFiles'
import { createMarkdownTable } from './utils/table'

const SECTION_REGEX =
  /^(<!--(?:\s|)HASHNODE_BLOG:(?:START|start)(?:\s|)-->)(?:\n|)([\s\S]*?)(?:\n|)(<!--(?:\s|)HASHNODE_BLOG:(?:END|end)(?:\s|)-->)$/gm

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const publicationName: string = core.getInput('HASHNODE_PUBLICATION_NAME')
    const postCount: number = parseInt(core.getInput('POST_COUNT'))
    const outputFileName: string = core.getInput('FILE')
    const isDebug: boolean = core.getInput('DEBUG') === 'true'

    // fetch posts from hashnode
    const response = await fetchPosts(publicationName, postCount)
    const posts = response.data.publication.posts.edges.map(edge => edge.node)

    const filePath = `${process.env.GITHUB_WORKSPACE}/${outputFileName}`
    const fileContent = fs.readFileSync(filePath, 'utf8')

    const output = createMarkdownTable(posts)

    const result = fileContent
      .toString()
      .replace(SECTION_REGEX, `$1\n${output}\n$3`)

    fs.writeFileSync(filePath, result, 'utf8')

    // commit changes to the file when not in debug mode
    if (!isDebug) {
      // eslint-disable-next-line github/no-then
      await commitFile().catch(err => {
        core.error(err)
        core.info(err.stack)
        process.exit(err.code || -1)
      })
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
