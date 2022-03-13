import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import path from 'path'

const skillsContentDirectory = path.join(process.cwd(), 'markdown/skills')

export async function getProgLangMD() {
  // Read markdown file as string
  const fullPath = path.join(skillsContentDirectory, `programming_langs.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  var contentHtml = processedContent.toString();

  return {
    contentHtml
  }
}

export async function getNormalLangMD() {
  // Read markdown file as string
  const fullPath = path.join(skillsContentDirectory, `normal_langs.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  var contentHtml = processedContent.toString();

  return {
    contentHtml
  }
}

export async function getToolsMD() {
  // Read markdown file as string
  const fullPath = path.join(skillsContentDirectory, `tools.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  var contentHtml = processedContent.toString();

  return {
    contentHtml
  }
}