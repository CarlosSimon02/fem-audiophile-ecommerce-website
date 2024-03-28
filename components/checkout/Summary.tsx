"use client";
import useCartStore from "@/hooks/useCartStore";
import {
  cn,
  getCartGrandTotalAmount,
  getCartTotalAmount,
  getShippingFee,
  getVat,
} from "@/utils/functions";
import Image from "next/image";
import { useMemo } from "react";

const Summary = () => {
  const cartItems = useCartStore((state) => state.items);
  const shippingFee = getShippingFee();
  const cartTotalAmount = useMemo(
    () => getCartTotalAmount(cartItems),
    [cartItems]
  );
  const vat = getVat(cartTotalAmount);

  return (
    <div className="lg:w-[32%] bg-light-100 rounded-lg p-6 sm:p-7 lg:p-8 flex flex-col gap-8">
      <h1 className="header-text text-lg tracking-[0.080625rem] text-dark-900">
        Summary
      </h1>
      <ul className="flex-1 overflow-y-scroll flex flex-col gap-6 pr-2">
        {cartItems.map(({ id, slug, shortName, price, quantity }) => {
          return (
            <li
              key={id}
              className="w-full flex justify-between items-center gap-3"
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
                <p className="font-bold uppercase">{`$ ${price.toLocaleString()}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div
        className={cn(
          "flex flex-col gap-2",
          "[&>div]:flex [&>div]:justify-between [&>div]:items-center",
          "[&_dt]:font-medium [&_dt]:uppercase",
          "[&_dd]:font-bold [&_dd]:text-dark-900 [&_dd]:text-lg"
        )}
      >
        <div>
          <dt>Total</dt>
          <dd>{`$ ${cartTotalAmount.toLocaleString()}`}</dd>
        </div>
        <div>
          <dt>Shipping</dt>
          <dd>{`$ ${shippingFee.toLocaleString()}`}</dd>
        </div>
        <div>
          <dt>VAT (included)</dt>
          <dd>{`$ ${vat.toLocaleString()}`}</dd>
        </div>
        <div className="mt-4">
          <dt>Grand Total</dt>
          <dd className="!text-accent-900">{`$ ${getCartGrandTotalAmount(
            cartTotalAmount
          ).toLocaleString()}`}</dd>
        </div>
      </div>
      <button className="accent-button">CONTINUE & PAY</button>
    </div>
  );
};

export default Summary;
