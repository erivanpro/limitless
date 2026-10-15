// Utils

// React
import React from "react";
import { cn } from "../../lib/utils";

export interface IInput {
  label?: string;
  name?: string;
  type?: HTMLInputElement["type"];
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
}

const Input = ({
  className,
  label,
  name,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
  value,
  touched,
}: IInput) => {
  const isError = error && touched;

  return (
    <label htmlFor="input" className="space-y-2 font-medium">
      <p className="text-text-primary text-sm ">
        {label} <span className="text-[#ED2015] w-[6.46px] h-[6.22px]">*</span>
      </p>
      <input
        type={type}
        // key={}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        className={cn(
          "w-full  h-11",
          "outline-none border-divider",
          "rounded-2xl shadow-box-shadow",
          "px-3 py-6",
          className,
          isError,
        )}
      />
      {isError && (
        <p className="text-error text-red-500 text-xs px-2">{error}</p>
      )}
    </label>
  );
};

export default Input;
