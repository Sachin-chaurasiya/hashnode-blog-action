import * as core from '@actions/core'
import { fetchPosts } from './hashnodeQuery'
import { PostNode } from 'HashNodeTypes'
import fs from 'fs'
import commitFile from './commitFiles'

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
    const response = await fetchPosts(publicationName, postCount)
    const posts = response.data.publication.posts.edges.map(edge => edge.node)

    const createMarkdownTable = (posts: PostNode[]) => {
      return posts
        .map(post => {
          return `| ![${post.title}](${post.coverImage.url}) | [${post.title}](https://blog.alexdevero.com/${post.slug}) | ${post.publishedAt} |`
        })
        .join('\n')
    }

    const regex =
      /^(<!--(?:\s|)HASHNODE_BLOG:(?:START|start)(?:\s|)-->)(?:\n|)([\s\S]*?)(?:\n|)(<!--(?:\s|)HASHNODE_BLOG:(?:END|end)(?:\s|)-->)$/gm

    const filePath = `${process.env.GITHUB_WORKSPACE}/${outputFileName}`
    const fileContent = fs.readFileSync(filePath, 'utf8')

    const output = createMarkdownTable(posts)

    const result = fileContent.toString().replace(regex, `$1\n${output}\n$3`)

    fs.writeFileSync(filePath, result, 'utf8')

    await commitFile().catch(err => {
      core.error(err)
      core.info(err.stack)
      process.exit(err.code || -1)
    })
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
