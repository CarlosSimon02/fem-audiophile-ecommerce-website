"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

type WindowContextProps = {
  innerWidth: number;
};

type WindowProviderProps = {
  children: ReactNode;
};

export const WindowContext = createContext<WindowContextProps | undefined>(
  undefined
);

export const WindowProvider = ({ children }: WindowProviderProps) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowResizeHandler = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);

  const contextValue: WindowContextProps = {
    innerWidth,
  };

  return (
    <WindowContext.Provider value={contextValue}>
      {children}
    </WindowContext.Provider>
  );
};
