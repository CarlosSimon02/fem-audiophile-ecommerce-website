import { useRef, useState } from "react";
import { useOuterClick } from "./useOuterClick";

const isFocusable = (element: HTMLElement) => {
  // Check if the element is one of the standard focusable elements
  if (
    element.tagName.toLowerCase() === "input" ||
    element.tagName.toLowerCase() === "select" ||
    element.tagName.toLowerCase() === "textarea" ||
    element.tagName.toLowerCase() === "button" ||
    element.tagName.toLowerCase() === "a"
  ) {
    return true;
  }

  // Check if the element is contenteditable
  if (
    element.hasAttribute("contenteditable") &&
    element.getAttribute("contenteditable")?.toLowerCase() === "true"
  ) {
    return true;
  }

  return false;
};

const useModal = (
  overlayType: "main-overlayed" | "sub-overlayed" = "sub-overlayed"
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => {
    const overlayedSection = document.querySelector(`.${overlayType}`);
    const overlayedElements = document.querySelectorAll(`.${overlayType} *`);

    overlayedSection?.setAttribute("aria-hidden", "true");
    overlayedElements.forEach((element) => {
      if (isFocusable(element as HTMLElement)) {
        element.setAttribute("tabindex", "-1");
      }
    });

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    const overlayedSection = document.querySelector(`.${overlayType}`);
    const overlayedElements = document.querySelectorAll(`.${overlayType} *`);

    overlayedSection?.removeAttribute("aria-hidden");
    overlayedElements.forEach((element) => {
      if (isFocusable(element as HTMLElement)) {
        element.removeAttribute("tabindex");
      }
    });

    setIsModalOpen(false);
  };

  useOuterClick(modalRef, handleCloseModal);

  return {
    isModalOpen,
    modalRef,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
