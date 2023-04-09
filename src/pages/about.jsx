import Header from "@/components/Header";
import VSCodeClone from "@/components/VSCodeClone";
import getCurrentAge from "@/utils/getCurrentAge";
import Link from "next/link";

function ExternalLink({ children, href }) {
  return (
    <Link className="href" target="_blank" href={href}>{children}</Link>
  )
}

export default function About() {
  return (
    <main>
      <div className="w-[95%] h-full mx-auto flex flex-col">
        <Header large text={"About me"} sub={"A quick summary of who I am"} />
        <div className="flex flex-row h-fit">
          <VSCodeClone />
          <div className="w-2/6 h-full pl-2 ml-2">
            <h1 className="mt-1">Hey there!</h1>
            <p className="mt-4 text-lg">
              My name is Spirit (or Louis), and I'm a {getCurrentAge()} year old developer from Germany. I'm currently in High School 
              and have experience in all kinds of programming languages and fields of interest. Cyber security, game development and web tech 
              have a big place in my heart.
            </p>
            <p className="mt-4 text-lg">
              I have experience in a few languages, including JavaScript/<ExternalLink href={'https://www.typescriptlang.org/'}>TypeScript</ExternalLink>,&nbsp;
              <ExternalLink href={"https://www.rust-lang.org/"}>Rust</ExternalLink>, <ExternalLink href={"https://www.java.com/en/"}>Java</ExternalLink> and 
              HTML in addition to CSS. As for spoken languages, I am fluent in German as well as English.
            </p>
            <p className="mt-4 text-lg">
              When it comes to coding experience, I'm no stranger to both front-end and back-end development. I've worked with a couple
              of frameworks and libraries. For front-end applications, I've worked with <ExternalLink href={"https://react.dev/"}>React</ExternalLink>,&nbsp;
              <ExternalLink href={"https://nextjs.org/"}>NextJS</ExternalLink> and <ExternalLink href={"https://tailwindcss.com/"}>TailwindCSS</ExternalLink>. 
              In terms of back-end experience, I've used <ExternalLink href={"https://expressjs.com/"}>ExpressJS</ExternalLink>,&nbsp;
              <ExternalLink href={"https://www.fastify.io/"}>Fastify</ExternalLink> and <ExternalLink href={"https://surrealdb.com"}>SurrealDB</ExternalLink> before, the latter 
              of which is also my go-to database.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}