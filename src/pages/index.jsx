"use client";

import BackgroundAnim from "@/components/BackgroundAnim";
import BentoGridCard from "@/components/BentoGridCard";
import Button from "@/components/Button";
import Header from "@/components/Header";
import BentoCarousel from "@/components/BentoCarousel";
import getCurrentAge from "@/utils/getCurrentAge";
import ToolIcon from "@/components/ToolIcon";
import GermanFlag from "@/icons/GermanFlag";
import USFlag from "@/icons/USFlag";

import { useShowOnScroll } from "@/components/useShowOnScroll";
import { useRef, useState } from "react";
import { Twitter } from "@/icons/TwitterIcon";
import LinkedInLogo from "@/icons/LinkedInLogo";
import { Envelope } from "@/icons/EnvelopeIcon";

import { Anonymous_Pro } from 'next/font/google';
import SeoHandler from "@/components/SEOHandler";

const anonymousPro = Anonymous_Pro({ subsets: ['latin'], weight: ['400', '700'] });

export async function getServerSideProps(context) {
  const domain = context.req.headers.host;

  return {
    props: {
      domain,
      name: domain === "louisescher.dev" ? "Louis" : "Spirit",
    }
  }
}

export default function Home({ domain, name }) {
  const [ disableBentoGrid, setDisableBentoGrid ] = useState(false);
  const [ disableToolsIcons, setDisableToolsIcons ] = useState(false);
  const [ showLargeBentoCardContent, setShowLargeBentoCardContent ] = useState(false);

  const [ hideGridAndTools, setHideGridAndTools ] = useState(false);
  const [ expandCarousel, setExpandCarousel ] = useState(false);
  
  const [ bentoCardException, setBentoCardException ] = useState(null);
  const [ disableBentoCards, setDisableBentoCards ] = useState(false);
  const [ expandBentoCard, setExpandBentoCard ] = useState(false);
  const [ gridAnimClasses, setGridAnimClasses ] = useState("");

  // Carousel comes in from the left
  const carouselRef = useRef(null);
  const showCarousel = useShowOnScroll(carouselRef, 0.5, 0);

  const toolIconsRef = useRef(null);
  const showToolIcons = useShowOnScroll(toolIconsRef, 0.5, 350, disableToolsIcons, true);

  const generalInfoRef = useRef(null);
  const showYearsOfExperience = useShowOnScroll(generalInfoRef, 1, 700);
  const showJobStatus = useShowOnScroll(generalInfoRef, 0.75, 800);
  const showSpokenLanguages = useShowOnScroll(generalInfoRef, 0.75, 900);

  const gridRef = useRef(null);
  const showJsCard = useShowOnScroll(gridRef, 0.75, 0, disableBentoGrid);
  const showHtmlCard = useShowOnScroll(gridRef, 0.75, 100, disableBentoGrid);
  const showRustCard = useShowOnScroll(gridRef, 0.75, 200, disableBentoGrid);
  const showPhpCard = useShowOnScroll(gridRef, 0.75, 300, disableBentoGrid);
  const showNextjsCard = useShowOnScroll(gridRef, 0.75, 400, disableBentoGrid);
  const showSqlCard = useShowOnScroll(gridRef, 0.75, 500, disableBentoGrid);

  const contactCardRef = useRef(null);
  const showContactCard = useShowOnScroll(contactCardRef, 0.5, 0);

  const contactFormRef = useRef(null);
  const showContactForm = useShowOnScroll(contactFormRef, 0.75, 0);
  const showNameInput = useShowOnScroll(contactFormRef, 0.75, 200);
  const showEmailInput = useShowOnScroll(contactFormRef, 0.75, 400);
  const showMessageInput = useShowOnScroll(contactFormRef, 0.75, 600);

  const handleSubmit = (e) => {
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

  const handleBentoCarouselClick = () => {
    setDisableBentoGrid(true);
    setDisableToolsIcons(true);
    setTimeout(() => {
      setHideGridAndTools(true);
      setExpandCarousel(true);
    }, 600);
  };

  const handleBentoCarouselClose = () => {
    setExpandCarousel(false);
    setTimeout(() => setHideGridAndTools(false), 300);
    setTimeout(() => {
      setDisableBentoGrid(false);
      setDisableToolsIcons(false);
    }, 400);
  };

  const handleBentoGridCardClick = (item, classes) => {
    setBentoCardException(item);
    setGridAnimClasses(classes);
    setDisableBentoCards(true);
    setTimeout(() => {
      setExpandBentoCard(true);
    }, 300);
    setTimeout(() => {
      setShowLargeBentoCardContent(true);
    }, 600);
  };

  const handleBentoCardRevert = () => {
    setExpandBentoCard(false);
    setGridAnimClasses("");
    setShowLargeBentoCardContent(false);
    setTimeout(() => {
      setDisableBentoCards(false);
      setBentoCardException("");
    }, 300);
  };

  const bentoGridItems = [
    {name: "javascript", isVisible: showJsCard },
    {name: "html_css", isVisible: showHtmlCard },
    {name: "rust", isVisible: showRustCard },
    {name: "php", isVisible: showPhpCard },
    {name: "nextjs", isVisible: showNextjsCard },
    {name: "sql", isVisible: showSqlCard },
  ];

  return (
    <>
      <SeoHandler 
        title={domain === "louisescher.dev" ? "louisescher.dev" : "codedotspirit.dev"}
        description={domain === "louisescher.dev" ? `Hello world. I'm Louis, a ${getCurrentAge()} year old developer from Germany.` : `Hello world. I'm Spirit, a ${getCurrentAge()} developer from Germany.`}
        url={domain === "louisescher.dev" ? "https://louisescher.dev" : "https://codedotspirit.dev"}
        image={'/icon.png'}
      />
      <main className={`min-h-screen px-4 md:px-20 2xl:px-72 z-10 flex flex-col ${anonymousPro.className}`}>
        <section className="flex flex-row items-center w-full h-[80vh] sm:mb-[10vh] justify-between">
          <div className="z-10 w-fit">
            <Header type='h1-large' followup={`I'm ${name}.`}>Hello World.</Header>
            <p className="text-2xl">I'm a {getCurrentAge()} year old developer from Germany.</p>
            <div className="flex flex-row items-center mt-4">
              <Button type={"main"} href={'https://github.com/SpiritLetsPlays'}>My work</Button>
              <Button type={"sub"} href={'#contact'}>Contact</Button>
            </div>
          </div>
          <BackgroundAnim />
        </section>
        <section className="w-full h-auto md:h-[70vh] mb-[5vh] sm:mb-[20vh]" id="bento-grid">
          <div id="bento-grid-left">
            <div id="flex-1" className={`w-full ${expandCarousel == true ? "h-full" : "h-2/5"}`}>
              <div id="carousel-container" className={`h-[204px] hidden md:block md:h-full bento-card-container ${expandCarousel == true ? "w-full" : "w-1/2"}`} ref={carouselRef}>
                <div className={`bento-card hoverable ${showCarousel && "animate"} anim-left`}>
                  <BentoCarousel disableSwitching={expandCarousel} onClick={handleBentoCarouselClick} onClose={handleBentoCarouselClose} />
                </div>
              </div>
              <div className={`w-full md:w-1/2 h-full bento-card-container ${hideGridAndTools == true && "hidden"}`} ref={toolIconsRef}>
                <div className={`bento-card hoverable ${showToolIcons && "animate"} anim-top`}>
                  <div className="tool-icons">
                    <ToolIcon name="docker" />
                    <ToolIcon name="github" />
                    <ToolIcon name="vscode" />
                    <ToolIcon name="windows" />
                    <ToolIcon name="linux" />
                  </div>
                </div>
              </div>
            </div>
            <div id="grid" className={`w-full h-3/5 ${hideGridAndTools == true && "!hidden"} ${expandBentoCard == true && gridAnimClasses}`} ref={gridRef}>
              {bentoGridItems.map((item, index) => {
                return (
                  <BentoGridCard 
                    key={index}
                    revertClick={handleBentoCardRevert} disabled={disableBentoCards} exceptionItem={bentoCardException}
                    highlightClick={handleBentoGridCardClick} animate={item.isVisible} item={item.name} showContent={showLargeBentoCardContent}
                  />
                )
              })}
            </div>
          </div>
          <div id="flex-2" className="w-full bento-card-container">
            <div id="info-container-top" className="flex flex-row h-24 lg:h-1/5 items-center mb-4" ref={generalInfoRef}>
              <div className={`bento-card anim-top mr-4 ${showYearsOfExperience && "animate"}`}>
                <div className="flex flex-col">
                  <h1 className="m-0 text-5xl font-bold" style={{ color: "var(--color-main)" }}>4+</h1>
                  <p>years of experience</p>
                </div>
              </div>
              <div className={`bento-card anim-right ${showJobStatus && "animate"}`}>
                <div className="flex flex-col">
                  <div className="h-[48px] flex w-full items-center">
                    <div className="h-8 w-8 bg-yellow-400 rounded-full" />
                  </div>
                  <p>busy but available</p>
                </div>
              </div>
            </div>
            <div className={`bento-card anim-right lg:mb-4 !h-24 lg:!h-[calc(20%-1.4rem)] ${showSpokenLanguages && "animate"}`}>
              <div className="flex flex-col">
                <div className="h-[48px] flex w-full items-center">
                  <GermanFlag className={"h-8 mr-2"} />
                  <USFlag className={"h-8"} />
                </div>
                <p>spoken languages</p>
              </div>
            </div>
            <div className={`bento-card anim-bottom ${showContactCard && "animate"} relative hidden lg:flex flex-col justify-around !h-3/5 text-center`} ref={contactCardRef}>
              <img src="/img/cubes.webp" className="w-full scale-150" />
            </div>
          </div>
        </section>
        <section className="w-full h-auto md:h-[50vh] mb-4 sm:mb-[20vh] relative" id="contact-section">
          <div className="w-full h-auto md:h-[calc(100%-45px)] flex flex-col md:flex-row items-center">
            <div className="h-fit mb-4 md:h-full md:w-[calc(50%-1.5rem)] md:mr-4 relative" id="contact-form-info">
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
        </section>
        <span className="text-center text-base mb-4">© Entropic Software, 2023 - Current</span>
      </main>
    </>
  )
}