import { useContext, useEffect, useState } from "react";

import { WindowContext } from "@/contexts/WindowContext";
import { breakpoints } from "@/utils/constants";

const { sm, md, lg, xl, "2xl": xl2 } = breakpoints;

const useScreenSizes = () => {
  const windowContext = useContext(WindowContext);

  if (!windowContext) {
    throw new Error("WindowContext is not provided");
  }

  const { innerWidth } = windowContext;
  const [isMinSM, setIsMinSM] = useState(false);
  const [isMinMD, setIsMinMD] = useState(false);
  const [isMinLG, setIsMinLG] = useState(false);
  const [isMinXL, setIsMinXL] = useState(false);
  const [isMinXL2, setIsMinXL2] = useState(false);

  useEffect(() => {
    if (innerWidth) {
      setIsMinSM(innerWidth >= sm);
      setIsMinMD(innerWidth >= md);
      setIsMinLG(innerWidth >= lg);
      setIsMinXL(innerWidth >= xl);
      setIsMinXL2(innerWidth >= xl2);
    }
  }, [innerWidth]);

  return { isMinSM, isMinMD, isMinLG, isMinXL, isMinXL2 };
};

export default useScreenSizes;
