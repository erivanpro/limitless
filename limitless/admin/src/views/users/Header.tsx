import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import Actions from "../../components/buttons/actions";
import Table from "../../components/table/table";
import TableHeader from "../../components/table/table-head";
import UsersTableBody from "./TableBody";
import { useGetAllUsersHook } from "../../services/users/get-filtered-users";

interface UserStatus {
  status: "Approved" | "Pending" | "Rejected";
}
const Header = () => {
  const [status, setStatus] = useState<UserStatus>({ status: "Approved" });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();
  const tableHeader = ["Name", "Email", "Phone Number", "Role", "Action"];
  const { status: UserStatus } = status;

  const { data, isPending } = useGetAllUsersHook(
    currentPage,
    rowsPerPage,
    searchTerm,
    selectedRole,
    UserStatus,
  );

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const selectRole = (role: React.SetStateAction<string>) => {
    setSelectedRole(role);
    setIsOpen(false);
  };

  return (
    <>
      <div className=" bottom-[-11px] h-[2px] bg-[#E8E8E8] my-6 "></div>

      <div className="flex gap-10  ">
        <div className="flex flex-col gap-1 my-4  ">
          <button
            className={`${UserStatus === "Approved" ? "text-black " : "text-[#656565]"} text-md cursor-pointer `}
            onClick={() => {
              setStatus({ status: "Approved" });
              setSelectedRole("");
              setCurrentPage(1);
              setRowsPerPage(10);
            }}
          >
            Approved
          </button>
          <div
            className={` ${UserStatus === "Approved" ? "bottom-[-11px] w-full h-[3px] bg-black" : ""}`}
          ></div>
        </div>
        <div className="flex flex-col gap-1 my-4  ">
          <button
            className={`${UserStatus === "Pending" ? "text-black " : "text-[#656565]"} text-md cursor-pointer `}
            onClick={() => {
              setStatus({ status: "Pending" });
              setSelectedRole("");
              setCurrentPage(1);
              setRowsPerPage(10);
            }}
          >
            Pending
          </button>
          <div
            className={` ${UserStatus === "Pending" ? "bottom-[-11px] w-full h-[3px] bg-black" : ""} `}
          ></div>
        </div>
        <div className="flex flex-col gap-1 my-4  ">
          <button
            className={`${UserStatus === "Rejected" ? "text-black " : "text-[#656565]"} text-md cursor-pointer `}
            onClick={() => {
              setStatus({ status: "Rejected" });
              setSelectedRole("");
              setCurrentPage(1);
              setRowsPerPage(10);
            }}
          >
            Rejected
          </button>
          <div
            className={` ${UserStatus === "Rejected" ? "bottom-[-11px] w-full h-[3px] bg-black" : ""} `}
          ></div>
        </div>
      </div>
      <div className="space-y-8 my-4">
        <Table
          currentPage={currentPage}
          rowsOption={[10, 20, 30, 40]}
          rowsPerPage={rowsPerPage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setCurrentPage={setCurrentPage}
          setRowsPerPage={setRowsPerPage}
          total={data?.total}
          isFooter
          isPending={isPending}
          toggleDropdown={toggleDropdown}
          selectedOption={selectedRole}
          selectOption={selectRole}
          isOpen={isOpen}
          isSearch={true}
        >
          {data?.data && data.data.length > 0 && (
            <TableHeader tableHeader={tableHeader} />
          )}

          {data?.data &&
            data.data.map((user, index) => (
              <UsersTableBody
                key={index}
                {...user}
                actions={
                  <Actions
                    isIcon={false}
                    onView={() => {
                      navigate(`/users/${user?.id}`);
                    }}
                  />
                }
              />
            ))}
          {!data?.data || data.data.length === 0 ? (
            <tbody className="flex justify-center items-center h-[35dvh]">
              <tr className="text-center text-xl font-bold">
                <td>No data found</td>
              </tr>
            </tbody>
          ) : null}
        </Table>
      </div>
    </>
  );
};
export default Header;
