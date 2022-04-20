import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  var path = router.pathname.split("/").pop()
  if(path == "") {
    path = "home"
  }

  var page = String;
  if(router.pathname == "/") {
    page = "Home"
  } else if(router.pathname == "/blog/[id]") {
    page = "Blog"
  } else if(router.pathname == "/portfolio/[id]") {
    page = "Portfolio"
  } else {
    page = router.pathname[1].toUpperCase() + router.pathname.substring(2)
  }

  return(
    <>
      <Head>
        <title>&lt;code.spirit&gt; | {page}</title>
        <meta name="keywords" content="Developer, codedotspirit, spirit, Spirit, code.spirit, programmer, coding, valtracker" />
        <meta name="theme-color" content="#a855f7" data-react-helmet="true" />

        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
      </Head>
      <AnimatePresence 
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
      <NextSeo 
        titleTemplate="&lt;code.spirit&gt; | %s"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: `Hello World, I'm Spirit`,
          site_name: 'Spirit | codedotspirit.dev',
          url: `https://codedotspirit.dev${router.route}`,
        }}
      />
        <Component key={path} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp