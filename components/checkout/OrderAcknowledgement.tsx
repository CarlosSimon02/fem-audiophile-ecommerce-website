import useCartStore from "@/hooks/useCartStore";
import {
  cn,
  getCartGrandTotalAmount,
  getCartTotalAmount,
} from "@/utils/functions";
import { CartItem } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { CheckIcon } from "../ui/SVGs";

const OrderAcknowledgement = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const cartItems = useCartStore((state) => state.items);
    const removeAllCartItems = useCartStore((state) => state.removeAllItems);
    const [checkoutItems, setCheckoutItems] = useState<CartItem[]>([]);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapseExpand = () => {
      setIsCollapsed((prev) => (prev ? false : true));
    };

    useEffect(() => {
      setCheckoutItems(cartItems);
      removeAllCartItems();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          "bg-light-100 rounded-lg p-8 min-[32.5em]:p-12 text-dark-500 w-[calc(100%_-_3rem)] max-w-[33.75rem] max-h-[calc(100%_-_3rem)] overflow-y-scroll",
          "fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 "
        )}
      >
        <CheckIcon className="w-16 h-16 mb-6 min-[32.5em]:mb-8" />
        <h2 className="header-text text-2xl min-[32.5em]:text-3xl tracking-[0.05375rem] min-[32.5em]:tracking-[0.07125rem] text-dark-900 mb-4 min-[32.5em]:mb-6">
          {"Thank you\nfor your order"}
        </h2>
        <p className="mb-6 min-[32.5em]:mb-8">
          You will receive an email confirmation shortly.
        </p>
        <div className="flex max-[32.5em]:flex-col rounded-lg overflow-hidden mb-6 min-[32.5em]:mb-12">
          <div className="bg-light-400 flex-1 p-6 flex flex-col gap-3 items-center">
            <ul className="flex-1 overflow-y-scroll flex flex-col gap-6 w-full justify-center">
              {checkoutItems
                .map(({ id, slug, shortName, price, quantity }) => {
                  return (
                    <li
                      key={id}
                      className="w-full flex justify-between items-center gap-1 ml-[-0.6875rem]"
                    >
                      <Image
                        className="w-16 h-16 rounded-lg"
                        src={`/assets/images/cart/image-${slug}.jpg`}
                        width={300}
                        height={300}
                        alt={`image of ${shortName}`}
                      />
                      <div className="w-full flex-1">
                        <div className="w-full flex justify-between">
                          <p className="font-bold uppercase text-dark-900">
                            {shortName}
                          </p>
                          <p className="font-bold">{`x${quantity}`}</p>
                        </div>
                        <p className="font-bold uppercase">{`$${price.toLocaleString()}`}</p>
                      </div>
                    </li>
                  );
                })
                .slice(0, isCollapsed ? 1 : checkoutItems.length)}
            </ul>
            {checkoutItems.length > 1 && (
              <>
                <hr className="h-[0.125rem] w-full bg-dark-900 opacity-10" />
                <button
                  className="link-button font-bold text-xs"
                  onClick={handleCollapseExpand}
                >
                  {isCollapsed
                    ? `and ${checkoutItems.length - 1} other item(s)`
                    : `View less`}
                </button>
              </>
            )}
          </div>
          <div
            className={cn(
              "min-[32.5em]:w-[44%] p-8 bg-dark-700 flex flex-col",
              !isCollapsed && checkoutItems.length > 1
                ? "justify-end"
                : "justify-center"
            )}
          >
            <p className="uppercase text-light-500 mb-2 text-[0.9375rem]">
              Grand Total
            </p>
            <p className="text-light-100 font-bold text-lg">{`$ ${getCartGrandTotalAmount(
              getCartTotalAmount(checkoutItems)
            ).toLocaleString()}`}</p>
          </div>
        </div>
        <Link
          href={"/"}
          className="accent-button w-full flex items-center justify-center"
        >
          Back to home
        </Link>
      </div>
    );
  }
);
OrderAcknowledgement.displayName = "Order Acknowledgement";

export default OrderAcknowledgement;
