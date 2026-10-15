import DashboardLayout from "../../components/layout/dashboard";
import UsersTable from "./Header";

const Users = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold  ">Users</h1>
      <UsersTable />
    </DashboardLayout>
  );
};

export default Users;
