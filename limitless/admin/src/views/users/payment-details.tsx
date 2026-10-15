import React from "react";
import { Host } from "../../types/auth/user";

const PaymentDetails = ({ data }: { data: Host }) => {
  const userDetails: { label: string; value: React.ReactNode } = {
    label: "Stripe Account ID",
    value: data.stripe_account_id || "N/A",
  };

  return (
    <div>
      <h1 className="text-[20px] font-medium">Payment Detaills</h1>
      <div className="border-3 border-[#E8E8E8] rounded-2xl my-6 py-6 pl-4 h-fit ">
        <div className="grid grid-cols-2 px-6">
          <div className="flex flex-col ">
            <p className="text-[14px] py-1">{userDetails.label}</p>
            <p className="text-[12px] text-[#292929]">{userDetails.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
