import { useParams } from "react-router";
import Header from "../../components/common/header";
import DashboardLayout from "../../components/layout/dashboard";
import { useGetUserbyIdHook } from "../../services/users/get-user-by-id";
import Button from "../../components/buttons/button";
import PersonDetails from "./person-details";
import { Host, User, UserType } from "../../types/auth/user";
import DrivingDetails from "./driving-details";
import PaymentDetails from "./payment-details";
import Avatar from "../../assets/Avatar.png";
import RejectionModal from "./rejection-modal";
import { useApproveUserHook } from "../../services/users/approve-user";

const UserDetails = () => {
  const param = useParams();
  const { data, isPending: userDetailsPending } = useGetUserbyIdHook(
    Number(param?.id),
  );
  const { mutateAsync: ApproveUser, isPending } = useApproveUserHook(
    Number(param?.id),
  );

  const handleApproveUser = (id: number) => {
    ApproveUser({ id });
  };

  return (
    <DashboardLayout>
      {userDetailsPending && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      <h1 className="text-2xl font-bold  ">Users</h1>
      <div className=" bottom-[-11px] h-[2px] bg-[#E8E8E8] my-6 "></div>
      <Header isBackButton link="/users" />
      {data && data?.is_rejected && (
        <div className="border-3 border-[#E8E8E8] rounded-2xl my-6 pt-6 pl-4 w-full h-[168px]">
          <div className="w-full h-full overflow-y-auto">
            <h1 className="text-[24px] text-[#F9382D] font-medium">
              Reason of Rejection !
            </h1>
            <p className="text-[16px] pt-1 text-[#525252] break-words">
              {data?.rejection_reason || "N/A"}
            </p>
          </div>
        </div>
      )}
      {data && (
        <div className="border-3 border-[#E8E8E8] rounded-2xl my-6 py-6 pl-4 flex flex-wrap justify-between items-center w-full gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex justify-center items-center">
              <img
                src={data?.profile_picture || Avatar}
                alt="User Avatar"
                width={83}
                height={83}
                className="rounded-full w-20 h-20"
              />
            </div>
            <div className="flex flex-col gap-2 px-3">
              <p className="text-lg md:text-[24px] font-bold">
                {data?.full_name}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {data?.email && (
                  <p className="text-sm text-[#525252] flex items-center gap-2">
                    {data?.email}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {data && data?.is_verified ? (
              <Button
                text="Approved"
                className="bg-[#0000001A] text-black rounded-xl md:mr-4"
                isDetailsButton={true}
                disabled={true}
              />
            ) : data && !data?.is_verified && !data?.is_rejected ? (
              <div className="flex gap-2 flex-wrap">
                <RejectionModal userId={data?.id} />
                <Button
                  text="Approve"
                  className="bg-black text-white rounded-xl md:mr-4"
                  isDetailsButton={true}
                  onClick={() => handleApproveUser(data?.id)}
                  disabled={isPending}
                />
              </div>
            ) : (
              <Button
                text="Rejected"
                className="bg-[#F9382D1A] text-[#F9382D] rounded-xl md:mr-4"
                isDetailsButton={true}
              />
            )}
          </div>
        </div>
      )}

      {data && (
        <>
          <PersonDetails data={data as User} />
          <DrivingDetails data={data as User} />
          {data?.is_verified && data?.user_type.includes(UserType.HOST) && (
            <PaymentDetails data={data?.host as Host} />
          )}
        </>
      )}
    </DashboardLayout>
  );
};

export default UserDetails;
