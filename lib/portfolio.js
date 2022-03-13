import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Showdown from 'showdown'

const portfolioDir = path.join(process.cwd(), 'markdown/portfolio')

export function getSortedProjData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(portfolioDir)
  const allProjectsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(portfolioDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allProjectsData.sort(({ position: a }, { position: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllProjIds() {
  const fileNames = fs.readdirSync(portfolioDir)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getProjData(id) {
  const fullPath = path.join(portfolioDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  // Use remark to convert markdown into HTML string
  var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = matterResult.content,
    html      = converter.makeHtml(text);
    console.log(html)
    var contentHtml = html.toString();
  
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}