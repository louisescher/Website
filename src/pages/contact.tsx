import Button from "@/components/Button";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { useShowOnScroll } from "@/components/useShowOnScroll";
import { Envelope } from "@/icons/EnvelopeIcon";
import LinkedInLogo from "@/icons/LinkedInLogo";
import { Twitter } from "@/icons/TwitterIcon";
import { useRef } from "react";

type PageProps = { direction: 'left' | 'right' };
type PageRef = React.ForwardedRef<HTMLDivElement>;

export default function Page(props: PageProps, ref: PageRef) {
  const contactFormRef = useRef(null);
  const showContactForm = useShowOnScroll(contactFormRef, 0.75, 0);
  const showNameInput = useShowOnScroll(contactFormRef, 0.75, 200);
  const showEmailInput = useShowOnScroll(contactFormRef, 0.75, 400);
  const showMessageInput = useShowOnScroll(contactFormRef, 0.75, 600);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    e.target.reset();
  };

  return (
    <PageTransition direction={props.direction} path="/contact" ref={ref}>
      {/* <section className="w-full h-auto md:h-[50vh] mb-4 sm:mb-[20vh] relative px-4 md:px-20 2xl:px-72" id="contact-section">
        <div className="w-full h-auto md:h-[calc(100%-45px)] flex flex-col md:flex-row items-center">
          <div className="h-fit mb-4 md:h-full md:w-[calc(50%-1.5rem)] md:mr-4 relative">
            <Header type="h2" mt={false} id='contact'>Let's talk.</Header>
            <p className="text-lg">Got any questions? Want to hire me for a project?</p>
            <p className="text-lg">Either shoot me a message using the contact form or find me on social media.</p>
            <div className="flex !ml-4 md:justify-center flex-row items-center md:mt-8 md:absolute bottom-0">
              <a href="https://twitter.com/SpiritLetsPlays" className="diamond-container">
                <div>
                  <Twitter className={"h-6 w-6 mx-auto"} />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/louis-escher-148603272/" className="diamond-container">
                <div>
                  <LinkedInLogo className={"h-6 w-6 mx-auto"} />
                </div>
              </a>
              <a href="mailto:louis@codedotspirit.dev" className="diamond-container">
                <div>
                  <Envelope className={"h-6 w-6 mx-auto"} />
                </div>
              </a>
            </div>
          </div>
          <form id="contact-card" className={`h-fit md:h-full w-full md:w-1/2 !p-4 ${showContactForm && "animate"}`} ref={contactFormRef} onSubmit={handleSubmit}>
            <div className={"flex flex-col md:flex-row justify-between items-center mb-4"}>
              <div className={`flex flex-col w-full md:w-1/2 md:mb-0 mb-2 input-container ${showNameInput && "animate"}`}>
                <label htmlFor="name" className="text-lg">Your name</label>
                <input className="inline-contact-input md:mr-1" type="text" name="name" id="name" required spellCheck={false} />
              </div>
              <div className={`flex flex-col w-full md:w-1/2 input-container ${showEmailInput && "animate"}`}>
                <label htmlFor="email" className="text-lg md:ml-1">Your email</label>
                <input className="inline-contact-input md:ml-1" type="email" name="email" id="email" required spellCheck={false} />
              </div>
            </div>
            <div className={`flex flex-col h-[calc(100%-138px)] mb-4 input-container ${showMessageInput && "animate"}`}>
              <label htmlFor="message" className="text-lg">Your message</label>
              <textarea required className="inline-contact-input h-[15rem] md:h-full resize-none" name="message" id="message" />
            </div>
            <Button type="main" submit className="mr-auto">Send</Button>
          </form>
        </div>
      </section> */}
      <section>Contact</section>
    </PageTransition>
  )
}