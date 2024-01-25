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
|          `FORMAT`           |             Output format (table, list, card)              |   `table`   |  false   |
|           `FILE`            |                Filename to save the output                 | `README.md` |  false   |
|           `DEBUG`           |                         Debug mode                         |    false    |  false   |

## 🚀 Usage

### 💾 In Repository File

#### Step 1: Include the Following Content in Your README.md or Any File for Display

```markdown
## My Latest Blog Posts 👇

<!-- HASHNODE_BLOG:START -->
<!-- HASHNODE_BLOG:END -->
```

#### Step 2: Configure The Workflow

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

## Live Example : [Sachin-chaurasiya/Sachin-chaurasiya](https://github.com/Sachin-chaurasiya/Sachin-chaurasiya?tab=readme-ov-file#recent-blog-posts-%EF%B8%8F)

### Table
![Table View](https://github.com/Sachin-chaurasiya/hashnode-blog-action/assets/59080942/413bac2d-6dfc-49a0-ac01-9286a8aeebf3)

### List
![List View](https://github.com/Sachin-chaurasiya/hashnode-blog-action/assets/59080942/844b3e39-1d37-48d0-87af-82756e42c483)

### Card
![Card View](https://github.com/Sachin-chaurasiya/hashnode-blog-action/assets/59080942/8bcbbfed-e08b-4cf9-b1c8-d71d405ab084)

