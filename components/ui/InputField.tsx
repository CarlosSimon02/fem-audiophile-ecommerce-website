import { cn } from "@/utils/functions";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

type InputFieldProps = {
  type?: "text" | "number" | "email" | "password";
  label: string;
  name: string;
  placeholder: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
  className?: string;
};

const InputField = ({
  type = "text",
  label,
  name,
  placeholder,
  registerOptions,
  className,
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={className}>
      <div className="mb-2 flex justify-between text-xs tracking-[-0.015625rem]">
        <label
          htmlFor={label}
          className={cn(
            "font-bold",
            errors?.[name] ? "text-red-500" : "text-dark-900"
          )}
        >
          {label}
        </label>
        {errors?.[name] && (
          <p className="text-red-500" id={`${name}-alert`} aria-live="polite">
            {errors?.[name]?.message as string}
          </p>
        )}
      </div>
      <input
        {...register(name, registerOptions)}
        type={type}
        placeholder={placeholder}
        name={name}
        id={label}
        className={cn(
          "w-full px-6 py-[1.125rem] rounded-lg font-bold text-sm text-dark-900",
          "placeholder:text-dark-overlay",
          "outline",
          errors?.[name]?.message
            ? "outline-[0.125rem] outline-red-500"
            : "outline-[0.0625rem] outline-light-border focus:outline-accent-900 focus:outline-[0.125rem]"
        )}
        aria-describedby={`${name}-alert`}
      />
    </div>
  );
};

export default InputField;
