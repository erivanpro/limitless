// React & next Imports
import { useNavigate } from "react-router";
// Icon Import
import ArrowBack from "../../assets/back-arrow.png";
interface BackButtonProps {
  link?: string;
}

const BackButton = ({ link }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (link) navigate(link);
    else navigate(-1);
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        <button
          onClick={handleBack}
          className="flex gap-x-6 cursor-pointer items-center"
        >
          <img src={ArrowBack} alt="Back Arrow" className="w-[36px] h-[36px]" />
        </button>
        <p className="text-text-primary text-2xl font-bold ">User Details</p>
      </div>
    </>
  );
};

export default BackButton;
