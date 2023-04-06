import { NextSeo } from "next-seo"
import Head from "next/head"

export default function SeoHandler({ title, description, url, image, keywords, noindex }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/ValoGraphs%20Final.png" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        themeColor={`#c31432`}
        openGraph={{
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: image,
              alt: title,
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: keywords
          }
        ]}
        noindex={noindex}
      />
    </>
  )
}