import { cn } from "@/utils/functions";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";

type FloatingBarProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  className?: string;
};

const FloatingBar = ({ isOpen, children, className }: FloatingBarProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Portal parentElement="body">
      <CSSTransition
        in={isOpen}
        nodeRef={ref}
        timeout={300}
        classNames="floating-bar"
        unmountOnExit
      >
        <div
          className={cn(
            "z-20 py-4 px-6 rounded-lg bg-accent-900 text-light-100 fixed bottom-3 left-3",
            className
          )}
          ref={ref}
        >
          {children}
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default FloatingBar;
