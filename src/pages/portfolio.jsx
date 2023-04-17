import Header from "@/components/Header";
import { GitHubLogo, XMark } from "@/components/Icons";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

function InfoTag({ text, activeTags, setActiveTags, closeModal }) {
  const router = useRouter();

  const [ alreadyInURL, setAlreadyInURL ] = useState(false);

  useEffect(() => {
    setAlreadyInURL(activeTags.includes(text.toLowerCase()));
  }, [activeTags]);

  return (
    <div 
      className={`portfolio-tag border h-8 cursor-pointer border-lighter bg-dark bg-opacity-75 hover:bg-opacity-100 w-fit px-3 mb-1 rounded-full flex items-center hover:border-accent-1 ${alreadyInURL ? "border-2 !border-accent-1 mx-0.5" : "mx-[3px]"}`}
      onClick={async () => {
        if(closeModal) {
          closeModal();
          await new Promise(resolve => setTimeout(resolve, 400));
        }

        if(alreadyInURL) {
          const newTags = activeTags.filter(tag => tag.toLowerCase() !== text.toLowerCase());

          if(newTags.length === 0) {
            router.push(`/portfolio`, undefined, { shallow: true });
            setActiveTags([]);
            return;
          }

          setActiveTags(newTags);
          router.push(`?tags=${newTags.join(",").toLowerCase()}`, undefined, { shallow: true });
          return;
        } else {
          if(activeTags.length === 0) {
            router.push(`?tags=${text}`, undefined, { shallow: true });
            setActiveTags([text]);
            return;
          }
          const newTags = [...activeTags, text];
          setActiveTags(newTags);
          router.push(`?tags=${newTags.join(",")}`, undefined, { shallow: true });
        }
      }}
    >
      {text}
    </div>
  )
}

