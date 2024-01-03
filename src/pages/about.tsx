import { useShowOnScroll } from "@/components/useShowOnScroll";
import { forwardRef, useRef, useState } from "react";
import BentoGridCard from "@/components/BentoGridCard";
import BentoCarousel from "@/components/BentoCarousel";
import ToolIcon from "@/components/ToolIcon";
import GermanFlag from "@/icons/GermanFlag";
import USFlag from "@/icons/USFlag";
import PageTransition from "@/components/PageTransition";
import styles from "@/css/about.module.css";
import cn from "@/lib/cn";

type PageProps = { direction: 'left' | 'right' };
type PageRef = React.ForwardedRef<HTMLDivElement>;

function Page(props: PageProps, ref: PageRef) {
  const [ disableBentoGrid, setDisableBentoGrid ] = useState(false);
  const [ disableToolsIcons, setDisableToolsIcons ] = useState(false);
  const [ showLargeBentoCardContent, setShowLargeBentoCardContent ] = useState(false);

  const [ hideGridAndTools, setHideGridAndTools ] = useState(false);
  const [ expandCarousel, setExpandCarousel ] = useState(false);
  
  const [ bentoCardException, setBentoCardException ] = useState<string | null>(null);
  const [ disableBentoCards, setDisableBentoCards ] = useState(false);
  const [ expandBentoCard, setExpandBentoCard ] = useState(false);
  const [ gridAnimClasses, setGridAnimClasses ] = useState("");

  // Carousel comes in from the left
  const carouselRef = useRef(null);
  const showCarousel = useShowOnScroll(carouselRef, 0.5, 0);

  const toolIconsRef = useRef(null);
  const showToolIcons = useShowOnScroll(toolIconsRef, 0.5, 350, disableToolsIcons, true);

  const generalInfoRef = useRef(null);
  const showYearsOfExperience = useShowOnScroll(generalInfoRef, 1, 100);
  const showJobStatus = useShowOnScroll(generalInfoRef, 0.75, 200);
  const showSpokenLanguages = useShowOnScroll(generalInfoRef, 0.75, 300);

  const gridRef = useRef(null);
  const showJsCard = useShowOnScroll(gridRef, 0.75, 0, disableBentoGrid);
  const showHtmlCard = useShowOnScroll(gridRef, 0.75, 100, disableBentoGrid);
  const showRustCard = useShowOnScroll(gridRef, 0.75, 200, disableBentoGrid);
  const showPhpCard = useShowOnScroll(gridRef, 0.75, 300, disableBentoGrid);
  const showNextjsCard = useShowOnScroll(gridRef, 0.75, 400, disableBentoGrid);
  const showSqlCard = useShowOnScroll(gridRef, 0.75, 500, disableBentoGrid);

  const contactCardRef = useRef(null);
  const showContactCard = useShowOnScroll(contactCardRef, 0.5, 0);

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

  const handleBentoGridCardClick = (item: string, classes: string) => {
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
    { name: "javascript", isVisible: showJsCard },
    { name: "html_css", isVisible: showHtmlCard },
    { name: "rust", isVisible: showRustCard },
    { name: "php", isVisible: showPhpCard },
    { name: "nextjs", isVisible: showNextjsCard },
    { name: "sql", isVisible: showSqlCard },
  ];

  return (
    <PageTransition direction={props.direction} path="/about" ref={ref}>
      <section className={styles.bento__grid}>
        <div className={styles.bento__grid__left}>
          <div className={cn(styles.flex__1, expandCarousel === true && styles.expanded)}>
            <div className={cn(styles.carousel__container, styles.bento__card__container, expandCarousel == true && styles.expanded)} ref={carouselRef}>
              <div className={cn(styles.bento__card, styles.hoverable, showCarousel && styles.animate, styles.anim__left)}>
                <BentoCarousel disableSwitching={expandCarousel} onClick={handleBentoCarouselClick} onClose={handleBentoCarouselClose} />
              </div>
            </div>
            <div className={cn(styles.tool__container, styles.bento__card__container, hideGridAndTools == true && styles.hidden)} ref={toolIconsRef}>
              <div className={cn(styles.bento__card, showToolIcons && styles.animate, styles.anim__top)}>
                <div className={styles.tool__icons}>
                  <ToolIcon name="docker" />
                  <ToolIcon name="windows" />
                  <ToolIcon name="vscode" />
                  <ToolIcon name="github" />
                  <ToolIcon name="linux" />
                </div>
              </div>
            </div>
          </div>
          <div className={cn(styles.grid, hideGridAndTools === true && styles.hidden, expandBentoCard == true && gridAnimClasses)} ref={gridRef}>
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
        <div className={cn(styles.flex__2, styles.bento__card__container)}>
          <div className={styles.info__container__top} ref={generalInfoRef}>
            <div className={cn(styles.bento__card, styles.anim__top, showYearsOfExperience && styles.animate, styles.yoe__card)}>
              <div>
                <h1 className={styles.yoe__header} style={{ color: "var(--color-main)" }}>4+</h1>
                <p>years of experience</p>
              </div>
            </div>
            <div className={cn(styles.bento__card, styles.anim__right, showJobStatus && styles.animate, styles.job__status__card)}>
              <div>
                <div className={styles.dot__container}>
                  <div className={cn(styles.job__status__dot, /* styles.available, */ /* styles.busy, */ styles.unavailable)} />
                </div>
                <p>currently unavilable</p>
              </div>
            </div>
          </div>
          <div className={cn(styles.bento__card, styles.anim__right, styles.lang__card, showSpokenLanguages && styles.animate)}>
            <div>
              <div className={styles.flag__container}>
                <GermanFlag className={"h-8 mr-2"} />
                <USFlag className={"h-8"} />
              </div>
              <p>spoken languages</p>
            </div>
          </div>
          <div className={cn(styles.bento__card, styles.anim__bottom, showContactCard && styles.animate, styles.cubes__container)} ref={contactCardRef}>
            <img src="/img/cubes.webp" className={styles.cubes} />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default forwardRef(Page);