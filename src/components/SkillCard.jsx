import Atropos from "atropos/react";
import { useState } from "react";

export default function SkillCard({ icon, name, stat1, stat2, hoverColor, smallMode, miniMode, homeCard }) {
  const [ hovering, setHovering ] = useState(false);

  return (
    <Atropos 
      className={`h-52 min-w-[16rem] ${smallMode == true ? (miniMode == true ? "w-full" : "w-1/2") : (homeCard == true ? "w-1/3" : "w-1/4")} group p-1.5 pl-0 pr-3 skill-card-container`}
      highlight={false}
      shadowScale={0.8}
      rotateXMax={0}
      rotateYMax={0}
      shadowOffset={24}
      activeOffset={24}
      scaleChildren={true}
      onEnter={() => setHovering(true)}
      onLeave={() => setHovering(false)}
    >
      <div className={`skill-card ${hovering && "active"} gradient w-full h-full p-4 rounded-lg border border-lighter`}>
        <div className="w-full h-full flex flex-col justify-between" data-atropos-offset="1">
          <div className="w-12 h-12 rounded-lg p-1 bg-light">
            {icon}
          </div>
          <div className="my-2 w-fit">
            <h2 className="my-0 mb-0">{name}</h2>
            <div style={{ background: hoverColor }} className={`skill-card-underline ${hovering && "active"}`} />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div className='z-20 min-w-fit pr-2 stretch-text'>{stat1.text}</div>
              <div className={'middle-line z-10 w-full h-px border-dashed border-b border-lighter m-auto'} />
              <div className='ml-auto z-20 min-w-fit pr-2 stretch-text pl-2'>{stat1.value}</div>
            </div>
            <div className="flex flex-row items-center">
              <div className='z-20 min-w-fit pr-2 stretch-text'>{stat2.text}</div>
              <div className={'middle-line z-10 w-full h-px border-dashed border-b border-lighter m-auto'} />
              <div className='ml-auto z-20 min-w-fit pr-2 stretch-text pl-2'>{stat2.value}</div>
            </div>
          </div>
        </div>
      </div>
    </Atropos>
  )
}