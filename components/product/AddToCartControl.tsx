"use client";
import useCartStore from "@/hooks/useCartStore";
import { useEffect, useState } from "react";
import FloatingBar from "../ui/FloatingBar";
import InputNumber from "../ui/InputNumber";
import { CloseIcon } from "../ui/SVGs";

type AddToCartControlProps = {
  itemToAdd: {
    id: number;
    slug: string;
    shortName: string;
    price: number;
  };
};

const AddToCartControl = ({ itemToAdd }: AddToCartControlProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isExceeded, setIsExceeded] = useState(false);
  const [isFloatingBarOpen, setIsFloatingBarOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const addItemToCart = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (isFloatingBarOpen) {
      setTimeout(() => {
        setIsFloatingBarOpen(false);
      }, 3000);
    }
  }, [isFloatingBarOpen]);

  const handleAddToCartClick = () => {
    const itemQuantity = cartItems.find(
      ({ id }) => itemToAdd.id === id
    )?.quantity;

    if (!itemQuantity) {
      addItemToCart({ ...itemToAdd, quantity });
      setIsExceeded(false);
    } else {
      if (itemQuantity + quantity > 999) {
        setIsExceeded(true);
      } else {
        setIsExceeded(false);
        addItemToCart({ ...itemToAdd, quantity });
      }
    }

    setIsFloatingBarOpen(true);
  };

  const handleCloseFloatingBarClick = () => {
    setIsFloatingBarOpen(false);
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <InputNumber
        initValue={quantity}
        onValueChange={(value: number) => setQuantity(value)}
      />
      <button className="accent-button" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
      <FloatingBar
        isOpen={isFloatingBarOpen}
        className="flex gap-3 items-center"
      >
        {isExceeded ? (
          <>
            <span className="w-7 h-7 bg-red-500 text-light-100 flex items-center justify-center rounded-full">
              ✘
            </span>
            <p className="flex-1">Maximum number of items is reached</p>
            <button onClick={handleCloseFloatingBarClick}>
              <CloseIcon className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <span className="w-7 h-7 bg-green-500 text-light-100 flex items-center justify-center rounded-full">
              ✓
            </span>
            <p className="flex-1">Item is succesfully added to cart</p>
            <button onClick={handleCloseFloatingBarClick}>
              <CloseIcon className="w-4 h-4" />
            </button>
          </>
        )}
      </FloatingBar>
    </div>
  );
};

export default AddToCartControl;
