"use client";
import useCartStore from "@/hooks/useCartStore";
import { getCartCount, getCartTotalAmount } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { ForwardedRef, forwardRef, useMemo } from "react";
import InputNumber from "../ui/InputNumber";

type CartProps = {
  onCheckout?: () => void;
};

const Cart = forwardRef(
  ({ onCheckout }: CartProps, ref: ForwardedRef<HTMLDivElement>) => {
    const cartItems = useCartStore((state) => state.items);
    const cartCount = useMemo(() => getCartCount(cartItems), [cartItems]);
    const cartTotalAmount = useMemo(
      () => getCartTotalAmount(cartItems),
      [cartItems]
    );
    const removeAllCartItems = useCartStore((state) => state.removeAllItems);
    const removeCartItem = useCartStore((state) => state.removeItem);
    const updateQuantityOfCartItem = useCartStore(
      (state) => state.updateQuantityOfItem
    );

    const handleRemoveAll = () => {
      removeAllCartItems();
    };

    return (
      <div
        className={
          "bg-light-100 rounded-lg p-7 text-dark-500 w-full max-w-[23.5625rem] h-[30.5rem] absolute right-0 top-[7.125rem] lg:top-[8.0625rem] flex flex-col gap-8"
        }
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        ref={ref}
      >
        {cartCount ? (
          <>
            <div className="flex justify-between items-center">
              <h3
                className="header-text tracking-[0.08125rem] text-dark-900 text-lg"
                aria-live="polite"
              >
                {`Cart(${cartCount.toLocaleString()})`}
              </h3>
              <button className="link-button" onClick={handleRemoveAll}>
                Remove All
              </button>
            </div>
            <ul className="flex-1 overflow-y-scroll flex flex-col gap-6 pr-2">
              {cartItems.map(({ id, slug, shortName, price, quantity }) => {
                return (
                  <li
                    key={id}
                    className="flex max-[23.75em]:flex-col justify-between max-[23.75em]:items-start items-center gap-3"
                  >
                    <div className="flex items-center gap-4 flex-wrap">
                      <Image
                        className="w-16 h-16 rounded-lg"
                        src={`/assets/images/cart/image-${slug}.jpg`}
                        width={300}
                        height={300}
                        alt={`image of ${shortName}`}
                      />
                      <div>
                        <p className="font-bold uppercase text-dark-900">
                          {shortName}
                        </p>
                        <p className="font-bold uppercase">{`$ ${price.toLocaleString()}`}</p>
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
              })}
            </ul>
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="uppercase">Total</p>
                <p className="text-lg font-bold text-dark-900">{`$ ${cartTotalAmount.toLocaleString()}`}</p>
              </div>
              <Link
                href="/checkout"
                className="accent-button flex justify-center items-center"
                onClick={onCheckout}
              >
                Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-4">
            <Image
              className="w-36 h-36 rounded-lg opacity-55"
              src={"/assets/images/shared/desktop/shopping-basket.png"}
              width={300}
              height={300}
              alt={`image of shopping basket`}
            />
            <p aria-live="polite">The cart is empty</p>
          </div>
        )}
      </div>
    );
  }
);
Cart.displayName = "Cart";

export default Cart;
