"use client";
import useCartStore from "@/hooks/useCartStore";
import useModal from "@/hooks/useModal";
import { cn, getCartCount } from "@/utils/functions";
import { useMemo } from "react";
import { CSSTransition } from "react-transition-group";
import Overlay from "../ui/Overlay";
import { ShoppingCartIcon } from "../ui/SVGs";
import Cart from "./Cart";

const CartControl = () => {
  const { isModalOpen, modalRef, handleOpenModal, handleCloseModal } =
    useModal();
  const cartItems = useCartStore((state) => state.items);
  const cartCount = useMemo(() => getCartCount(cartItems), [cartItems]);

  return (
    <>
      <button
        className={cn(
          isModalOpen ? "pointer-events-none" : undefined,
          "shrink-0 relative"
        )}
        aria-label="Open Cart"
        onClick={handleOpenModal}
      >
        <ShoppingCartIcon className="w-5" />
        {cartCount ? (
          <span className="absolute -top-2 left-2 px-[0.35rem] py-[0.05rem] bg-accent-900 text-light-100 text-xs rounded-full">
            {cartCount < 10 ? cartCount : "9+"}
          </span>
        ) : null}
      </button>
      <CSSTransition
        in={isModalOpen}
        nodeRef={modalRef}
        timeout={300}
        classNames="cart"
        unmountOnExit
      >
        <Cart ref={modalRef} onCheckout={handleCloseModal} />
      </CSSTransition>
      <Overlay isOpen={isModalOpen} />
    </>
  );
};

export default CartControl;
