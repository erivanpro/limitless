import { useNavigate, useLocation } from "react-router";

interface IProps {
  name: string;
  icon: string;
  link: string;
  isLogoutButton?: boolean;
}
const Tab = ({ icon, name, link, isLogoutButton }: IProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    console.log(location.pathname);
    if (location.pathname === link) {
      navigate("/users", { replace: true });
      setTimeout(() => navigate(link), 0);
    } else {
      navigate(link);
    }
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      className={`flex cursor-pointer gap-x-3 items-center  max-w-60 py-2 rounded-xl`}
    >
      <img
        alt={name}
        src={icon}
        width={24}
        height={24}
        className={`${isLogoutButton ? "ml-4" : ""}`}
      />
      <h1
        className={` ${isLogoutButton ? "text-white" : "text-lg text-black font-medium"}`}
      >
        {name}
      </h1>
    </a>
  );
};

export default Tab;
