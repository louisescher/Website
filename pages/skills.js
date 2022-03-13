import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { getProgLangMD, getNormalLangMD, getToolsMD } from '../lib/skills'
import SectionHeader from '../components/sectionheader'

export async function getStaticProps() {
  let progLangHTML = await getProgLangMD();
  let normalLangHTML = await getNormalLangMD();
  let toolsHTML = await getToolsMD();
  
  // Combine the data with the id and contentHtml
  return {
    props: {
      progLangHTML,
      normalLangHTML,
      toolsHTML
    }
  }
}

export default function Skills({ progLangHTML, normalLangHTML, toolsHTML }) {
  const title = "Skills"
  const subtitle = "All programming languages I code in, normal languages I speak or programms I use are listed here."
  return(
    <div className='bg-maincolor min-h-screen h-auto z-0 relative overflow-x-hidden'>
      <Navbar skills></Navbar>
      <Layout title={title} description={subtitle}>
        <div className='ml-4 mr-4 md:ml-8 mt-12 md:mr-8 xl:w-1/2'>
          <SectionHeader>{title}</SectionHeader>
          <p className='text-xl w-5/6'>{subtitle}</p>
        </div>
        <div className='ml-6 md:ml-12 xl:ml-20 mt-8 xl:w-1/2 text-xl'>
          <div>
            <h1 className='text-2xl font-normal' id='section-subheader'>Programming languages</h1>
            <div id='customul' className='list-none' dangerouslySetInnerHTML={{ __html: progLangHTML.contentHtml }} />
          </div>
          <div>
            <h1 className='text-2xl font-normal' id='section-subheader'>Normal languages</h1>
            <div id='customul' className='list-none' dangerouslySetInnerHTML={{ __html: normalLangHTML.contentHtml }} />
          </div>
          <div>
            <h1 className='text-2xl font-normal' id='section-subheader'>Tools</h1>
            <div id='customul' className='list-none' dangerouslySetInnerHTML={{ __html: toolsHTML.contentHtml }} />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}