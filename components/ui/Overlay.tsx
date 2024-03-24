"use client";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";

type OverlayProps = {
  isOpen: boolean;
};

const Overlay = ({ isOpen }: OverlayProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Portal parentElement="body">
      <CSSTransition
        in={isOpen}
        nodeRef={ref}
        timeout={300}
        classNames="overlay"
        unmountOnExit
      >
        <div
          ref={ref}
          className="w-screen h-screen bg-dark-overlay fixed z-[9]"
        />
      </CSSTransition>
    </Portal>
  );
};

export default Overlay;
