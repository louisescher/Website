import Button from "@/components/Button";
import Header from "@/components/Header";
import { Discord, Envelope, GitHubLogo, LinkedIn, Twitter } from "@/components/Icons";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";

function ContactForm() {
  const [ loading, setLoading ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ loadingStatus, setLoadingStatus ] = useState("Sending...");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    const res = await(await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    })).json();
    
    if(res.status === 200) {
      setSubmitted(true);
      setLoadingStatus("Message sent successfully");
    } else {
      setError(true);
      setLoadingStatus("Error while sending message");
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      method="POST"
      className={`
        w-full contact-form shadow-black shadow-lg mx-auto h-fit grid-bg rounded-lg border border-lighter p-4 flex flex-col justify-between 
        ${submitted && "submitted"} ${error && "error"} ${loading && "loading"}
      `}
    >
      <div className="contact-form-cover text-center">
        <span className={`loading-anim-text mx-auto ${loading && submitted === false && "animated"} ${(submitted === true || error === true) && "stop-anim"}`}>{loadingStatus}</span>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <label className="stretch-text">
            First Name
          </label>
          <input autoComplete="off" required type="text" placeholder="John" name="first_name" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="stretch-text">
            Last Name
          </label>
          <input autoComplete="off" required type="text" placeholder="Doe" name="last_name" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <label className="stretch-text">
            E-Mail
          </label>
          <input autoComplete="off" required type="email" placeholder="email@example.com" name="email" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <label className="stretch-text">
            Message
          </label>
          <textarea required id="grid-message" placeholder="Hi there!" name="message" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <Button className="w-full" type="submit">Send</Button>
        </div>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <Layout>
      <div className="h-fit lg:h-[calc(100vh-8rem)] w-full 2xl:w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-around">
        <div className="w-full lg:w-1/2 lg:min-h-3/5 lg:px-12">
          <Header text={"Let's get in touch!"} nonStretch sub={"Got any questions? Want to hire me for a project?<br />Either shoot me a message using the contact form or find me on social media:"} large className={"mb-8"} />
          <ul className="contact-list flex flex-row justify-between flex-wrap lg:justify-normal lg:flex-col">
            <li>
              <Link href={"https://twitter.com/SpiritLetsPlays"}>
                <Twitter active className={"h-8 w-8 mr-4"} />
                <span>@SpiritLetsPlays</span>
              </Link>
            </li> 
            <li>
              <Link href={"https://github.com/SpiritLetsPlays"}>
                <GitHubLogo active className={"h-8 w-8 mr-4"} />
                <span>SpiritLetsPlays</span>
              </Link>
            </li>
            <li>
              <Link href={"https://discord.com/users/455786480795910165"}>
                <Discord active className={"h-8 w-8 mr-4"} />
                <span>Spirit#6996</span>
              </Link>
            </li>
            <li>
              <Link href={"mailto:dev@codedotspirit.dev"}>
                <Envelope active className={"h-8 w-8 mr-4"} />
                <span>dev@codedotspirit.dev</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 lg:min-h-3/5 flex flex-col items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
