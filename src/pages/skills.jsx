import Header from "@/components/Header";
import Layout from "@/components/Layout";
import * as ProgrammingLangIcons from "@/components/ProgrammingIcons";
import SeoHandler from "@/components/SeoHandler";
import SkillCard from "@/components/SkillCard";
import { useEffect, useState } from "react";

export async function getServerSideProps({req, res}) {
  //res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');

  const entries = await(await fetch(`http://185.245.61.41:3100/api/skills`)).json();

  return {
    props: {
      allSkills: entries ? (entries.status === 200 ? entries.data : []) : [],
    }
  }
}

export default function Skills({ allSkills }) {
  const [ featuredSkills, _ ] = useState(allSkills);

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
      <SeoHandler
        title={"<code.spirit> | Skills"}
        description={"Programming languages and frameworks I am (somewhat) proficient in"}
        url={"https://codedotspirit.dev/skills"}
        image={"/img/C.S%20White.svg"}
        noindex
        keywordsStr={"German Developer, Spirit, SpiritLetsPlays, C.S, CodedotSpirit, CodedotSpirit.dev, CodedotSpirit.com"}
      />
      <div className="h-full w-[95%] mx-auto">
        <Header large text={"My skills"} sub={"Programming languages and frameworks I am (somewhat) proficient in"} />
        <div className="w-full flex flex-row flex-wrap skill-cards-container pb-4">
          {featuredSkills.map((skill, index) => {
            var iconsIndex = skill.name;
            if(iconsIndex === "jQuery") iconsIndex = "JQuery";
            
            return (
              <SkillCard 
                key={index} 
                name={skill.name} 
                icon={ProgrammingLangIcons[iconsIndex]({className: `w-full h-full text-gray-400 lang-icon transition-all duration-100 ease-linear`, style: { color: skill.hoverColor }})} 
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
    </Layout>
  )
}
