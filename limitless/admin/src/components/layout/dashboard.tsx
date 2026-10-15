import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Sidebar from "../sidebar/sidebar";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex !h-screen w-full overflow-hidden ">
      <div
        className={`${
          isOpen &&
          "bg-lightBlack z-20 w-screen absolute top-0 left-0 h-screen lg:bg-transparent"
        }`}
      />

      <Sidebar isOpen={isOpen} setIsOPen={setIsOpen} />

      <div className="bg-[#F8F8F8] w-full">
        <button
          className="lg:bg-transparent bg-white  lg:border-none border-b border-divider w-full flex justify-end items-center cursor-default px-7 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMenuAlt3
            className="lg:hidden cursor-pointer text-text-primary"
            size={30}
          />
        </button>
        <div className="md:px-10 px-6 py-6 h-[94.5dvh] lg:w-[calc(100vw-300px)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
