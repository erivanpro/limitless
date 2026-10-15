import React from "react";
import { User } from "../../types/auth/user";

const DrivingDetails = ({ data }: { data: User }) => {
  const userDetails: { label: string; value: React.ReactNode }[] = [
    { label: "License Number", value: data.license_number || "N/A" },
    { label: "Expiry Date", value: data.expiry_date || "N/A" },
    {
      label: "License",
      value: (
        <a
          href={data.license_image}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline cursor-pointer"
        >
          View Image
        </a>
      ),
    },
  ];
  return (
    <div>
      <h1 className="text-[20px] font-medium">Driving Details</h1>
      <div className="border-3 border-[#E8E8E8] rounded-2xl my-6 py-6 pl-4 h-fit ">
        <div className="grid grid-cols-2 md:px-6">
          {userDetails.map((detail, index) => (
            <div key={index} className="flex flex-col ">
              <p className="text-[14px] py-1">{detail.label}</p>
              <p className="text-[12px] text-[#292929]">{detail.value}</p>
              {index < userDetails.length - 1 && (
                <div className=" h-[2px] bg-[#E8E8E8] my-4  w-[95%] ml-[-10px]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrivingDetails;
