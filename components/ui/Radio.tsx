import { cn } from "@/utils/functions";
import { ChangeEventHandler } from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

type RadioProps = {
  label: string;
  name: string;
  groupName: string;
  defaultChecked?: boolean;
  registerOptions?: RegisterOptions<FieldValues, string>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Radio = ({
  label,
  name,
  groupName,
  defaultChecked,
  registerOptions,
  onChange,
}: RadioProps) => {
  const { register } = useFormContext();

  return (
    <>
      <input
        {...register(groupName, registerOptions)}
        className="sr-only"
        id={name}
        type="radio"
        name={groupName}
        defaultChecked={defaultChecked}
        value={label}
        onChange={onChange}
      />
      <label
        htmlFor={name}
        className={cn(
          "w-full px-4 py-[1.125rem] rounded-lg font-bold text-sm text-dark-900",
          "cursor-pointer outline outline-[0.0625rem] outline-light-border [input:checked+&]:outline-accent-900 [input:checked+&]:outline-[0.125rem]",
          "flex items-center gap-4"
        )}
      >
        <div
          className={cn(
            "w-5 h-5 border-[0.0625rem] border-light-border rounded-full flex items-center justify-center",
            "before:scale-0 [input:checked+label_&]:before:scale-100 before:w-[0.625rem] before:h-[0.625rem] before:bg-accent-900 before:rounded-full before:transition-all"
          )}
        />
        {label}
      </label>
    </>
  );
};

export default Radio;
