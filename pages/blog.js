import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Link from '../components/NoScrollLink'
import NextLink from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import SectionHeader from '../components/sectionheader'

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Blog({ allPostsData }) {
  const { query } = useRouter();

  var blogPageCountClasses = "bg-gray-900 relative inline-flex items-center px-4 py-2 border text-sm font-medium hover:bg-gray-800"
  var blogNavArrowClasses = "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-gray-900 text-sm font-medium text-gray-500 hover:bg-gray-800"

  function splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }

  var splitarr = splitArrayIntoChunksOfLen(allPostsData, 10);
  var pagenumber = query.page

  var finalArray;

  if(pagenumber == 0 || pagenumber == undefined) {
    finalArray = splitarr[0]
    pagenumber = 1
  } else if(splitarr[pagenumber -1] !== null) {
    finalArray = splitarr[pagenumber -1]
  }

  if(finalArray == undefined) {
    for(var i = pagenumber; i > 0; i--) {
      if(splitarr[i] !== undefined) {
        finalArray = splitarr[i]
        pagenumber = i+1
      }
    }
  }

  var totalPosts = allPostsData.length;
  var totalPages = splitarr.length;

  const title = "Blog"
  const subtitle = "I mostly post about my work and share my information on topics that are barely documented on other websites."

  return(
    <div className='bg-maincolor min-h-screen h-auto z-0 relative overflow-x-hidden'>
      <Navbar blog></Navbar>
      <Layout title={title} description={subtitle}>
        <div className='ml-4 mr-4 md:ml-16 mt-12 md:mr-16 2xl:w-1/2'>
          <SectionHeader>{title}</SectionHeader>
          <p className='text-xl w-5/6'>{subtitle}</p>
          <ul className='flex flex-col list-none'>
            {finalArray.map(({ id, date, title, desc }) => (
              <li className="border border-gray-700 text-xl p-6 mt-4" key={id}>
                <span>{title}</span>
                <br />
                <small className='text-gray-500'>
                  <Date dateString={date} />
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
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4">
            {totalPosts < 10 ? (
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium text-gray-400">{totalPosts}</span> of{' '}
                  <span className="font-medium text-gray-400">{totalPosts}</span> posts
                </p>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium text-gray-400">{pagenumber == 1 ? ('1') : (parseInt(pagenumber) - 1 + '1')}</span> to <span className="font-medium text-gray-400">{splitarr[pagenumber -1].length < 10 ? (totalPosts) : (pagenumber + '0')}</span> of{' '}
                  <span className="font-medium text-gray-400">{totalPosts}</span> posts
                </p>
              </div>
            )}
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <NextLink href={pagenumber > 1 ? (`/blog?page=${parseInt(pagenumber)-1}`) : ("/blog")}>
                  <a className={pagenumber <= 1 ? (`pointer-events-none cursor-default ${blogNavArrowClasses}`) : (blogNavArrowClasses)}>
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </NextLink>
                {[...Array(totalPages)].map((elementInArray, index) => (
                  <NextLink 
                    href={`/blog?page=${index+1}`}
                    key={index}
                  >
                    <a
                      aria-current="page"
                      className={index+1 == pagenumber ? ("pointer-events-none cursor-default border-purple-500 text-purple-500 z-10 border" + blogPageCountClasses) : ("hover:bg-gray-800" + blogPageCountClasses)}
                    >
                      {index+1}
                    </a>
                  </NextLink>
                ))}
                <NextLink href={pagenumber < totalPages ? (`/blog?page=${parseInt(pagenumber)+1}`) : ("/blog")}>
                  <a className={pagenumber >= totalPages ? (`pointer-events-none cursor-default ${blogNavArrowClasses}`) : (blogNavArrowClasses)}>
                    <span className="sr-only">Previous</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </NextLink>
              </nav>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

//Arrow left if pagenumber !== 1, arrow right if pagenumber < totalPages