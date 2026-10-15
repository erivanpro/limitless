// Utils

// React
import React from "react";
import { cn } from "../../lib/utils";

export interface ICardFrame {
  children: React.ReactNode;
  className?: string;
}

const CardFrame = ({ children, className }: ICardFrame) => {
  return (
    <div
      className={cn("bg-white", "rounded-[20px] shadow-box-shadow", className)}
    >
      {children}
    </div>
  );
};

export default CardFrame;
