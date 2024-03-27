"use client";
import { cn } from "@/utils/functions";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";

type OverlayProps = {
  isOpen: boolean;
  parentElement?: string;
  className?: string;
};

const Overlay = ({
  isOpen,
  parentElement = ".sub-overlayed",
  className,
}: OverlayProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Portal parentElement={parentElement}>
      <CSSTransition
        in={isOpen}
        nodeRef={ref}
        timeout={300}
        classNames="overlay"
        unmountOnExit
      >
        <div
          ref={ref}
          className={cn(
            "w-screen h-screen bg-dark-overlay fixed z-[9] top-0 left-0",
            className
          )}
        />
      </CSSTransition>
    </Portal>
  );
};

export default Overlay;
