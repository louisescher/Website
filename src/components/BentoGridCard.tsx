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
import styles from '@/css/about.module.css';
import cn from "@/lib/cn"

export default function BentoGridCard({ 
  item, 
  animate, 
  passRef, 
  exceptionItem, 
  disabled, 
  highlightClick, 
  revertClick, 
  showContent 
}: { 
  item: string, 
  animate: boolean, 
  passRef?: any, 
  exceptionItem: string | null, 
  disabled: boolean, 
  highlightClick: (item: string, classes: string) => void, 
  revertClick: () => void, 
  showContent: boolean 
}) {
  if(!item) return;

  const [ scaleAndShowIcons, setScaleAndShowIcons ] = useState(false);
  const [ animateNumber, setAnimateNumber ] = useState(false);
  const [ animateText, setAnimateText ] = useState(false);

  const itemLookup = {
    "javascript": { "name": "JavaScript", icon: <JavaScriptLogo />, classes: cn(styles.highlight__left, styles.highlight__top), stats: ["4+", "30+", "2"] },
    "html_css": { "name": "HTML/CSS", icon: <HTMLLogo />, classes: cn(styles.highlight__center, styles.highlight__top), stats: ["4+", "15+", "0"] },
    "rust": { "name": "Rust", icon: <RustLangLogo />, classes: cn(styles.highlight__right, styles.highlight__top), stats: ["<1", "0", "1"] },
    "php": { "name": "PHP", icon: <PhpLogo />, classes: cn(styles.highlight__left, styles.highlight__bottom), stats: ["<1", "1", "0"] },
    "nextjs": { "name": "NextJS", icon: <NextJSLogo />, classes: cn(styles.highlight__center, styles.highlight__bottom), stats: ["3+", "20+", "2"] },
    "sql": { "name": "SQL", icon: <SQLLogo />, classes: cn(styles.highlight__right, styles.highlight__bottom), stats: ["1", "4", "0"] },
  };

  const stats = [
    { text: <p>years of<br/> experience</p>, alt: <p>year of<br/> experience</p>, icon: <PieChartIcon className={`${scaleAndShowIcons ? "scale-100 opacity-100" : "scale-95 opacity-0"} ${styles.stat__icon}`} /> },
    { text: <p>projects<br/> completed</p>, alt: <p>project<br/> completed</p>, icon: <CheckBadgeIcon className={`${scaleAndShowIcons ? "scale-100 opacity-100" : "scale-95 opacity-0"} ${styles.stat__icon} !delay-100`} /> },
    { text: <p>projects work<br/> in progress</p>, alt: <p>project work<br/> in progress</p>, icon: <TransparentCubeIcon className={`${scaleAndShowIcons ? "scale-100 opacity-100" : "scale-95 opacity-0"} ${styles.stat__icon} !delay-200`} /> },
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
        className={styles.bento__card__container} 
        ref={passRef} 
      >
        <div 
          className={cn(styles.bento__card, styles.anim__zoom, animate && (disabled !== true || exceptionItem === item) && styles.animate, styles.hoverable, disabled === true && exceptionItem === item && styles.active)}
          onClick={disabled !== true ? () => highlightClick(item, itemLookup[item].classes) : undefined}
        >
          <div 
            className={cn(styles.close__button, disabled == true && exceptionItem == item && styles.enabled)}
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
          <div className={cn(styles.bento__card__icon, styles[item])}>
            {itemLookup[item].icon}
          </div>
          <div className={styles.bento__card__name}>
            <span>{itemLookup[item].name}</span>
          </div>
          <div className={styles.stats__wrapper}>
            {stats.map((stat, index) => {
              let delay = 0;
              if(index === 1) delay = 100;
              if(index === 2) delay = 200;
              
              return (
                <div key={index} className={cn(styles.stat__container, showContent && styles.active)}>
                  <div className={styles.inner__stat__container}>
                    <div>
                      <h1 className={cn(styles.stat__num, index === 1 && styles.delay__1, index === 2 && styles.delay__2, animateNumber && styles.active)}>
                        {itemLookup[item].stats[index]}
                      </h1>
                      <div className={cn(styles.stat__text, index === 1 && styles.delay__1, index === 2 && styles.delay__2, animateText && styles.active)}>
                        {itemLookup[item].stats[index].includes("1") && parseInt(itemLookup[item].stats[index].split("<").pop()) < 10 ? stat.alt : stat.text}
                      </div>
                    </div>
                    {stat.icon}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}