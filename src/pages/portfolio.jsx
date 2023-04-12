import Header from "@/components/Header";
import { GitHubLogo, XMark } from "@/components/Icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function InfoTag({ text }) {
  return (
    <div 
      className="border cursor-pointer border-lighter bg-dark bg-opacity-50 hover:bg-opacity-100 w-fit px-3 mb-1 rounded-full mx-1 flex items-center stretch-text hover:border-accent-1"
    >
      {text}
    </div>
  )
}

function Card({ clickFunc, cardID, activeID }) {
  const cardRef = useRef(null);

  return (
    <div ref={cardRef} className={`p-2 w-1/4 h-64 ${activeID === cardID && "opacity-0 pointer-events-none"}`}>
      <div 
        className={`portfolio-card shadow-lg relative grid-bg cursor-pointer w-full h-full rounded border border-lighter overflow-hidden ${activeID === cardID && "active"}`}
        onClick={() => clickFunc(cardRef, cardID)}
      > 
        <div className="portfolio-tags absolute w-[calc(100%-24px)] bottom-2.5 left-2.5 z-20 flex flex-row items-center flex-wrap">
          <InfoTag text={"NodeJS"} />
          <InfoTag text={"Rust"} />
        </div>
        <div className="w-full h-full absolute top-0 left-0 p-2 z-0">
          <img src="/img/image-test-finished.png" className="w-full h-full object-cover rounded-sm" />
        </div>
        <div className="portfolio-card-hovertext bg-black bg-opacity-50 z-10">
          <span className="stretch-text text-lg font-bold">NAME/WIDE LOGO HERE</span>
        </div>
      </div>
    </div>
  )
}

function Modal({ initialStyles, open, closeModal, gitHubHref }) {
  const [ animate, setAnimate ] = useState(false);
  const [ hiding, setHiding ] = useState(false);
  const [ showText, setShowText ] = useState(false);
  const [ hideText, setHideText ] = useState(false);

  useEffect(() => {
    if(open === false) {
      setHiding(true);
      setHideText(true);
      setTimeout(() => {
        setHiding(false);
        setAnimate(false);
        setShowText(false);
      }, 300);
    } else {
      setAnimate(true);
      setHideText(false);
      setTimeout(() => {
        setShowText(true);
      }, 300);
    }
  }, [open]);

  return (
    <div className={`absolute z-30 transition-all duration-100 ease-linear w-screen h-screen top-0 left-0 bg-opacity-0 ${(animate && !hiding) ? "!bg-black !bg-opacity-90" : "pointer-events-none"}`} onClick={() => closeModal()}>
      <div 
        className={`modal-card grid-bg rounded border border-lighter ${(animate && !hiding) && "animate"} ${hiding && "hiding"}`}
        style={{
          position: "absolute",
          ...initialStyles
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full relative modal-card-content-wrapper p-2">
          <XMark 
            className="modal-close-icon fixed top-4 right-4 z-40 w-8 glass rounded border border-lighter hover:!bg-dark cursor-pointer" 
            onClick={() => closeModal()} 
          />
          <div className="w-full relative">
            <div className="portfolio-tags absolute w-fit h-8 bottom-1 left-1 z-20 flex flex-row items-center">
              <InfoTag text={"NodeJS"} />
              <InfoTag text={"Rust"} />
            </div>
            <div className={`absolute w-fit h-8 bottom-1 right-2 z-20 flex flex-row items-center ${!gitHubHref && "hidden"}`}>
              <Link 
                target="_blank" 
                href={gitHubHref}
                className="ml-auto flex flex-row items-center hover:text-gray-400 git-link" 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  window.open(gitHubHref, "_blank");
                }}
              >
                <GitHubLogo className={"h-7 relative"} />
                <span className="font-bold ml-2">GitHub</span>
              </Link>
            </div>
            <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full grid content-center text-center">
              <span className="stretch-text text-lg font-bold">NAME/WIDE LOGO HERE</span>
            </div>
            <img src="/img/image-test-finished.png" className="w-full rounded-sm" />
          </div>
          <div className={`w-full text-content pb-1 ${showText && "shown"} ${hideText && "hide"}`}>
            <Header text={"What is Foo?"} small delay />
            <p>
              "Foo" is a cloud-based project management tool that simplifies team collaboration, task management, and progress tracking. 
              With an intuitive interface, it allows users to create projects, assign tasks, set deadlines, and collaborate seamlessly.
            </p>
            <p>
              "Foo" also offers advanced analytics and reporting features, empowering team leaders to measure performance, identify areas 
              for improvement, and optimize processes. Overall, "Foo" is a powerful yet user-friendly tool that helps teams work more efficiently 
              and achieve their goals.
            </p>
            <h1 className="mt-4 mb-2 text-xl">Tech stack</h1>
            <p>
              "Foo" is built using modern web technologies, including HTML, CSS, and JavaScript. It runs on a Node.js server and uses the Express.js 
              framework to handle HTTP requests. The application's front-end is built using React, a popular JavaScript library for building user interfaces.
            </p>
            <p>
              "Foo" also uses several third-party libraries and tools to improve its functionality and performance. These include Redux for state management, 
              Axios for handling HTTP requests, and Webpack for bundling and optimizing assets. Overall, "Foo's" tech stack provides a robust and scalable 
              foundation for the application's features and functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ acitveCard, setActiveCard ] = useState(null);
  const [ initialModalStyles, setInitialModalStyles ] = useState({ width: 0, height: 0, top: 0, left: 0, display: "none" });

  const clickFunc = (cardRef, cardID) => {
    setActiveCard(cardID);
    setInitialModalStyles({
      width: cardRef.current.offsetWidth,
      height: cardRef.current.offsetHeight,
      top: cardRef.current.offsetTop,
      left: cardRef.current.offsetLeft,
      transform: "translate3d(0, 0, 0)",
      display: "block"
    });
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setActiveCard(null);
      setInitialModalStyles({ width: 0, height: 0, top: 0, left: 0, display: "none" });
    }, 300);
  }

  return (
    <main>
      <Header text={"My portfolio"} sub={"A collection of all projects I've worked on and published."} className={"ml-2"} />
      <div className="flex-container">
        <Modal closeModal={closeModal} initialStyles={initialModalStyles} open={modalOpen} gitHubHref={"https://github.com/"} />
        {Array(4).fill().map((_, i) => (
          <Card key={i} cardID={i} activeID={acitveCard} clickFunc={clickFunc} />
        ))}
      </div>
    </main>
  )
}