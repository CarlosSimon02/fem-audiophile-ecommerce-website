"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  parentElement: string;
};

const Portal = ({ children, parentElement }: PortalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted
    ? ReactDOM.createPortal(
        children,
        document.querySelector(parentElement) as Element
      )
    : null;
};

export default Portal;
