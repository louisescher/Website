import Link from './NoScrollLink'
import React from 'react'
 
export default function Navbar({ home, blog, skills, portfolio }) {
  function setActiveClass(e) {
    const result = [...(e.target.parentElement.children)].find(child => {
      return child.classList.contains('active');
    });
    result.classList.remove('active');
    e.target.classList.add('active')
  }

  var navitem_classes = "rounded cursor-pointer ease-out duration-300 navitem "

  return (
    <div id='navbar-wrapper' className='z-20 bg-maincolor'>
      <div className='bg-gradient-to-r from-fuchsia-600 to-pink-600 pb-px w-full sm:w-4/5 mx-auto'>
        <div className="justify-between sm:justify-evenly w-auto max-w-full mx-auto text-white text bg-maincolor h-16 flex flex-row content-center items-center p-4 px-auto text-xl z-20 relative" id='navbar'>
          <Link href="/">
            <a className={"hidden sm:block tech-font hover:text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600 ease-out duration-300 text-white"} id="c_s_nav">&lt;code.spirit&gt;</a>
          </Link>
          <Link href="/">
            <a className={home ? (navitem_classes + "ml-0 sm:ml-auto mr-2 sm:mr-8 active") : (navitem_classes + "ml-0 sm:ml-auto mr-2 sm:mr-8")} id='navitem' onClick={e=> setActiveClass(e)}>Home</a>
          </Link>
          <Link href="/skills">
            <a className={skills ? (navitem_classes + "mr-2 sm:mr-8 active") : (navitem_classes + "mr-2 sm:mr-8")} id='navitem' onClick={e=> setActiveClass(e)}>Skills</a>
          </Link>
          <Link href="/blog">
            <a className={blog ? (navitem_classes + "mr-2 sm:mr-8 active") : (navitem_classes + "mr-2 sm:mr-8")} id='navitem' onClick={e=> setActiveClass(e)}>Blog</a>
          </Link>
          <Link href="/portfolio">
            <a className={portfolio ? (navitem_classes + "active") : (navitem_classes)} id='navitem' onClick={e=> setActiveClass(e)}>Portfolio</a>
          </Link>
        </div>
      </div>
    </div>
  )
}