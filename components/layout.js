import { motion } from "framer-motion"
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router'

const variants = {
  hidden: { opacity: 0, x: 100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Layout({ children, title, description }) {
  const router = useRouter();
  var path = router.pathname.split("/").pop()
  if(path == "") {
    path = "home"
  }
  return(
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <motion.main
        key={"E"}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear', duration: 0.5 }}
        className="z-10 text-white mx-auto pt-16 bg-maincolor relative min-h-screen overflow-hidden"
        id="wrapper"
      >
        {children} 
      </motion.main>
    </>
  )
}