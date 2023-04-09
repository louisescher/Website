import { useRef } from "react";
import { useShowOnScroll } from "./useShowOnScroll"
import Link from "next/link";

export default function Header({ text, sub, moreInfoHref, large }) {
  const headerRef = useRef(null);
  const startAnim = useShowOnScroll(headerRef, 1);

  return (
    <header className="relative">
      <div className="w-px h-px absolute bottom-4 left-0 z-50" ref={headerRef} />
      <div className={`mb-2 w-fit section-header ${startAnim && "active"}`}>
        <h1 className={`mb-0.5 large-text relative w-fit ${large && "text-5xl mt-4"}`}>{text}</h1>
        <p className="text-lg font-medium stretch-text m-0 sub-text relative w-fit">{sub}</p>
        {moreInfoHref && (
          <Link className="text-lightest hover:underline" href={moreInfoHref}>View more</Link>
        )}
      </div>
    </header>
  )
}