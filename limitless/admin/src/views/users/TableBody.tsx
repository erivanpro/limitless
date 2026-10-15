// React
import { Fragment } from "react";

// Components
import Avatar from "../../components/common/avatar";
import { User } from "../../types/auth/user";
import { cn } from "../../lib/utils";
import Profile from "../../assets/Avatar.png";

const UsersTableBody = ({
  profile_picture,
  full_name,
  email,
  phone_number,
  user_type,
  actions,
}: User) => {
  console.log(user_type);
  const tableData = [email, phone_number, user_type];

  //   ];
  return (
    <tbody>
      <tr
        className={`h-[60px] border-b-3 border-[#F5F5F5]  text-[13px] font-medium text-[#111927] hover:bg-[#f7f7f7] relative`}
      >
        <td className="px-3">
          <Avatar
            image={profile_picture || Profile}
            name={full_name || "N/A"}
            size={40}
          />
        </td>

        {tableData.map((each, index) => (
          <Fragment key={index}>
            {each == null ? (
              <td className={cn("px-3")}>N/A</td>
            ) : index == 2 ? (
              <td className="px-3 whitespace-nowrap overflow-hidden text-ellipsis text-[#656565]">
                {Array.isArray(user_type) && user_type.length > 0
                  ? `[${user_type.join(", ")}]`
                  : "N/A"}
              </td>
            ) : (
              <td
                className={cn(
                  "px-3 whitespace-nowrap overflow-hidden text-ellipsis text-[#656565]",
                )}
              >
                {each}
              </td>
            )}
          </Fragment>
        ))}

        {actions && <td className=" px-2 mt-[14px] pr-4">{actions}</td>}
      </tr>
    </tbody>
  );
};

export default UsersTableBody;
