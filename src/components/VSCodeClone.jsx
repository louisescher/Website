import { useState } from "react";
import { Debug, ErrorSmall, Extensions, Files, Search, SourceControl, Warning } from "./VSCodeIcons";
import getCurrentAge from "@/utils/getCurrentAge";

export default function VSCodeClone() {
  const [ editable, setEditable ] = useState(false);

  const checkForTab = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertHTML", false, "&nbsp;&nbsp;");
    }
  }

  return (
    <div className="w-4/6 border vscode-clone !shadow-black !shadow-lg h-fit glass rounded-lg overflow-hidden border-lighter text-xl flex flex-col">
      <div className="w-full h-6 items-center justify-center flex border-b border-lighter text-sm font-light text-gray-400"><span>aboutme.js - codedotspirit.dev</span></div>
      <div className="h-fit flex flex-row w-full">
        <div className="h-full w-12 flex flex-col items-center py-3">
          <Files className={"w-6 mb-6"} />
          <Search className={"w-6 mb-6"} />
          <SourceControl className={"w-6 mb-6"} />
          <Debug className={"w-6 mb-6"} />
          <Extensions className={"w-6 mb-6"} />
        </div>
        <div className="w-[calc(100%-48px)] h-fit flex flex-row items-center overflow-auto bg-light">
          <div className="w-8 h-full flex flex-col text-center pt-0.5 bg-light cursor-default border-x border-lighter">
            {Array.from(Array(25).keys()).map((i) => {
              return <div key={i} className="line-indicator">{i + 1}</div>;
            })}
          </div>
          <pre autoCorrect="off" autoComplete='off' spellCheck='false' className="w-[calc(100%-32px)] overflow-auto h-fit outline-none p-0.5 grid-bg">
            <code onKeyDown={checkForTab} contentEditable={editable} className="w-full h-full text-white text-sm outline-none">
              <div>
                <span className="text-code-color-1">export default function&nbsp;</span> 
                <span className="text-code-color-2">aboutMe</span>
                <span className="text-code-color-3">()&nbsp;</span>
                <span className="text-code-color-3">&#123;</span>
              </div>
              <div>
                <span className="text-code-color-1">&nbsp;&nbsp;return&nbsp;</span>
                <span className="text-code-color-3">&#123;</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;age:</span>
                <span className="text-code-color-4">&nbsp;{getCurrentAge()}</span>
                <span className="text-code-color-3">,</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;name:</span>
                <span className="text-code-color-5">&nbsp;'Louis'</span>
                <span className="text-code-color-3">,</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;location:</span>
                <span className="text-code-color-5">&nbsp;'Germany'</span>
                <span className="text-code-color-3">,</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;interests:</span>
                <span className="text-code-color-3">&nbsp;[</span>
                <span className="text-code-color-5">'Web Development'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Game Development'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Cyber Security'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;languages:</span>
                <span className="text-code-color-3">&nbsp;[</span>
                <span className="text-code-color-5">'JavaScript'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'TypeScript'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Rust'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Java'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'HTML'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'CSS'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'SurrealQL'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;spoken_languages:</span>
                <span className="text-code-color-3">&nbsp;[</span>
                <span className="text-code-color-5">'German'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'English'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;frameworks:&nbsp;&#123;</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;frontend:&nbsp;[</span>
                <span className="text-code-color-5">'NextJS'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'TailwindCSS'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'React'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backend:&nbsp;[</span>
                <span className="text-code-color-5">'NodeJS'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'ExpressJS'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Fastify'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;databases:&nbsp;[</span>
                <span className="text-code-color-5">'SurrealDB'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other:&nbsp;[</span>
                <span className="text-code-color-5">'ElectronJS'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'DiscordJS'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'SurrealQL'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&#125;,&nbsp;</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;tools:&nbsp;&#123;</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code:&nbsp;[</span>
                <span className="text-code-color-5">'Visual Studio Code'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Visual Studio'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other:&nbsp;[</span>
                <span className="text-code-color-5">'Git'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'GitHub'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Discord'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&#125;,&nbsp;</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;hobbies:&nbsp;&#123;</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;music:&nbsp;[</span>
                <span className="text-code-color-5">'Rock'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Metal'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Phonk'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Indie-Rock'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Indie-Pop'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Rap'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Electronic'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;games:&nbsp;[</span>
                <span className="text-code-color-5">'Minecraft'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Rocket League'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Valorant'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Overwatch 2'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Persona 5 (Royal & Strikers)'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Hitman'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Cyberpunk 2077'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other:&nbsp;[</span>
                <span className="text-code-color-5">'Photography'</span>
                <span className="text-code-color-3">,&nbsp;</span>
                <span className="text-code-color-5">'Singing'</span>
                <span className="text-code-color-3">],</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&nbsp;&nbsp;&#125;,&nbsp;</span>
              </div>
              <div>
                <span className="text-code-color-3">&nbsp;&nbsp;&#125;,&nbsp;</span>
              </div>
              <div>
                <span className="text-code-color-3">&#125;</span>
              </div>
            </code>
          </pre>
        </div>
      </div>
      <div className="w-full h-6 text-center border-t border-lighter flex flex-row items-center text-sm font-light text-gray-400 px-2 cursor-default">
        <div className="error-display-bottom flex flex-row items-center">
          <ErrorSmall className={"w-6"} />
          <span>0</span>
        </div>
        <div className="warning-display-bottom flex flex-row items-center">
          <Warning className={"w-4 ml-2"} />
          <span>0</span>
        </div>
        <span className="ml-auto mr-4 hover:underline cursor-pointer" onClick={() => setEditable(!editable)}>{editable ? "Stop editing" : "Edit"}</span>
        <span className="">JavaScript</span>
      </div>
    </div>
  )
}