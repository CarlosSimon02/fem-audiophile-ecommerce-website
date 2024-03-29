import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CartItem } from "./types";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getCartCount = (items: CartItem[]) => {
  return items.reduce((sum, { quantity }) => {
    return sum + quantity;
  }, 0);
};

export const getCartTotalAmount = (items: CartItem[]) => {
  return items.reduce((sum, { price, quantity }) => {
    return sum + price * quantity;
  }, 0);
};

export const getVat = (totalAmount: number) => {
  return 0.2 * totalAmount;
};

export const getShippingFee = () => {
  return 50;
};

export const getCartGrandTotalAmount = (totalAmount: number) => {
  return getShippingFee() + getVat(totalAmount) + totalAmount;
};
