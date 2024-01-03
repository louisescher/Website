import { forwardRef } from "react";
import PageTransition from "@/components/PageTransition";

type PageProps = { direction: 'left' | 'right' };
type PageRef = React.ForwardedRef<HTMLDivElement>;

function Page(props: PageProps, ref: PageRef) {
  return (
    <PageTransition direction={props.direction} path="/about" ref={ref}>
      <section>Projects</section>
    </PageTransition>
  )
}

export default forwardRef(Page);