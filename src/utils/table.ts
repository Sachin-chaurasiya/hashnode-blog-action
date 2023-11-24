import { PostNode } from 'HashNodeTypes'

export const createMarkdownTable = (postList: PostNode[]): string => {
  let tableContent = '<table>'

  // eslint-disable-next-line github/array-foreach
  postList.forEach(post => {
    const { title, brief, coverImage, url } = post

    tableContent += '<tr>'
    tableContent += `<td><img src="${coverImage.url}" alt="${title}"></td>`
    tableContent += `<td><a href="${url}"><strong>${title}</strong></a><br>${brief}</td>`
    tableContent += '</tr>'
  })

  tableContent += '</table>'

  return tableContent
}
