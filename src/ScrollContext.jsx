/* eslint-disable react-refresh/only-export-components -- context + hook module */
import { createContext, useCallback, useContext } from "react";

const ScrollContext = createContext(null);

export function ScrollProvider({ lenisRef, children }) {
  const scrollTo = useCallback((href) => {
    const el = document.querySelector(href);
    if (!el) return;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(el, { offset: -96, lerp: 0.12, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [lenisRef]);

  return (
    <ScrollContext.Provider value={scrollTo}>{children}</ScrollContext.Provider>
  );
}

export function useSmoothScrollTo() {
  const fn = useContext(ScrollContext);
  return fn ?? (() => {});
}
