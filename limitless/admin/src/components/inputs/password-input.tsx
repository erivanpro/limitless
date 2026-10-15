// Utils

// React Imports
import { useState } from "react";

// Icons
import { FiEye, FiEyeOff } from "react-icons/fi";
import { cn } from "../../lib/utils";

export interface IInput {
  label?: string;
  name?: string;
  type?: HTMLInputElement["type"];
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
}

const PasswordInput = ({
  className,
  label,
  name,
  onChange,
  error,
  onBlur,
  placeholder,
  value,
  touched,
}: IInput) => {
  const [isVisible, setIsVisible] = useState(false);
  const isError = error && touched;

  return (
    <label htmlFor="input" className="space-y-2 font-medium">
      <p className="text-text-primary text-sm ">
        {label} <span className="text-[#ED2015] w-[6.46px] h-[6.22px]">*</span>
      </p>{" "}
      <div
        className={cn(
          "w-full h-11",
          "bg-white",
          "border-divider",
          "rounded-2xl shadow-box-shadow py-6",
          "pr-3",
          "flex justify-between items-center",
          className,
          isError && "!border-red",
        )}
      >
        <input
          type={isVisible ? "text" : "password"}
          id="input"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          className="w-full h-full px-3 py-2 outline-none ring-0 rounded-xl"
        />
        {isVisible ? (
          <FiEye
            color="#292D32"
            size={24}
            onClick={() => setIsVisible(!isVisible)}
            className="cursor-pointer"
          />
        ) : (
          <FiEyeOff
            color="#292D32"
            size={24}
            onClick={() => setIsVisible(!isVisible)}
            className="cursor-pointer"
          />
        )}
      </div>
      {isError && (
        <p className="text-error text-red-500 text-xs px-2">{error}</p>
      )}
    </label>
  );
};

export default PasswordInput;
