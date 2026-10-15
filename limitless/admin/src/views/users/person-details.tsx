import React from "react";
import { User } from "../../types/auth/user";

const PersonDetails = ({ data }: { data: User }) => {
  const userDetails: { label: string; value: React.ReactNode }[] = [
    { label: "First Name", value: data.first_name || "N/A" },
    { label: "Last Name", value: data.last_name || "N/A" },
    { label: "Email", value: data.email || "N/A" },
    { label: "Phone Number", value: data.phone_number || "N/A" },
    { label: "Emergency Contact", value: data.emergency_contact || "N/A" },
    { label: "DOB", value: data.date_of_birth || "N/A" },
    { label: "Country", value: data.country || "N/A" },
    { label: "City", value: data.city || "N/A" },
    { label: "Address", value: data.address || "N/A" },
    {
      label: "ID Card Front",
      value: (
        <a
          href={data.id_card_front}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline cursor-pointer"
        >
          View Image
        </a>
      ),
    },
    {
      label: "ID Card Back",
      value: (
        <a
          href={data.id_card_back}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline cursor-pointer"
        >
          View Image
        </a>
      ),
    },
    { label: "Role", value: `[${data.user_type.join(", ")}]` },
  ];
  return (
    <div>
      <h1 className="text-[20px] font-medium">Personal Details</h1>
      <div className="border-3 border-[#E8E8E8] rounded-2xl my-6 py-6 pl-4 h-fit ">
        <div className="grid grid-cols-2 md:px-6 ">
          {userDetails.map((detail, index) => (
            <div key={index} className="flex flex-col ">
              <p className="text-[14px] py-1">{detail.label}</p>
              <p className="text-[12px] text-[#292929]">{detail.value}</p>
              {index < userDetails.length - 2 && (
                <div className=" h-[2px] bg-[#E8E8E8] my-4  w-[95%] ml-[-10px]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
