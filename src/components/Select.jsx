import React from "react"
import { ChevronDown, CircleArrowDown } from "./Icons";
import { useFirstRender } from "./useFirstRender";

const isOutOfViewport = (elem) => {
  var bounding = elem.getBoundingClientRect();

  var out = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  out.all = out.top && out.left && out.bottom && out.right;

  return out;
};

export function Select({ items, className, value, setValue, onChange, thin }) {
  const firstRender = useFirstRender();

  const [ open, setOpen ] = React.useState(false);
  const [ menuStyles, setMenuStyles ] = React.useState({ marginTop: "2px", marginBottom: "0px", bottom: null });
  const [ internalValue, setInternalValue ] = React.useState({ text: "" });

  const ref = React.useRef(null);
  const optionsRef = React.useRef(null);

  var listener = false;

  const toggleMenu = () => {
    if(optionsRef.current === null) return;

    if(open === true) {
      optionsRef.current.classList.remove(`flex`);
      optionsRef.current.classList.add(`hidden`);
    } else {
      optionsRef.current.classList.add(`flex`);
      optionsRef.current.classList.remove(`hidden`);
    }

    setOpen(!open);

    var out = isOutOfViewport(optionsRef.current);

    if(out.bottom === true) {
      if(thin === true) {
        setMenuStyles({ marginTop: "0px", marginBottom: "1px", bottom: ref.current.firstChild.clientHeight + 4 });
      } else {
        setMenuStyles({ marginTop: "0px", marginBottom: "2px", bottom: ref.current.firstChild.clientHeight + 4 });
      }
    } else {
      if(thin === true) {
        setMenuStyles({ marginTop: "0px", marginBottom: "0px", bottom: null });
      } else {
        setMenuStyles({ marginTop: "2px", marginBottom: "0px", bottom: null });
      }
    }
    return;
  }

  React.useEffect(() => {
    if(!listener) {
      document.addEventListener("mouseup", (event) => {
        if(ref.current && !ref.current.contains(event.target) && event.target !== ref.current && open === true) {
          toggleMenu();
        }
      });
      listener = true;
    }
  }, []);
  
  React.useEffect(() => {
    firstRender ? null : onChange(value);
  }, [value]);

  React.useEffect(() => {
    if(Object.keys(internalValue).length > 0 && value !== internalValue.value && value !== "") {
      var val = items.find(x => x.value === value);
      setInternalValue(val);
    }
  }, [value])

  React.useEffect(() => {
    if(items[0]) {
      //setValue(items[0].value);
      setInternalValue(items[0]);
    }
  }, []);

  return (
    <div className={`inline-block dotted-corners select-none relative ${thin === true ? "h-[26px]" : "h-10"} ` + (className ? className : '')} ref={ref}>
      <div className={`group button overflow-hidden select relative w-full text-left inline-block ${thin === true ? "py-1 !h-full" : "py-3"} align-baseline ${open === true ? 'opened' : ''}`} onClick={() => { toggleMenu() }}>
        <span className={`block z-20 relative ${thin === true ? "font-medium text-base px-2" : "px-2"} w-full text-lg text-left font-medium stretch-text`}>{internalValue.text}</span>
        <ChevronDown className={`${thin === true ? "w-[18px] h-[18px] absolute right-1 top-[3px]" : "w-6 h-6 absolute right-2 top-1.5"} z-20 transition-all duration-[0ms] ease-linear group-hover:text-white ${open ? "rotate-180 text-white" : "text-button-color"}`} />
        <div className="select-hover-effect w-[112%] h-full absolute z-[18] -skew-x-[25deg] left-[-120%]" />
      </div>
      <div 
        className={`w-[calc(100%+2px)] dotted-corners absolute -left-px h-auto flex-col border border-lighter z-40 glass dark drop-shadow-2xl shadow-2xl p-2 hidden`}
        style={menuStyles}
        ref={optionsRef}
      >
        {items.map((item, index) => {
          if(item.seperator) {
            return (
              <hr key={index} className="mb-1" />
            )
          }
          return (
            <span 
              key={index} 
              className={`font-medium select-item stretch-text pl-2 ${index+1 === items.length ? null : 'mb-1'} ${item.disabled === true ? 'hover:bg-lightest cursor-default' : 'hover:bg-lighter cursor-pointer'} ${item.value === internalValue.value ? (item.disabled === true ? 'border border-lightest bg-lightest bg-opacity-40 hover:bg-opacity-100' : 'border border-accent-1 bg-dark hover:bg-dark !cursor-default') : ''}`}
              onClick={() => {
                if(item.disabled) return;

                if(item.value === internalValue.value) {
                  toggleMenu();
                  return;
                }
                
                setValue(item.value);
                setInternalValue(item);
                toggleMenu();
              }}
            >
              {item.text}
            </span>
          )
        })}
      </div>
    </div>
  )
}