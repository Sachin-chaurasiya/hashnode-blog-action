<p align="center">
    <a href="https://hashnode.com/">
        <img src="https://cdn.svarun.dev/common/hashnode/icon.png" width="150px"/>
    </a>
</p>

<h1 align="center">Hashnode Blog GitHub Action - <i>Latest <a href="https://gql.hashnode.com/">Hashnode Public API</a> Support</i></h1>
<p align="center">GitHub action to fetch and display your latest blog from Hashnode in a visually pleasing manner</p>
<p align="center">
  <img src="https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg" alt="GitHub Super-Linter">
  <img src="https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg" alt="CI">
  <img src="https://github.com/actions/typescript-action/actions/workflows/check-dist.yml/badge.svg" alt="Check dist/">
  <img src="https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml/badge.svg" alt="CodeQL">
</p>

## ⚙️ Configuration

|           Option            |                        Description                         |   Default   | Required |
| :-------------------------: | :--------------------------------------------------------: | :---------: | :------: |
| `HASHNODE_PUBLICATION_NAME` | Your hashnode publication name, Example: blog.hashnode.dev |    null     |   true   |
|        `POST_COUNT`         |                   Number of posts count                    |      6      |  false   |
|          `FORMAT`           |         Output format (table, list, card, stacked)         |   `table`   |  false   |
|           `FILE`            |                Filename to save the output                 | `README.md` |  false   |
|           `DEBUG`           |                         Debug mode                         |    false    |  false   |

## 🚀 Usage

### Step 1: Include the following content in your `README.md` or any file for display

```markdown
## My Latest Blog Posts 👇

<!-- HASHNODE_BLOG:START -->
<!-- HASHNODE_BLOG:END -->
```

### Step 2: Configure The Workflow

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
          FORMAT: 'list'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 🚀 Live Example : [Sachin-chaurasiya/Sachin-chaurasiya](https://github.com/Sachin-chaurasiya/Sachin-chaurasiya?tab=readme-ov-file#recent-blog-posts-%EF%B8%8F)

### Table

![Table View](https://github.com/Sachin-chaurasiya/hashnode-blog-action/assets/59080942/413bac2d-6dfc-49a0-ac01-9286a8aeebf3)

### List

![List View](https://github.com/Sachin-chaurasiya/hashnode-blog-action/assets/59080942/844b3e39-1d37-48d0-87af-82756e42c483)

### Card

![Card View](https://github.com/Sachin-chaurasiya/hashnode-blog-action/assets/59080942/8bcbbfed-e08b-4cf9-b1c8-d71d405ab084)

### Stacked

![image](https://github.com/Sachin-chaurasiya/hashnode-blog-action/assets/59080942/d1b45bda-6cdb-4614-8d8a-cdf47a3efc36)

## Local Development

### Step1 : Fork and clone the repository

```shell
git clone https://github.com/<your-name>/hashnode-blog-action.git

cd hashnode-blog-action
```

### Step2: Install the dependencies

```shell
npm install
```

### Step3: Make your changes

### Step4: Adding tests (if applicable)
Add unit test for your changes [__tests__](https://github.com/Sachin-chaurasiya/hashnode-blog-action/tree/main/__tests__)

### Step5: Run the checks and package your changes

> The below command will

- Format your code
- Lint your code
- Run the unit tests and coverage
- And Finally bundle everything

```shell
npm run all
```
### Step6: Raise a PR for your contribution

```shell
git add .
git commit -m "meaningful commit message"
git push <branch_name>
```

## 🛡️ License

Hashnode blog action is licensed under the MIT License - see the
[LICENSE](https://github.com/Sachin-chaurasiya/hashnode-blog-action/blob/main/LICENSE)
file for details.

## Contributors

We ❤️ all contributions, big and small! Check out our
[CONTRIBUTING](./CONTRIBUTING.md) guide to get started and let us know how we
can help.

Don't want to miss anything? Give the project a ⭐ 🚀

A HUGE THANK YOU to all our supporters!

## Stargazers

[![Stargazers of hashnode-blog-action](http://reporoster.com/stars/Sachin-chaurasiya/hashnode-blog-action)](https://github.com/Sachin-chaurasiya/hashnode-blog-action/stargazers)

## Contributors

<a href="https://github.com/Sachin-chaurasiya/hashnode-blog-action/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Sachin-chaurasiya/hashnode-blog-action" />
</a>
