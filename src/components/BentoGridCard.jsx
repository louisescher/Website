import CheckBadgeIcon from "@/icons/CheckBadgeIcon"
import CloseIcon from "@/icons/CloseIcon"
import HTMLLogo from "@/icons/HTMLLogo"
import JavaScriptLogo from "@/icons/JavaScriptLogo"
import NextJSLogo from "@/icons/NextJSLogo"
import PieChartIcon from "@/icons/PieChartIcon"
import RustLangLogo from "@/icons/RustLangLogo"
import SQLLogo from "@/icons/SQLLogo"
import TransparentCubeIcon from "@/icons/TransparentCubeIcon"
import PhpLogo from "@/icons/PhpLogo"
import { useEffect, useState } from "react"

export default function BentoGridCard({ item, animate, passRef, exceptionItem, disabled, highlightClick, revertClick, showContent }) {
  if(!item) return;

  const [ scaleAndShowIcons, setScaleAndShowIcons ] = useState(false);
  const [ animateNumber, setAnimateNumber ] = useState(false);
  const [ animateText, setAnimateText ] = useState(false);

  const itemLookup = {
    "javascript": { "name": "JavaScript", icon: <JavaScriptLogo />, classes: "highlightLeft highlightTop", stats: ["4+", "30+", "2"] },
    "html_css": { "name": "HTML/CSS", icon: <HTMLLogo />, classes: "highlightCenter highlightTop", stats: ["4+", "15+", "0"] },
    "rust": { "name": "Rust", icon: <RustLangLogo />, classes: "highlightRight highlightTop", stats: ["<1", "0", "1"] },
    "php": { "name": "PHP", icon: <PhpLogo />, classes: "highlightLeft highlightBottom", stats: ["<1", "1", "0"] },
    "nextjs": { "name": "NextJS", icon: <NextJSLogo />, classes: "highlightCenter highlightBottom", stats: ["3+", "20+", "2"] },
    "sql": { "name": "SQL", icon: <SQLLogo />, classes: "highlightRight highlightBottom", stats: ["1", "4", "0"] },
  };

  const stats = [
    { text: <p>years of<br/> experience</p>, alt: <p>year of<br/> experience</p>, icon: <PieChartIcon className={`${scaleAndShowIcons ? "scale-100 opacity-100" : "scale-95 opacity-0"} prog-lang-stat-icon`} /> },
    { text: <p>projects<br/> completed</p>, alt: <p>project<br/> completed</p>, icon: <CheckBadgeIcon className={`${scaleAndShowIcons ? "scale-100 opacity-100" : "scale-95 opacity-0"} prog-lang-stat-icon !delay-100`} /> },
    { text: <p>projects work<br/> in progress</p>, alt: <p>project work<br/> in progress</p>, icon: <TransparentCubeIcon className={`${scaleAndShowIcons ? "scale-100 opacity-100" : "scale-95 opacity-0"} prog-lang-stat-icon !delay-200`} /> },
  ];

  useEffect(() => {
    if(showContent === true) {
      setTimeout(() => {
        setScaleAndShowIcons(true);
      }, 200);
      setTimeout(() => {
        setAnimateNumber(true);
      }, 400);
      setTimeout(() => {
        setAnimateText(true);
      }, 600);
    } else {
      setTimeout(() => {
        setScaleAndShowIcons(false);
        setAnimateNumber(false);
        setAnimateText(false);
      }, 200);
    }
  }, [showContent]);

  return (
    <>
      <div 
        className={`bento-card-container`} 
        ref={passRef} 
      >
        <div 
          className={`bento-card anim-zoom ${animate && (disabled !== true || exceptionItem === item) && "animate"} hoverable ${disabled === true && exceptionItem === item && "active"}`}
          onClick={disabled !== true ? () => highlightClick(item, itemLookup[item].classes) : null}
        >
          <div 
            className={`top-2 cursor-pointer rounded-full bg-black bg-opacity-50 p-1 z-20 border border-transparent hover:border-white w-10 h-10 right-2 absolute transition-all duration-100 ease-in-out ${disabled == true && exceptionItem == item ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={() => {
              revertClick();
              setTimeout(() => {
                setScaleAndShowIcons(false);
                setAnimateNumber(false);
                setAnimateText(false);
              }, 100);
            }}
          >
            <CloseIcon />
          </div>
          <div className={`bento-card-icon ${item}`}>
            {itemLookup[item].icon}
          </div>
          <div className="bento-card-name">
            <span>{itemLookup[item].name}</span>
          </div>
          <div className="h-full w-full mx-auto">
            <div className="h-full w-full flex flex-row items-center justify-center flex-wrap">
              {stats.map((stat, index) => {
                let delay = 0;
                if(index === 1) delay = 100;
                if(index === 2) delay = 200;
                
                return (
                  <div key={index} className={`w-1/2 md:w-1/3 h-1/2 md:h-full flex items-center justify-center relative select-none transition-all duration-100 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`}>
                    <div className="relative flex items-center justify-center left-4 md:left-0">
                      <div className="flex flex-col z-20">
                        <h1 className={`m-0 text-5xl prog-lang-stat-num font-bold ${index == 1 && "!delay-100"} ${index == 2 && "!delay-200"} ${animateNumber && "active"}`} style={{ color: "var(--color-main)" }}>{itemLookup[item].stats[index]}</h1>
                        <div className={`prog-lang-stat-text ${index == 1 && "!delay-100"} ${index == 2 && "!delay-200"} ${animateText ? "active" : ""}`}>{itemLookup[item].stats[index].includes("1") && parseInt(itemLookup[item].stats[index].split("<").pop()) < 10 ? stat.alt : stat.text}</div>
                      </div>
                      {stat.icon}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}