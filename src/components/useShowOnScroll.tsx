import { useInView } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A hook that returns true when the element is in view.
 * @param ref The ref of the element to check.
 * @param scollViewAmount The amount of the element that needs to be in view to return true.
 * @param delay (optional) A delay in ms that gets added before the element is shown.
 * @param disable (optional) Disables the hook, hiding the element.
 * @param hideDelayOnDisable (optional) When true, the delay will be not added when the element is disabled.
 * @returns True when the element is in view.
 * @example
 * const ref = useRef();
 * const showElement = useShowOnScroll(ref, 0.5);
 * 
 * return (
 *   <div ref={ref}>
 *     {showElement && <p>Some text</p>}
 *   </div>
 * );
 */
export function useShowOnScroll(ref: any, scollViewAmount: number, delay: number, disable?: boolean, hideDelayOnDisable?: boolean) {
  const someInView = useInView(ref, { amount: scollViewAmount, once: true });

  const [ showElement, setShowElement ] = useState(false);

  useEffect(() => {
    if(disable === true) { // Check if element is disabled, if yes, hide it. 
      setTimeout(() => {
        setShowElement(false);
      }, delay && hideDelayOnDisable !== true ? delay : 0);
      return;
    } else if(someInView === true) { // Show element if it is not disabled and in view.
      setTimeout(() => {
        setShowElement(true);
      }, delay ? delay : 0);
      return;
    }
  }, [someInView, disable]);

  return showElement;
}