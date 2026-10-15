import React, { useEffect, useRef } from "react";
import ArrowDown from "../../assets/arrow-down.png";

export interface IDropDownProps {
  selectedOption?: string;
  toggleDropdown?: () => void;
  selectOption?: (option: React.SetStateAction<string>) => void;
  isOpen?: boolean;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}

const UserTypeDropdown = ({
  isOpen,
  selectOption,
  selectedOption,
  toggleDropdown,
  setRowsPerPage,
  setCurrentPage,
}: IDropDownProps) => {
  const options = ["User", "Host"];
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: React.SetStateAction<string>) => {
    if (selectOption) {
      selectOption(option);
    }
    if (setRowsPerPage) {
      setRowsPerPage(10);
    }
    if (setCurrentPage) {
      setCurrentPage(1);
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleDropdown
      ) {
        toggleDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <div
      className="relative flex w-full md:w-[10%] items-center"
      ref={dropdownRef}
    >
      <button
        className="flex items-center justify-between w-full md:max-w-[162px] px-4 h-[40px] bg-white  border border-[#E8E8E8]  rounded-lg shadow-sm"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-2 justify-between w-full">
          <span className="text-[#7C7C7C] text-sm overflow-hidden text-ellipsis whitespace-nowrap truncate">
            {selectedOption?.toString() || "Role"}
          </span>
          <img src={ArrowDown} alt="DropDown Arrow" width={25} height={25} />
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-full z-20 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-full sm:w-[200px] max-w-[150px] overflow-hidden">
          <div className="py-2 max-h-48 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg font-medium cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
                {/* <div className="h-[2px] bg-[#E8E8E8] my-2 border-t-2 border-dashed"></div> */}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MemoizedUserTypeDropdown = React.memo(UserTypeDropdown);
export { MemoizedUserTypeDropdown };
