// Assets
import { cn } from "../../lib/utils";
import Button from "./button";
// import Image from "next/image";

interface Props {
  onView: () => void;
  title?: string;
  isRed?: boolean;
  isIcon?: boolean;
}

const Actions = ({ onView }: Props) => {
  return (
    <div className="flex  justify-end">
      <Button
        text="View"
        onClick={onView}
        className={cn(
          "justify-center",
          "rounded-full",
          "py-4 ",
          "cursor-pointer",
          "w-30 h-9",
          " bg-[#33bb78] text-white",
          "text-[16px] font-bold",
        )}
      />
    </div>
  );
};

export default Actions;