function Card({ clickFunc, cardID, activeID, entry }) {
  const cardRef = useRef(null);

  return (
    <div ref={cardRef} className={`p-2 pl-0 pr-4 w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 h-64 ${activeID === cardID && "opacity-0 pointer-events-none"}`}>
      <div 
        className={`portfolio-card shadow-lg relative grid-bg cursor-pointer w-full h-full rounded border border-lighter overflow-hidden ${activeID === cardID && "active"}`}
        onClick={() => clickFunc(cardRef, cardID)}
      > 
        <div className="w-full h-full absolute top-0 left-0 p-2 z-0">
          <img src={entry.images.first_view} className="w-full h-full object-cover rounded-sm" />
        </div>
        <div className="portfolio-card-hovertext bg-black bg-opacity-75 z-10 flex items-center justify-center">
          <div className="h-1/4 max-h-full flex flex-row items-center">
            <img className="w-5/6 mx-auto" src={entry ? entry.logo : ""} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Modal({ initialStyles, open, closeModal, activeData, activeTags, setActiveTags }) {
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

  useEffect(() => {
    if(animate) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "overlay";
    }
  }, [animate]);

  return (
    <div className={`fixed z-30 transition-all duration-100 ease-linear w-screen h-screen top-0 left-0 bg-opacity-0 ${(animate && !hiding) ? "!bg-black !bg-opacity-90" : "pointer-events-none"}`} onClick={() => closeModal()}>
      <div 
        className={`modal-card grid-bg mt-4 rounded border border-lighter ${(animate && !hiding) && "animate"} ${hiding && "hiding"}`}
        style={{
          position: "absolute",
          ...initialStyles
        }}
        id="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full relative modal-card-content-wrapper p-2 overflow-x-hidden">
          <XMark 
            className="modal-close-icon fixed top-4 right-4 z-40 w-8 glass rounded border border-lighter hover:!bg-dark cursor-pointer" 
            onClick={() => closeModal()} 
          />
          <div className="w-full relative">
            <div className={`portfolio-tags absolute w-fit max-w-[80%] min-h-8 h-fit bottom-1 left-1 z-20 hidden lg:flex flex-row flex-wrap items-center modal-tags`}>
              {activeData && activeData.tags.map((tag, index) => (
                <InfoTag activeTags={activeTags} setActiveTags={setActiveTags} key={index} text={tag.name} closeModal={closeModal} />
              ))}
            </div>
            <div className={`absolute w-fit h-8 bottom-2 right-2 z-20 flex flex-row items-center ${(!activeData || !activeData.links.github) && "hidden"}`}>
              <Link 
                target="_blank" 
                href={activeData ? (activeData.links.github || "") : ""}
                className="ml-auto flex flex-row items-center hover:text-gray-400 git-link" 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  window.open(activeData.links.github, "_blank");
                }}
              >
                <GitHubLogo className={"h-7 relative"} />
                <span className="font-bold ml-2">GitHub</span>
              </Link>
            </div>
            <div className="bg-black bg-opacity-75 absolute top-0 left-0 w-full h-[calc(100%+2px)] grid content-center text-center z-10">
              <div className="h-1/4 m-auto flex flex-row items-center">
                <img className="w-5/6 mx-auto" src={activeData ? activeData.logo : ""} />
              </div>
            </div>
            <img src={activeData ? activeData.images.first_view : ""} className="w-full rounded-sm modal-main-image" />
          </div>
          <div className={`portfolio-tags mt-4 w-full min-h-8 h-fit z-20 flex lg:hidden flex-row flex-wrap items-center modal-tags`}>
            {activeData && activeData.tags.map((tag, index) => (
              <InfoTag activeTags={activeTags} setActiveTags={setActiveTags} key={index} text={tag.name} closeModal={closeModal} />
            ))}
          </div>
          <div className={`w-full text-content pb-1 ${showText && "shown"} ${hideText && "hide"}`}>
            <Header text={`What is ${activeData ? activeData.name : "N/A"}?`} small delay />
            <div dangerouslySetInnerHTML={{ __html: (activeData ? activeData.description : "") }} />
            <div className="w-full h-[32rem] flex items-center justify-center">
              <img src={activeData ? activeData.images.desktop_fullpage : ""} className="h-full webpage-showcase-img mr-2" />
              <img src={activeData ? activeData.images.mobile_fullpage : ""} className={`h-full webpage-showcase-img mobile ${activeData ? activeData.name.toLowerCase() : ""}`} />
            </div>
            <h1 className="mt-4 mb-2 text-xl">Tech stack</h1>
            <div dangerouslySetInnerHTML={{ __html: (activeData ? activeData.tech_stack_desc : "") }} />
            <h1 className={`mt-4 mb-2 text-xl ${activeData ? (activeData.statistics.length == 0 && "hidden") : ""}`}>Statistics</h1>
            <div>
              {activeData ? activeData.statistics.map((stat, index) => (
                <div key={index} className="flex flex-row items-center">
                  <div className='z-20 min-w-fit pr-2'>{stat.name}</div>
                  <div className={'middle-line z-10 w-full h-px border-dashed border-b border-lighter m-auto'} />
                  <div className='ml-auto z-20 min-w-fit pr-2 pl-2'>{stat.value}</div>
                </div>
              )) : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({req, res}) {
  //res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');

  const entries = await(await fetch(`http://185.245.61.41:3100/api/portfolio`)).json();
  const tags = await(await fetch(`http://185.245.61.41:3100/api/portfolio/tags`)).json();

  return {
    props: {
      entries: entries ? (entries.status === 200 ? entries.data : []) : [],
      tags: tags ? tags.data : []
    }
  }
}

export default function Portfolio({ entries, tags }) {
  const router = useRouter();

  const [ modalOpen, setModalOpen ] = useState(false);
  const [ acitveCard, setActiveCard ] = useState(null);
  const [ initialModalStyles, setInitialModalStyles ] = useState({ width: 0, height: 0, top: 0, left: 0, display: "none" });

  const [ shownEntries, setShownEntries ] = useState([]);
  const [ activeTags, setActiveTags ] = useState([]);

  useEffect(() => {
    if (router.asPath.split("?").pop().includes("tags=")) {
      const tags = router.asPath.split("?").pop().split("tags=")[1].split("&")[0].toLowerCase().split(",");
      setActiveTags(tags);

      // Check if the activeTags are all in the tags array. if at least one is not, then don't show the entry
      setShownEntries(entries.filter(entry => tags.every(tag => entry.tags.map(tag => tag.name.toLowerCase()).includes(tag))));
    } else {
      setShownEntries(entries);
      setActiveTags([]);
    }
  }, [router.asPath]);

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
    <Layout>
      <div className="h-full w-[95%] mx-auto">
        <Header text={"My portfolio"} large sub={"A collection of all projects I've worked on and published."} />
        <div className="flex flex-row items-center flex-wrap">
          {tags.map((tag, index) => (
            <InfoTag activeTags={activeTags} setActiveTags={setActiveTags} key={index} text={tag.name} />
          ))}
          <Link shallow={true} className={`text-gray-400 hover:underline mb-1 w-fit ${activeTags.length === 0 && "hidden"}`} href={"/portfolio"}>Reset filter</Link>
        </div>
        
        <div className="flex-container">
          <Modal activeTags={activeTags} setActiveTags={setActiveTags} activeData={shownEntries[acitveCard]} closeModal={closeModal} initialStyles={initialModalStyles} open={modalOpen} gitHubHref={"https://github.com/"} />
          {/*Array(4).fill().map((_, i) => (
            <Card key={i} cardID={i} activeID={acitveCard} clickFunc={clickFunc} />
          ))*/}
          {shownEntries.map((entry, i) => (
            <Card key={i} cardID={i} activeID={acitveCard} clickFunc={clickFunc} entry={entry} />
          ))}
          {shownEntries.length === 0 && <div className="w-full grid content-center text-center text-gray-400">No entries found</div>}
        </div>
      </div>
    </Layout>
  )
}