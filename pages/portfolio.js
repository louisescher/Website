import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { getSortedProjData } from '../lib/portfolio'
import Link from '../components/NoScrollLink'
import SectionHeader from '../components/sectionheader'

export async function getServerSideProps() {
  const allProjData = getSortedProjData();
  return {
    props: {
      allProjData,
    }
  }
}

export default function Portfolio({ allProjData }) {
  const title = "Portfolio"
  const subtitle = "Take a look at a few of the projects I've worked on."
  return(
    <div className='bg-maincolor min-h-screen h-auto z-0 relative overflow-x-hidden'>
      <Navbar portfolio></Navbar>
      <Layout title={title} description={subtitle}>
        <div className='ml-4 mr-4 md:ml-16 mt-12 md:mr-16 2xl:w-3/4'>
          <SectionHeader>{title}</SectionHeader>
          <p className='text-xl w-5/6'>{subtitle}</p>
          <ul className='flex flex-col list-none ml-0'>
            {allProjData.map(({ id, title, desc }) => (
              <li className="text-2xl p-8 pt-0 sm:pt-8 pl-0 mt-6 flex flex-row justify-start items-center pr-0 sm:pr-auto" key={id}>
                <div className='w-1/2 hidden sm:block'>
                  <img 
                    src={`https://media.codedotspirit.dev/images/portfolio/${title}/${title}.png`}
                    id="home-proj-img"
                    alt={`Image of ${title}`}
                    className={'mx-auto'}
                  />
                </div>
                <div className='sm:bg-gradient-to-b from-fuchsia-600 to-pink-600 ml-0 sm:ml-8 pl-px w-full sm:w-1/2'>
                  <div className='bg-maincolor border border-gray-700 rounded-sm sm:rounded-none sm:border-hidden p-6 sm:p-0 sm:pl-8'>
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