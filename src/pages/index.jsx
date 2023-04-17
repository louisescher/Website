import Button from "@/components/Button";
import { WhiteLogo } from "@/components/C.S Logos";
import DedicatedLink from "@/components/DedicatedLink";
import { Envelope, ExternalLink, GitHubLogo } from "@/components/Icons";
import * as ProgrammingLangIcons from "@/components/ProgrammingIcons";
import formatUnixTimestamp from "@/utils/formatUnixTimestamp";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import SkillCard from "@/components/SkillCard";
import PreviewWindow from "@/components/PreviewWindow";
import getCurrentAge from "@/utils/getCurrentAge";
import Layout from "@/components/Layout";

export async function getServerSideProps({req, res}) {
  //res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');

  const entries = await(await fetch(`http://185.245.61.41:3100/api/skills/featured`)).json();

  return {
    props: {
      allFeaturedSkills: entries ? (entries.status === 200 ? entries.data : []) : [],
    }
  }
}

export default function Home({ allFeaturedSkills }) {
  const [ activeShowcaseWindow, setActiveShowcaseWindow ] = useState(69);
  const [ portfolioShowcases, _ ] = useState([
    {
      name: "ValoGraphs", 
      img: "http://localhost:7002/images/ValoGraphs/ValoGraphs%20Wide%20Final.svg", 
      desc: "ValoGraphs is a website designed to bring the data of competitive VALORANT to the masses. ValoGraphs collects the data of every single competitive match played from around the globe and displays a few average statistics on the website. Aditionally, we \"flag\" players who are suspected of cheating and provide a service to look up a player by their name to see if they are a cheater.",
      link: "https://valographs.net", 
      link_text: "Visit valographs.net",
      entry_link: "/portfolio/valographs",
      date: 1677315600000, 
      stats: [],
      prog_langs_frameworks: [
        <ProgrammingLangIcons.Rust className={"w-7 text-white"} />, 
        <ProgrammingLangIcons.NextJS className={"w-7 text-white"} />,
        <ProgrammingLangIcons.TailwindCSS className={"w-7 text-white"} />,
        <ProgrammingLangIcons.NodeJS className={"w-7 text-white"} />
      ],
      status: "Under Development"
    },
    {
      name: "VALTracker", 
      img: "http://localhost:7002/images/VALTracker/VALTrackerLogo.png", 
      desc: "VALTracker is a statistics tracker for the video game VALORANT. It allows you to track your stats, view your match history and shop, search for other players' stats and more.", 
      link: "https://valtracker.gg", 
      link_text: "Visit valtracker.gg",
      entry_link: "/portfolio/valtracker",
      date: 1638037920000, 
      stats: [{"name":"Downloads", "value": "11,000+"}],
      prog_langs_frameworks: [
        <ProgrammingLangIcons.Electron className={"w-7 text-white"} />, 
        <ProgrammingLangIcons.NextJS className={"w-7 text-white"} />,
        <ProgrammingLangIcons.TailwindCSS className={"w-7 text-white"} />,
        <ProgrammingLangIcons.NodeJS className={"w-7 text-white"} />
      ],
      status: "Under Development"
    },
  ]);
  const [ featuredSkills, __ ] = useState(allFeaturedSkills);

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
    <Layout>
      <div className="h-[50vh] md:h-screen xl:w-[90%] w-full md:px-4 mx-auto flex flex-col md:flex-row items-start justify-center">
        <div className="w-full md:w-1/2 h-full md:h-4/5 md:mr-2 relative flex items-center">
          <div className="!m-auto relative w-full lg:w-2/3">
            <header>
              <span className="text-2xl md:text-3xl stretch-text font block mb-2 landing-hello-world-text initial-reveal delay-step-0">hello world</span>
              <span className="text-5xl md:text-6xl stretch-text font-semibold initial-reveal delay-step-1">I'm <span className="font-extrabold glow-text blue">Spirit</span></span>
            </header>
            <hr className="my-2" />
            <span className="text-xl md:text-2xl initial-reveal delay-step-2">I'm a {getCurrentAge()} year old developer from Germany.</span>
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
        <div className="w-1/2 hidden md:flex h-4/5 ml-2 justify-center items-center">
          <div className="lg:h-1/2 w-full lg:w-auto">
            <WhiteLogo className={"w-full h-full landing-logo"} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[95%] mx-auto mb-14">
        <Header text={"Skills"} sub={"A small overview of my skills"} moreInfoHref={'/skills'} className={"mt-4"} />
        <div className="w-full flex flex-row flex-wrap skill-cards-container">
          {featuredSkills.map((skill, index) => {
            return (
              <SkillCard 
                key={index} 
                name={skill.name} 
                icon={ProgrammingLangIcons[skill.name]({className: `w-full h-full text-gray-400 lang-icon transition-all duration-100 ease-linear`, style: { color: skill.hoverColor }})} 
                stat1={skill.stat1} 
                stat2={skill.stat2} 
                hoverColor={skill.hoverColor} 
                smallMode={smallSkillCards} 
                miniMode={miniSkillCards}
                homeCard={true}
              />
            )
          })}
        </div>
      </div>
      <div className="w-full md:w-[95%] mx-auto pb-4">
        <Header text={"Featured projects"} sub={"A few things I've worked on"} moreInfoHref={'/portfolio'} />
        <div className="items-center flex flex-col lg:flex-row justify-around">
          <PreviewWindow activeWindow={activeShowcaseWindow} setActiveWindow={setActiveShowcaseWindow} projects={portfolioShowcases} />
          <div className="w-full lg:w-2/5 mt-8 xl:w-3/5 flex flex-col relative lg:mt-0 lg:ml-8">
            <span className="text-lightest stretch-text font-medium text-xl">Featured project</span>
            <h1 className="mt-0 mb-4 font-extrabold">{portfolioShowcases[activeShowcaseWindow] ? portfolioShowcases[activeShowcaseWindow].name : "N/A"}</h1>
            <span className="text-lightest stretch-text font-medium text-xl">Project stats</span>
            <div className="flex flex-col mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className='z-20 min-w-fit pr-2 text-lg stretch-text order-1'>Date of creation</div>
                <div className={'middle-line z-10 w-full h-px border-dashed border-b sm:order-2 order-3 border-lighter m-auto'} />
                <div className='ml-auto z-20 min-w-fit pr-2 text-lg stretch-text pl-2 order-2 sm:order-3'>
                  {portfolioShowcases[activeShowcaseWindow] ? formatUnixTimestamp(portfolioShowcases[activeShowcaseWindow].date) : "N/A"}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className='z-20 min-w-fit pr-2 text-lg stretch-text order-1'>Languages & Tools</div>
                <div className={'middle-line z-10 w-full h-px border-dashed border-b sm:order-2 order-3 border-lighter m-auto'} />
                <div className='ml-auto z-20 min-w-fit pr-2 text-lg stretch-text pl-2 order-2 sm:order-3 flex flex-row items-center mb-1 sm:mb-0'>
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
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center">
                    <div className='z-20 min-w-fit pr-2 text-lg stretch-text order-1'>{stat.name}</div>
                    <div className={'middle-line z-10 w-full h-px border-dashed border-b sm:order-2 order-3 border-lighter m-auto'} />
                    <div className='ml-auto z-20 min-w-fit pr-2 text-lg stretch-text pl-2 order-2 sm:order-3'>{stat.value}</div>
                  </div>
                )
              }) : null}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className='z-20 min-w-fit pr-2 text-lg stretch-text order-1'>Project status</div>
                <div className={'middle-line z-10 w-full h-px border-dashed border-b sm:order-2 order-3 border-lighter m-auto'} />
                <div className='ml-auto z-20 min-w-fit pr-2 text-lg stretch-text pl-2 order-2 sm:order-3'>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}