import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import path from 'path'

const indexContentDirectory = path.join(process.cwd(), 'markdown/index')

export async function getAboutMD() {
  // Read markdown file as string
  const fullPath = path.join(indexContentDirectory, `about.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  var contentHtml = processedContent.toString();

  if(contentHtml.includes("/!BR/")) {
    var splitContent = contentHtml.split("/!BR/")
    var firstPart = splitContent[0] + '</p>'
    var secondPart = '<p class="mt-4">' + splitContent[1]
    contentHtml = firstPart + " " + secondPart
  }

  return {
    contentHtml
  }
}