import { RefObject, useEffect } from "react";

export function useOuterClick(
  dom: RefObject<HTMLElement>,
  callback: () => void
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dom.current && !dom.current.contains(event.target as Node)) {
        callback();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" ||
        (event.key === "Enter" &&
          dom.current &&
          !dom.current.contains(event.target as Node))
      ) {
        callback();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [dom, callback]);
}
