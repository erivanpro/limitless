import React from "react";

interface ITextArea {
  label?: string;
  name?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
}

const TextArea = ({
  label,
  className,
  error,
  name,
  onBlur,
  onChange,
  placeholder,
  touched,
  value,
}: ITextArea) => {
  const isError = error && touched;

  return (
    <label htmlFor={name}>
      <span className="text-[#292929]  text-[15px] ">
        {label}
        <span className="text-[#ED2015] w-[6.46px] h-[6.22px] mx-[0.5px]">
          *
        </span>
      </span>
      <textarea
        value={value}
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={
          onChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
        }
        onBlur={
          onBlur as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
        }
        className={`${isError ? "border-red-400" : "border-2 border-[#E8E8E8] "} outline-none rounded-lg px-4 py-2 !bg-transparent shadow-box-shadow caret-primary resize-none border min-h-[180px] w-full ${className} placeholder:text-[12px] placeholder:py-1 my-2`}
      />
      {isError && <p className="text-error text-red text-xs">{error}</p>}
    </label>
  );
};

export default TextArea;
