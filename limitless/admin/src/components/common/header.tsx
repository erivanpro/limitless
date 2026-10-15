// React

// Components
import BackButton from "../buttons/back-button";
import Button from "../buttons/button";

interface HeaderProps {
  title?: string;
  isBackButton?: boolean;
  buttonText?: string;
  onclick?: () => void;
  redirectUrl?: string;
  isIcon?: boolean;
  link?: string;
  type?: string;
}

const Header = ({
  title,
  isBackButton,
  buttonText,
  onclick,
  redirectUrl,
  isIcon,
  link,
}: HeaderProps) => {
  return (
    <div className="">
      {isBackButton && (
        <div className="py-3">
          <BackButton link={link} />
        </div>
      )}
      {title && (
        <div className="flex justify-between items-center">
          <p className="text-text-primary font-medium text-xl md:text-4xl sm:text-xl xs:text-lg">
            {title}
          </p>
        </div>
      )}

      {buttonText && (
        <div>
          <Button
            isIcon={isIcon}
            text={buttonText}
            onClick={() => onclick && onclick()}
            redirectURL={redirectUrl}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
