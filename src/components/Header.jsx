import { useRef } from "react";
import { useShowOnScroll } from "./useShowOnScroll"
import Link from "next/link";

export default function Header({ text, sub, moreInfoHref, large, small, delay, className, nonStretch }) {
  const headerRef = useRef(null);
  const startAnim = useShowOnScroll(headerRef, 1);

  return (
    <header className={`relative ${className ? className : ""}`}>
      <div className="w-px h-px absolute bottom-4 left-0 z-50" ref={headerRef} />
      <div className={`mb-2 w-fit section-header ${delay && "delay"} ${startAnim && "active"}`}>
        <h1 style={{ fontSize: (large && "2.6rem") }} className={`mb-0.5 mt-0 large-text relative w-fit ${large && "mt-4"} ${small && "text-2xl mt-2"}`}>{text}</h1>
        <p className={`text-lg font-medium ${!nonStretch && "stretch-text"} m-0 sub-text relative w-fit`} dangerouslySetInnerHTML={{ __html: sub }} />
        {moreInfoHref && (
          <Link className="text-lightest hover:underline" href={moreInfoHref}>View more</Link>
        )}
      </div>
    </header>
  )
}