import { ContentFormat, PostNode } from 'HashNodeTypes'
import { getFormattedDateFromString } from './dateUtils'

/* eslint-disable github/array-foreach */

const createMarkdownTable = (postList: PostNode[]): string => {
  let tableContent = '<table>'

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

const createMarkdownList = (postList: PostNode[]): string => {
  let listContent = ''

  postList.forEach(post => {
    const { title, url } = post

    listContent += `- [${title}](${url})\n`
  })

  return listContent
}

const createMarkdownCard = (postList: PostNode[]): string => {
  let cardContent = ''

  postList.forEach(post => {
    const { title, brief, coverImage, url, publishedAt } = post

    cardContent += `<a href="${url}"><img src="${coverImage.url}" alt="${title}"></a>`
    cardContent += `<a href="${url}"><strong>${title} • ${getFormattedDateFromString(
      publishedAt
    )} </strong></a><br/>${brief}<br/><br/>`
  })

  return cardContent
}

const createMarkdownStackedLayout = (postList: PostNode[]): string => {
  let stackedContent = ''

  postList.forEach(post => {
    const { title, brief, coverImage, url, publishedAt } = post

    stackedContent += `
        <p align="left">
            <a href="${url}" title="${title}">
                <img src="${
                  coverImage.url
                }" alt="${title}" width="300px" align="left" />
            </a>
            <a href="${url}" title="${title}">
                <strong>${title}</strong>
            </a>
            <div>
                <strong>${getFormattedDateFromString(publishedAt)}</strong>
            </div>
            <br/>
            ${brief}
        </p> 
        <br/> 
        <br/>\n\n
`
  })

  return stackedContent
}

export const getFormattedContent = (
  postList: PostNode[],
  format: ContentFormat
): string => {
  switch (format) {
    case 'list':
      return createMarkdownList(postList)

    case 'card':
      return createMarkdownCard(postList)
    case 'stacked':
      return createMarkdownStackedLayout(postList)

    case 'table':
    default:
      return createMarkdownTable(postList)
  }
}
