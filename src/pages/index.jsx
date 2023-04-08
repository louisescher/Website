import Button from "@/components/Button";
import { WhiteLogo } from "@/components/C.S Logos";
import DedicatedLink from "@/components/DedicatedLink";
import { Envelope, ExternalLink, GitHubLogo } from "@/components/Icons";
import { Electron, NextJS, NodeJS, Rust, TailwindCSS } from "@/components/ProgrammingIcons";
import formatUnixTimestamp from "@/utils/formatUnixTimestamp";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import SkillCard from "@/components/SkillCard";
import PreviewWindow from "@/components/PreviewWindow";
import VSCodeClone from "@/components/VSCodeClone";

export default function Home() {
  const [ activeShowcaseWindow, setActiveShowcaseWindow ] = useState(69);
  const [ portfolioShowcases, setPortfolioShowcases ] = useState([
    {
      name: "ValoGraphs", 
      img: "/img/ValoGraphs%20Wide%20Final.svg", 
      desc: "ValoGraphs is a website designed to bring the data of competitive VALORANT to the masses. ValoGraphs collects the data of every single competitive match played from around the globe and displays a few average statistics on the website. Aditionally, we \"flag\" players who are suspected of cheating and provide a service to look up a player by their name to see if they are a cheater.",
      link: "https://valographs.net", 
      link_text: "Visit valographs.net",
      entry_link: "/portfolio/valographs",
      date: 1638037920000, 
      stats: [],
      prog_langs_frameworks: [
        <Rust className={"w-7 text-white"} />, 
        <NextJS className={"w-7 text-white"} />,
        <TailwindCSS className={"w-7 text-white"} />,
        <NodeJS className={"w-7 text-white"} />
      ],
      status: "Under Development"
    },
    {
      name: "VALTracker", 
      img: "/img/VALTrackerLogo.png", 
      desc: "VALTracker is a statistics tracker for the video game VALORANT. It allows you to track your stats, view your match history and shop, search for other players' stats and more.", 
      link: "https://valtracker.gg", 
      link_text: "Visit valtracker.gg",
      entry_link: "/portfolio/valtracker",
      date: 1638037920000, 
      stats: [{"name":"Downloads", "value": "11,000+"}],
      prog_langs_frameworks: [
        <Electron className={"w-7 text-white"} />, 
        <NextJS className={"w-7 text-white"} />,
        <TailwindCSS className={"w-7 text-white"} />,
        <NodeJS className={"w-7 text-white"} />
      ],
      status: "Under Development"
    },
  ]);
  const [ featuredSkills, setFeaturedSkills ] = useState([
    {
      icon: <Rust className={"w-full h-full text-gray-400 group-hover:text-[#E33B26] transition-all duration-100 ease-linear"} />,
      name: "Rust",
      stat1: {text:"Expericence", value: "Little"},
      stat2: {text:"Projects", value: "1"},
      hoverColor: "#E33B26"
    },
    {
      icon: <NextJS className={"w-full h-full text-gray-400 group-hover:text-[#ffffff] transition-all duration-100 ease-linear"} />,
      name: "NextJS",
      stat1: {text:"Expericence", value: "1 year"},
      stat2: {text:"Projects", value: "5"},
      hoverColor: "#ffffff"
    },
    {
      icon: <TailwindCSS className={"w-full h-full text-gray-400 group-hover:text-[#38BDF8] transition-all duration-100 ease-linear"} />,
      name: "TailwindCSS",
      stat1: {text:"Expericence", value: "1 year"},
      stat2: {text:"Projects", value: "4"},
      hoverColor: "#38BDF8"
    },
    {
      icon: <NodeJS className={"w-full h-full text-gray-400 group-hover:text-[#68A063] transition-all duration-100 ease-linear"} />,
      name: "NodeJS",
      stat1: {text:"Expericence", value: "3 years"},
      stat2: {text:"Projects", value: "10"},
      hoverColor: "#68A063"
    }
  ]);

  const [ smallSkillCards, setSmallSkillCards ] = useState(false);
  const [ miniSkillCards, setMiniSkillCards ] = useState(false);

  // Resize observer
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0].contentRect.width < 1116) {
        setSmallSkillCards(true);
      } else {
        setSmallSkillCards(false);
      }

      if(entries[0].contentRect.width < 577) {
        setMiniSkillCards(true);
      } else {
        setMiniSkillCards(false);
      }
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  });

  return (
    <main>
      <div className="h-full w-[90%] mx-auto flex flex-row items-start justify-center">
        <div className="w-1/2 h-4/5 mr-2 relative flex items-center">
          <div className="!m-auto relative w-2/3">
            <header>
              <span className="text-3xl stretch-text font block mb-2 landing-hello-world-text initial-reveal delay-step-0">hello world</span>
              <span className="text-6xl stretch-text font-semibold initial-reveal delay-step-1">I'm <span className="font-extrabold glow-text blue">Spirit</span></span>
            </header>
            <hr className="my-2" />
            <span className="text-2xl initial-reveal delay-step-2">I'm a 16 year old developer living in Germany.</span>
            <div className="flex flex-row items-center mt-2">
              <Button isLink href={'https://github.com/SpiritLetsPlays'} className={'mr-1'}>
                <GitHubLogo className={'h-6 w-6 mr-1.5'} />
                <span className="text-lg relative top-px">GitHub</span>
              </Button>
              <Button isLink href={'mailto:dev@codedotspirit.dev'} className={'ml-1'}>
                <Envelope className={'h-6 w-6 mr-1.5'} />
                <span className="text-lg relative top-px">Mail</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-4/5 ml-2 flex justify-center items-center">
          <div className="h-1/2">
            <WhiteLogo className={"w-full h-full landing-logo"} />
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto flex flex-col mt-4 mb-16">
        <Header text={"About me"} sub={"A quick summary of who I am"} />
        <div className="flex flex-row h-fit">
          <VSCodeClone />
          <div className="w-2/6 ml-2 pl-2">
            <h1 className="mt-2">Hey there!</h1>
            <p className="mt-2">I'm Spirit (or Louis), 16 year old developer from Germany, currently in High School, dabbling in all kinds of languages and fields of interest.
              Cyber security and web tech especially have a big place in my heart.
              I started coding at the age of 13 with JavaScript,
              and I have since explored many corners of the programming world. My biggest area of expertise is NodeJS. I have used a
              multitude of frameworks over the years, some of which include NextJS and Electron. I also have experience in Rust and a
              little experience in Java.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto mb-16">
        <Header text={"Skills"} sub={"A small overview of my skills"} moreInfoHref={'/skills'} />
        <div className="w-full flex flex-row flex-wrap skill-cards-container">
          {featuredSkills.map((skill, index) => {
            return (
              <SkillCard 
                key={index} 
                name={skill.name} 
                icon={skill.icon} 
                stat1={skill.stat1} 
                stat2={skill.stat2} 
                hoverColor={skill.hoverColor} 
                smallMode={smallSkillCards} 
                miniMode={miniSkillCards}
              />
            )
          })}
        </div>
      </div>
      <div className="w-[95%] mx-auto mt-4 pb-4">
        <Header text={"Featured projects"} sub={"A few things I've worked on"} moreInfoHref={'/portfolio'} />
        <div className="items-center flex flex-row justify-around">
          <PreviewWindow activeWindow={activeShowcaseWindow} setActiveWindow={setActiveShowcaseWindow} projects={portfolioShowcases} />
          <div className="w-3/5 flex flex-col relative ml-8">
            <span className="text-lightest stretch-text font-medium text-xl">Featured project</span>
            <h1 className="mt-0 mb-4 font-extrabold">{portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].name : "N/A"}</h1>
            <span className="text-lightest stretch-text font-medium text-xl">Project stats</span>
            <div className="flex flex-col mb-4">
              <div className="flex flex-row items-center">
                <div className='z-20 min-w-fit pr-2 text-lg stretch-text'>Date of creation</div>
                <div className={'middle-line z-10 w-full h-px border-dashed border-b border-lighter m-auto'} />
                <div className='ml-auto z-20 min-w-fit pr-2 text-lg stretch-text pl-2'>
                  {portfolioShowcases[activeShowcaseWindow] ? formatUnixTimestamp(portfolioShowcases[activeShowcaseWindow].date) : "N/A"}
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className='z-20 min-w-fit pr-2 text-lg stretch-text'>Languages & Tools</div>
                <div className={'middle-line z-10 w-full h-px border-dashed border-b border-lighter m-auto'} />
                <div className='ml-auto z-20 min-w-fit pr-2 text-lg stretch-text pl-2 flex flex-row items-center'>
                  {portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].prog_langs_frameworks.map((lang, index) => {
                    return (
                      <span key={index} className="mr-2">
                        {lang}
                      </span>
                    )
                  }) : null}
                </div>
              </div>
              {portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].stats.map((stat, index) => {
                return (
                  <div key={index} className="flex flex-row items-center">
                    <div className='z-20 min-w-fit pr-2 text-lg stretch-text'>{stat.name}</div>
                    <div className={'middle-line z-10 w-full h-px border-dashed border-b border-lighter m-auto'} />
                    <div className='ml-auto z-20 min-w-fit pr-2 text-lg stretch-text pl-2'>{stat.value}</div>
                  </div>
                )
              }) : null}
              <div className="flex flex-row items-center">
                <div className='z-20 min-w-fit pr-2 text-lg stretch-text'>Project status</div>
                <div className={'middle-line z-10 w-full h-px border-dashed border-b border-lighter m-auto'} />
                <div className='ml-auto z-20 min-w-fit pr-2 text-lg stretch-text pl-2'>
                  {portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].status : "N/A"}
                </div>
              </div>
            </div>
            <span className="text-lightest stretch-text font-medium text-xl">
              What is {portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].name : "N/A"}?
            </span>
            <span>{portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].desc : "N/A"}</span>
            <div className="flex flex-row items-center mt-4">
              <DedicatedLink 
                className="mr-4"
                href={portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].link : "/#"} 
                text={<>
                  <ExternalLink className={"w-6"} />
                  <span className="ml-1">{portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].link_text : "N/A"}</span>
                </>}
              />
              <DedicatedLink 
                className=""
                href={portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].entry_link : "/portfolio"} 
                text={<>
                  <span className="ml-1">More info</span>
                </>}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}