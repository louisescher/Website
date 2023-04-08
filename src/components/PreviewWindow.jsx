import { useEffect, useState } from "react";

export default function PreviewWindow({ projects, activeWindow, setActiveWindow }) {
  const [ tabInterval, setTabInterval ] = useState(null);

  useEffect(() => {
    clearInterval(tabInterval);
    setTabInterval(null);

    const interval = setInterval(() => {
      setActiveWindow((activeWindow + 1) % projects.length);
    }, 20000);
    setTabInterval(interval);
    
    return () => {
      clearInterval(interval);
      clearInterval(tabInterval);
    }
  }, [activeWindow]);

  useEffect(() => {
    setActiveWindow(0);
  }, []);

  return (
    <div className="min-w-[367px] w-2/5 preview-window rounded-lg border border-lighter overflow-hidden relative">
      <div className="w-full h-9 rounded-t-lg border-b border-lighter !bg-black flex flex-row items-center">
        <div className="w-fit h-full border-r border-lighter rounded-tl-lg flex flex-row items-center">
          <div className="mac-dot text-red-500 bg-red-500 h-4 rounded-full mr-2 ml-4" />
          <div className="mac-dot text-yellow-500 bg-yellow-500 h-4 rounded-full mr-2" />
          <div className="mac-dot text-green-500 bg-green-500 h-4 rounded-full mr-4" />
        </div>
        {projects.map((project, index) => {
          return (
            <div 
              key={index} 
              className={`
                w-fit h-full border-r border-lighter flex flex-row items-center justify-center relative window-tab 
                ${activeWindow == index ? "bg-opacity-50 bg-dark cursor-default active" : "cursor-pointer"}
              `}
              onClick={() => setActiveWindow(index)}
            >
              <span className="stretch-text px-5">{project.name}</span>
              <div className="progress-bar gradient z-20" />
            </div>
          )
        })}
      </div>
      <div className="w-full h-[calc(100%-2.25rem)] grid-bg opacity-100 absolute bottom-0 left-0" />
      <div className="w-full h-[calc(100%-2.25rem)] absolute bottom-0 left-0 flex items-center justify-center group">
        {projects.map((project, index) => {
          return (
            <div 
              key={index} 
              className={`h-[70%] max-w-[70%] ${activeWindow == index ? "block" : "hidden"}`}
              data-atropos-offset="1.5"
            >
              <img src={project.img} className="w-full h-full object-contain window-tab-image transform group-hover:scale-105 transition-all duration-300 ease-linear" />
            </div>
          )
        })}
      </div>
    </div>
  )
}