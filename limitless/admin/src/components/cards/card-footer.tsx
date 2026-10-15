// Components
import Button from "../buttons/button";

interface ICardFooter {
  btnText?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
  isPending?: boolean;
}

const CardFooter = ({
  onCancel,
  onSubmit,
  btnText,
  isPending,
}: ICardFooter) => {
  return (
    <div className="space-y-3">
      <div className="rounded-sm" />

      <div className="flex justify-between gap-x-2 ">
        <Button
          text="Cancel"
          isOutline
          className="border w-full"
          onClick={onCancel}
          disabled={isPending}
        />
        <Button
          disabled={isPending}
          text={btnText || "Add"}
          onClick={onSubmit}
          type="submit"
          className="w-full disabled:bg-divider disabled:text-text-primary"
        />
      </div>
    </div>
  );
};

export default CardFooter;
