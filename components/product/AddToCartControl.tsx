"use client";
import useCartStore from "@/hooks/useCartStore";
import { useState } from "react";
import InputNumber from "../ui/InputNumber";

type AddToCartControlProps = {
  itemToAdd: {
    id: number;
    image: string;
    shortName: string;
    price: number;
  };
};

const AddToCartControl = ({ itemToAdd }: AddToCartControlProps) => {
  const [quantity, setQuantity] = useState(1);
  const addItemToCart = useCartStore((state) => state.addItem);

  const handleClick = () => {
    addItemToCart({ ...itemToAdd, quantity });
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <InputNumber
        initValue={quantity}
        onValueChange={(value: number) => setQuantity(value)}
      />
      <button className="accent-button" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartControl;
