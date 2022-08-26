import Layout from '../../components/layout'
import { getAllProjIds, getProjData } from '../../lib/portfolio'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Link from '../../components/NoScrollLink'

export async function getStaticProps({ params }) {
  const projData = await getProjData(params.id)
  return {
    props: {
      projData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllProjIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ projData }) {
  const title = projData.title
  const subtitle = projData.desc
  return (
    <div className='bg-maincolor min-h-screen h-auto z-0 relative overflow-x-hidden'>
      <Navbar portfolio></Navbar>
      <Layout title={title} description={subtitle}>
        <article className='mt-4 sm:w-4/5 2xl:w-1/2 mb-4 text-center mx-auto px-8'>
          <h1 className='text-3xl sm:text-5xl mb-0'>{projData.title}</h1>
          <hr className='my-4' />
          <div className='article text-left font-light' dangerouslySetInnerHTML={{ __html: projData.contentHtml }} />
        </article>
        <div className='mt-12 w-full mb-4 text-center mx-auto'>
          <Link href="/portfolio">
            <a id='link'>← Back to portfolio</a>
          </Link>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}