// Libs Imports

import { cn } from "../../lib/utils";

// React & next Imports

// Assets
// import add from "@/../public/assets/icons/add.png";

interface IButton {
  text: string;
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
  isOutline?: boolean;
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  type,
  className,
  isOutline,
  disabled,
}: IButton) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        `${isOutline ? "border border-divider bg-transparent text-text-primary" : "bg-primary text-white"}`,
        " text-base",
        "w-fit h-11 ",
        "px-6 py-2",
        "rounded-lg",
        "flex items-center justify-center gap-x-3",
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
