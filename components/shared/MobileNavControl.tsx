"use client";
import useModal from "@/hooks/useModal";
import { cn } from "@/utils/functions";
import { CSSTransition } from "react-transition-group";
import Overlay from "../ui/Overlay";
import Portal from "../ui/Portal";
import { HamburgerIcon } from "../ui/SVGs";
import CategoryNavLinks from "./CategoryNavLinks";
import Container from "./Container";

const MobileNavControl = () => {
  const { isModalOpen, modalRef, handleOpenModal, handleCloseModal } =
    useModal();

  return (
    <>
      <button
        className={cn(
          isModalOpen ? "pointer-events-none" : undefined,
          "shrink-0 sm:max-lg:mr-10 lg:hidden"
        )}
        id="menu-button"
        aria-label="Open Menu"
        aria-haspopup="true"
        aria-expanded={isModalOpen}
        aria-controls={isModalOpen ? "menu" : ""}
        onClick={handleOpenModal}
      >
        <HamburgerIcon className="w-4" />
      </button>
      <Portal parentElement=".main-header">
        <CSSTransition
          in={isModalOpen}
          nodeRef={modalRef}
          timeout={300}
          classNames="dialog"
          unmountOnExit
        >
          <div
            className={"bg-light-100 pt-24 pb-16 text-dark-500 w-full absolute"}
            ref={modalRef}
          >
            <Container>
              <CategoryNavLinks
                className="!m-0"
                id="menu"
                tabIndex={-1}
                aria-labelledby="menu-button"
                aria-activedescendant="mi1"
                onNavigate={handleCloseModal}
              />
            </Container>
          </div>
        </CSSTransition>
      </Portal>
      <Overlay isOpen={isModalOpen} />
    </>
  );
};

export default MobileNavControl;
