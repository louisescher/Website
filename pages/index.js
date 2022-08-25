import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Link from '../components/NoScrollLink'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjData } from '../lib/portfolio'
import { getAboutMD } from '../lib/index'
import DateElement from '../components/date'
import Footer from '../components/footer'
import LandingWrapper from '../components/index/landingwrapper'
import SectionHeader from '../components/sectionheader'

export async function getServerSideProps() {
  let fetchedPostData = getSortedPostsData()
  const singlePost = [fetchedPostData[0]]
  
  let fetchedProjData = getSortedProjData()
  const singleProj = [fetchedProjData[0]]

  let aboutHTML = await getAboutMD();
  
  // Combine the data with the id and contentHtml
  return {
    props: {
      singlePost,
      singleProj,
      aboutHTML
    }
  }
}

export default function Home({ singlePost, singleProj, aboutHTML }) {
  const title = "Home"
  const subtitle = "Hello world, I'm Spirit"
  return(
    <div className='bg-maincolor min-h-screen h-auto z-0 relative overflow-x-hidden'>
      <Navbar home></Navbar>
      <Layout title={title} description={subtitle}>

        <LandingWrapper /> 
        
        <div className='ml-4 mr-4 md:ml-16 md:mr-16 mt-12 x-full 2xl:w-1/2 text-lg'>
          <SectionHeader>About</SectionHeader>
          <div dangerouslySetInnerHTML={{ __html: aboutHTML.contentHtml }} />
        </div>

        <div className='ml-4 mr-4 md:ml-16 md:mr-16 mt-12 x-full 2xl:w-1/2'>
          <SectionHeader>Blog</SectionHeader>
          <h1 className='text-2xl'>Latest Article:</h1>
          <ul className='flex flex-col list-none ml-0'>
            {singlePost.map(({ id, date, title, desc }) => (
              <li className="border border-gray-700 rounded-sm text-xl p-6 mt-4" key={id}>
                <span>{title}</span>
                <br />
                <small className='text-gray-500'>
                  <DateElement dateString={date} />
                  <br />
                  <span className='text-gray-400'>{desc}</span>
                  <br />
                  <Link href={`/blog/${id}`}>
                    <a id='link'>View Post</a>
                  </Link>
                </small>
              </li>
            ))}
          </ul>
        </div>
        
        <div className='ml-4 mr-4 md:ml-16 mt-12 x-full 2xl:w-1/2 md:mr-16'>
          <SectionHeader>Featured project</SectionHeader>
          <ul className='flex flex-col list-none ml-0'>
            {singleProj.map(({ id, title, desc }) => (
              <li className="text-2xl p-8 pl-0 mt-6 flex flex-row justify-start items-center" key={id}>
                <div className='w-2/3 hidden sm:block'>
                  <img 
                    src={`https://media.codedotspirit.dev/images/portfolio/${title}/${title}.png`}
                    id="home-proj-img"
                    alt={`Image of ${title}`}
                  />
                </div>
                <div className='bg-gradient-to-b from-fuchsia-600 to-pink-600 ml-8 sm:ml-8 pl-px'>
                  <div className='bg-maincolor pl-8'>
                    <span className='text-3xl'>{title}</span>
                    <br className='mb-2' />
                    <small>
                      <div className='text-gray-400 text-base'>{desc}</div>
                      <Link href={`/portfolio/${id}`}>
                        <a id='link'>View Project</a>
                      </Link>
                    </small>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}