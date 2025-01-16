interface Props {
  title: string;
  variant: "green" | "white";
}
const DefaultButton = ({ title, variant }: Props) => {
  const style =
    variant === "green"
      ? "h-11 border-white bg-green text-white"
      : "h-11 border-green bg-white text-green";
  return (
    <div
      className={`${style} rounded-md border-2 text-base lg:text-lg text-center py-2 px-3 w-fit`}
    >
      {title}
    </div>
  );
};

export default DefaultButton;
