"use client";

import { useState } from "react";

export default function Windows11Logo() {
  const [ hover, setHover ] = useState(false);

  return (
    <svg viewBox="0 0 2499.6 2500" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className={"windows-11-logo " + (hover ? "hover" : "")}>
      <g fill="#f5f5f5">
        <path d="M1187.9 1187.9H0V0h1187.9zM2499.6 1187.9h-1188V0h1187.9v1187.9zM1187.9 2500H0V1312.1h1187.9zM2499.6 2500h-1188V1312.1h1187.9V2500z"/>
      </g>
    </svg>
  )
}