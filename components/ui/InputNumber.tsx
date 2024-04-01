import { cn } from "@/utils/functions";
import { ChangeEvent, useRef } from "react";

type InputNumberProps = {
  isSmall?: boolean;
  min?: number;
  max?: number;
  initValue: number;
  onValueChange?: (value: number) => void;
};

const InputNumber = ({
  isSmall = false,
  min = 1,
  max = 999,
  initValue,
  onValueChange,
}: InputNumberProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const increaseQuantityByOne = () => {
    if (inputRef.current) {
      const prevValue = parseInt(inputRef.current.value);
      const newVal = Math.min(max, prevValue + 1);
      inputRef.current.value = newVal.toString();
      if (onValueChange) onValueChange(newVal);
    }
  };

  const decreaseQuantityByOne = () => {
    if (inputRef.current) {
      const prevValue = parseInt(inputRef.current.value);
      const newVal = Math.max(min, prevValue - 1);
      inputRef.current.value = newVal.toString();
      if (onValueChange) onValueChange(newVal);
    }
  };

  const handleInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    if (!/^\d*$/.test(target.value) || target.value === "") {
      target.value = target.value.slice(0, -1);
    } else if (parseInt(target.value) > max) {
      target.value = max.toString();
    }
  };

  const handleInputBlur = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    if (target.value === "") {
      target.value = min.toString();
    } else if (parseInt(target.value) < min) {
      target.value = min.toString();
    }
    if (onValueChange) onValueChange(parseInt(target.value));
  };

  return (
    <div className="flex bg-light-300">
      <button
        className={cn("spin-button", isSmall && "w-8 h-8")}
        aria-label="Decrease quantity by one"
        onClick={decreaseQuantityByOne}
      >
        <span aria-hidden="true">-</span>
      </button>
      <input
        ref={inputRef}
        className={cn(
          "w-7 bg-transparent text-dark-900 font-bold text-center focus:outline-accent-900",
          isSmall && "text-sm"
        )}
        type="text"
        aria-live="assertive"
        defaultValue={initValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <button
        className={cn("spin-button", isSmall && "w-8 h-8")}
        aria-label="Increase quantity by one"
        onClick={increaseQuantityByOne}
      >
        <span aria-hidden="true">+</span>
      </button>
    </div>
  );
};

export default InputNumber;
