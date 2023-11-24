<p align="center">
    <a href="https://hashnode.com/">
        <img src="https://cdn.svarun.dev/common/hashnode/icon.png" width="150px"/>
    </a>
</p>

<h1 align="center">Hashnode Blog GitHub Action - <i>Latest <a href="https://gql.hashnode.com/">Hashnode Public API</a> Support</i></h1>
<p align="center">Action to pull your latest blog from hashnode and show it in a nice format</p>

## ⚙️ Configuration

|           Option            |                        Description                         |   Default   | Required |
| :-------------------------: | :--------------------------------------------------------: | :---------: | :------: |
| `HASHNODE_PUBLICATION_NAME` | Your hashnode publication name, Example: blog.hashnode.dev |    null     |   true   |
|        `POST_COUNT`         |                   Number of posts count                    |      6      |  false   |
|           `FILE`            |                File name to save the output                | `README.md` |  false   |
|           `DEBUG`           |                        'Debug mode'                        |    false    |  false   |

## 🚀 Usage

### 💾 In Repository File

#### 1. Add The Below Content To Your README.md / Any file you want to showcase

```markdown
## My Latest Blog Posts 👇

<!-- HASHNODE_BLOG:START -->
<!-- HASHNODE_BLOG:END -->
```

#### 2. Configure The Worklfow

```yaml
name: 'Hashnode Blogs'

on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * *' # Runs Every Day

jobs:
  update_blogs:
    name: 'Hashnode Latest Blogs'
    runs-on: ubuntu-latest
    steps:
      - name: 'Fetch Repository Contents'
        uses: actions/checkout@main

      - name: 'Hashnode Blog Action'
        uses: 'Sachin-chaurasiya/hashnode-blog-action@main'
        with:
          HASHNODE_PUBLICATION_NAME: 'blog.hashnode.dev'
          POST_COUNT: 6
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
