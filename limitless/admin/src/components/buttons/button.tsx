// Libs Imports

import { cn } from "../../lib/utils";

// React & next Imports

// Assets
interface IButton {
  text: string;
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
  isOutline?: boolean;
  redirectURL?: string;
  disabled?: boolean;
  isIcon?: boolean;
  isDetailsButton?: boolean;
}

/**
 * Button component
 * @returns
 *
 * @example
 * <Button
 *    text="Title"
 *    onClick={() => {}}
 *    type="submit"
 *    isBlack={false}
 *    isIcon={false}
 *    disabled={false}
 *    redirectURL={'/'}
 *    className='bg-black'
 * />
 */
const Button = ({
  text,
  onClick,
  type,
  className,
  isOutline,
  // redirectURL,
  disabled,
  isDetailsButton,
  // isIcon,
}: IButton) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        `${isOutline ? "border border-divider bg-transparent text-text-primary" : "bg-primary text-white"}`,
        "font-medium text-sm",
        "w-fit h-11 ",
        `px-6 ${isDetailsButton ? "" : "py-2"}`,
        "rounded-lg",
        "flex items-center justify-center gap-x-3 cursor-pointer",
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
