import { useEffect } from "react";

import { scrollAllow } from "../../utils/scrollAlow";

type TUseClosePop = (el: React.MutableRefObject<HTMLDivElement | null>, changeState: any) => void

export const useClosePop: TUseClosePop = (el, changeState) => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!el.current?.contains(target)) changeState(false);
    };

    setTimeout(() => document.addEventListener("click", onClick), 1);
    
    return () => {
      document.removeEventListener("click", onClick);
      scrollAllow(document);
    };
  }, []);
};