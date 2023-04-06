import { useInView } from "framer-motion";
import { useEffect, useState } from "react";

export function useShowOnScroll(ref = Object, scollViewAmount = Number) {
  const someInView = useInView(ref, { amount: scollViewAmount, once: true });

  const [ showElement, setShowElement ] = useState(false);

  useEffect(() => {
    if(someInView === true) {
      setShowElement(true);
    }
  }, [someInView]);

  return showElement;
}