import { NextSeo } from "next-seo"
import Head from "next/head"

export default function SeoHandler({ title, description, url, image }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
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
            content: [
              (url === "https://codedotspirit.dev" ? "Spirit" : "Louis Escher"),
              (url === "https://codedotspirit.dev" ? "Spirit Developer Portfolio" : "Louis Escher Developer Portfolio"),
              (url === "https://codedotspirit.dev" ? "Spirit Web Developer" : "Louis Escher Web Developer"),
              (url === "https://codedotspirit.dev" ? "Spirit Full-Stack Web Developer" : "Louis Escher Full-Stack Web Developer"),
              (url === "https://codedotspirit.dev" ? "Spirit Web Development Services" : "Louis Escher Web Development Services"),
              "Full-Stack Web Developer", 
              "Web Development Services", 
              "Louis Web Projects", 
              "Louis Coding Portfolio", 
              "Responsive Web Design", 
              "Front-end Development", 
              "Back-end Development", 
              "JavaScript Development", 
              "HTML/CSS Expert", 
              "UI/UX Design", 
              "Mobile App Development", 
              "E-commerce Websites", 
              "Custom Web Applications", 
              "PHP Development", 
              "NextJS Development", 
              "Node.js Development", 
              "Express.js Development", 
              "Website Optimization", 
              "Cross-Browser Compatibility", 
              "SEO (Search Engine Optimization)", 
              "Portfolio Showcase", 
              "Innovative Web Solutions", 
              //"Client Testimonials",
              "Creative Web Solutions", 
              "User-Friendly Websites", 
              "Modern Web Technologies", 
              "Louis Escher Contact Information"
            ]
          }
        ]}
      />
    </>
  )
}