import getCurrentAge from "@/utils/getCurrentAge";
import { geist } from "../pages/fonts";
import PageTransition from "@/components/PageTransition";
import { forwardRef } from "react";
import SeoHandler from "@/components/SEOHandler";
import styles from "@/css/index.module.css";
import cn from "@/lib/cn";

type PageProps = { direction: 'left' | 'right' };
type PageRef = React.ForwardedRef<HTMLDivElement>;

function Page(props: PageProps, ref: PageRef) {
  return (
    <PageTransition direction={props.direction} path={'/'} ref={ref}>
      <SeoHandler
        title={"Louis Escher"}
        description={`Hello world. I'm Louis, a ${getCurrentAge()} year old developer from Germany.`}
        url={"https://louisescher.dev"}
        image={'/img/logo.png'}
      />
      <section className={styles.page__container}>
        <div className={styles.page__content__wrapper}>
          <div className={styles.logo__wrapper}>
            <img
              className={styles.logo}
              src="/img/Logo.png"
              alt="Personal Logo of Louis Escher, displaying a background with muted colors and the initials L.E. in the bottom right corner."
            />
            <div className={styles.logo__shadow} />
          </div>
          <h1 className={cn(geist.className, styles.page__title)}>
            HELLO WORLD.
          </h1>
          <p className={styles.page__subtitle}>
            I'm Louis, a {getCurrentAge()} year old developer from Germany.
          </p>
        </div>
      </section>
    </PageTransition>
  )
}

export default forwardRef(Page);