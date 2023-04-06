import Button from "@/components/Button";
import { WhiteLogo } from "@/components/C.S Logos";
import DedicatedLink from "@/components/DedicatedLink";
import { Envelope, ExternalLink, GitHubLogo } from "@/components/Icons";
import { Electron, NextJS, NodeJS, Rust, TailwindCSS } from "@/components/ProgrammingIcons";
import formatUnixTimestamp from "@/utils/formatUnixTimestamp";
import { useEffect, useState } from "react";

function PreviewWindow({ projects, activeWindow, setActiveWindow }) {
  const [ tabInterval, setTabInterval ] = useState(null);

  useEffect(() => {
    clearInterval(tabInterval);
    setTabInterval(null);

    const interval = setInterval(() => {
      setActiveWindow((activeWindow + 1) % projects.length);
    }, 20000);
    setTabInterval(interval);
    
    return () => {
      clearInterval(interval);
      clearInterval(tabInterval);
    }
  }, [activeWindow]);

  useEffect(() => {
    setActiveWindow(0);
  }, []);

  return (
    <div className="min-w-[367px] w-2/5 preview-window rounded-lg glass border border-lighter overflow-hidden relative">
      <div className="w-full h-9 rounded-t-lg border-b border-lighter glass dark flex flex-row items-center">
        <div className="w-fit h-full border-r border-lighter rounded-tl-lg flex flex-row items-center">
          <div className="mac-dot bg-red-500 h-4 rounded-full mr-2 ml-4" />
          <div className="mac-dot bg-yellow-500 h-4 rounded-full mr-2" />
          <div className="mac-dot bg-green-500 h-4 rounded-full mr-4" />
        </div>
        {projects.map((project, index) => {
          return (
            <div 
              key={index} 
              className={`
                w-fit h-full border-r border-lighter flex flex-row items-center justify-center relative window-tab 
                ${activeWindow == index ? "bg-opacity-50 bg-lighter cursor-default active" : "cursor-pointer"}
              `}
              onClick={() => setActiveWindow(index)}
            >
              <span className="stretch-text px-5">{project.name}</span>
              <div className="progress-bar" />
            </div>
          )
        })}
      </div>
      <div className="w-full h-[calc(100%-2.25rem)] grid-bg opacity-70 absolute bottom-0 left-0" />
      <div className="w-full h-[calc(100%-2.25rem)] absolute bottom-0 left-0 flex items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div 
              key={index} 
              className={`h-[70%] max-w-[70%] ${activeWindow == index ? "block" : "hidden"}`}
            >
              <img src={project.img} className="w-full h-full object-contain" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Home() {
  const [ activeShowcaseWindow, setActiveShowcaseWindow ] = useState(69);
  const [ portfolioShowcases, setPortfolioShowcases ] = useState([
    {
      name: "ValoGraphs", 
      img: "/img/ValoGraphs%20Wide%20Final.svg", 
      desc: "ValoGraphs is a website designed to bring the data of competitive VALORANT to the masses. ValoGraphs collects the data of every single competitive match played from around the globe and displays a few average statistics on the website. Aditionally, we \"flag\" players who are suspected of cheating and provide a service to look up a player by their name to see if they are a cheater.",
      link: "https://valographs.net", 
      link_text: "Visit valographs.net",
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

  return (
    <main>
      <div className="h-full w-[90%] mx-auto flex flex-row items-start justify-center">
        <div className="w-1/2 h-4/5 mr-2 relative flex items-center">
          <div className="!m-auto relative w-2/3">
            <header>
              <span className="text-3xl stretch-text font block mb-2 landing-hello-world-text">hello world</span>
              <span className="text-6xl stretch-text font-semibold">I'm <span className="font-extrabold">Spirit</span></span>
            </header>
            <hr className="my-2" />
            <span className="text-2xl">I'm a 16 year old developer living in Germany.</span>
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
      <div className="w-[95%] mx-auto mt-4 flex flex-row justify-around pb-4">
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
          <DedicatedLink 
            className="mt-4"
            href={portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].link : "/#"} 
            text={<>
              <ExternalLink className={"w-6"} />
              <span className="ml-1">{portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].link_text : "N/A"}</span>
            </>}
          />
        </div>
      </div>
    </main>
  )
}