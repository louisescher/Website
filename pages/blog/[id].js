import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Link from '../../components/NoScrollLink'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  const title = postData.title
  const subtitle = postData.desc
  return (
    <div className='bg-maincolor min-h-screen h-auto z-0 relative overflow-x-hidden'>
      <Navbar blog></Navbar>
      <Layout title={title} description={subtitle}>
        <article className='mt-4 sm:w-4/5 2xl:w-1/2 mb-4 text-center mx-auto'>
          <h1 className='text-5xl mb-0'>{postData.title}</h1>
          <div className='text-gray-500 text-xl'>
            <Date dateString={postData.date} />
          </div>
          <hr className='my-4' />
          <div className='article text-left' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <div className='mt-12 w-1/2 mb-4 text-center mx-auto'>
          <Link href="/blog">
            <a id='link'>← Back to blog</a>
          </Link>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}