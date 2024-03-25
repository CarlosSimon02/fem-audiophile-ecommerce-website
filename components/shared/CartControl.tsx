"use client";
import useCartStore from "@/hooks/useCartStore";
import { useOuterClick } from "@/hooks/useOuterClick";
import { cn } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import InputNumber from "../ui/InputNumber";
import Overlay from "../ui/Overlay";
import { ShoppingCartIcon } from "../ui/SVGs";

const CartControl = () => {
  const [isCartOpen, setIsMenuOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const cartItems = useCartStore((state) => state.items);
  const removeAllCartItems = useCartStore((state) => state.removeAllItems);
  const removeCartItem = useCartStore((state) => state.removeItem);
  const updateQuantityOfCartItem = useCartStore(
    (state) => state.updateQuantityOfItem
  );
  const cartCount = useCartStore((state) => state.count);
  const cartTotalAmount = useCartStore((state) => state.totalAmount);

  const handleOpenCloseCart = () => {
    setIsMenuOpen((prev) => (prev ? false : true));
  };

  const handleRemoveAll = () => {
    removeAllCartItems();
  };

  useOuterClick(cartRef, handleOpenCloseCart);

  return (
    <>
      <button
        className={cn(
          isCartOpen ? "pointer-events-none" : undefined,
          "shrink-0 relative"
        )}
        aria-label={isCartOpen ? "Close Menu" : "Open Menu"}
        aria-haspopup="true"
        onClick={handleOpenCloseCart}
      >
        <ShoppingCartIcon className="w-5" />
        {cartCount() ? (
          <span className="absolute -top-2 left-2 px-[0.35rem] py-[0.05rem] bg-accent-900 text-light-100 text-xs rounded-full">
            {cartCount() < 10 ? cartCount() : "9+"}
          </span>
        ) : null}
      </button>
      <CSSTransition
        in={isCartOpen}
        nodeRef={cartRef}
        timeout={300}
        classNames="cart"
        unmountOnExit
      >
        <div
          className={
            "bg-light-100 rounded-lg p-7 text-dark-500 w-full max-w-[23.5625rem] h-[30.5rem] absolute right-0 top-[7.125rem] lg:top-[8.0625rem] flex flex-col gap-8"
          }
          ref={cartRef}
        >
          {cartCount() ? (
            <>
              <div className="flex justify-between items-center">
                <h3 className="header-text tracking-[0.08125rem] text-dark-900 text-lg">
                  {`Cart(${cartCount().toLocaleString()})`}
                </h3>
                <button className="link-button" onClick={handleRemoveAll}>
                  Remove All
                </button>
              </div>
              <ul className="flex-1 overflow-y-scroll flex flex-col gap-6 pr-2">
                {cartItems.map(
                  ({ id, image, shortName, price, quantity }, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            className="w-16 h-16 rounded-lg"
                            src={image}
                            width={300}
                            height={300}
                            alt={`image of ${shortName}`}
                          />
                          <div>
                            <p className="font-bold uppercase text-dark-900">
                              {shortName}
                            </p>
                            <p className="font-bold uppercase">{`$${price.toLocaleString()}`}</p>
                          </div>
                        </div>
                        <InputNumber
                          isSmall={true}
                          min={0}
                          initValue={quantity}
                          onValueChange={(value: number) => {
                            if (value) {
                              updateQuantityOfCartItem(id, value);
                            } else {
                              removeCartItem(id);
                            }
                          }}
                        />
                      </li>
                    );
                  }
                )}
              </ul>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="uppercase">Total</p>
                  <p className="text-lg font-bold text-dark-900">{`$ ${cartTotalAmount().toLocaleString()}`}</p>
                </div>
                <Link
                  href="/"
                  className="accent-button flex justify-center items-center"
                >
                  Checkout
                </Link>
              </div>
            </>
          ) : (
            <div>Your cart is empty</div>
          )}
        </div>
      </CSSTransition>
      <Overlay isOpen={isCartOpen} />
    </>
  );
};

export default CartControl;
