"use client";
import { useOuterClick } from "@/hooks/useOuterClick";
import { cn } from "@/utils/functions";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Overlay from "../ui/Overlay";
import Portal from "../ui/Portal";
import { HamburgerIcon } from "../ui/SVGs";
import CategoryNavLinks from "./CategoryNavLinks";
import { Container } from "./Container";

const MobileNavControl = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOpenCloseMenu = () => {
    setIsMenuOpen((prev) => (prev ? false : true));
  };

  useOuterClick(menuRef, handleOpenCloseMenu);

  return (
    <>
      <button
        className={cn(
          isMenuOpen ? "pointer-events-none" : undefined,
          "shrink-0 sm:max-lg:mr-10 lg:hidden"
        )}
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        aria-haspopup="true"
        onClick={handleOpenCloseMenu}
      >
        <HamburgerIcon className="w-4" />
      </button>
      <Portal parentElement=".main-header">
        <CSSTransition
          in={isMenuOpen}
          nodeRef={menuRef}
          timeout={300}
          classNames="menu"
          unmountOnExit
        >
          <div
            className={"bg-light-100 pt-24 pb-16 text-dark-500 w-full absolute"}
            ref={menuRef}
          >
            <Container>
              <CategoryNavLinks
                className="!m-0"
                onNavigate={handleOpenCloseMenu}
              />
            </Container>
          </div>
        </CSSTransition>
      </Portal>
      <Overlay isOpen={isMenuOpen} />
    </>
  );
};

export default MobileNavControl;
