import { cn } from "../../lib/utils";

interface IAvatar {
  name: string;
  image: string;
  size: 40 | 64 | 20 | 10;
  className?: string;
  isSquare?: boolean;
  email?: string;
  isMaterial?: boolean;
}

const Avatar = ({
  image,
  name,
  size,
  className,
  email,
  isSquare,
  isMaterial,
}: IAvatar) => {
  return (
    <div className={`flex items-center gap-x-3`}>
      <img
        alt={name}
        src={image}
        width={size}
        height={size}
        className={cn(
          !isSquare ? "rounded-full" : "",
          `${size == 10 ? "h-[10px]" : "h-[40px]"} ${size == 10 ? "min-h-[20px]" : "min-h-[40px]"}`,
          `${size == 10 ? "w-[10px]" : "w-[40px]"} ${size == 10 ? "min-w-[20px]" : "min-w-[40px]"}`,
        )}
      />
      <div>
        <p
          className={`text-sm text-text-primary font-medium ${className} ${isMaterial ? "font-normal" : ""}`}
        >
          {name}
        </p>

        {email && (
          <p className="text-xs text-text-secondary font-medium">{email}</p>
        )}
      </div>
    </div>
  );
};

export default Avatar;
