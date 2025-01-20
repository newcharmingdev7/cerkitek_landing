import Link from "next/link";

interface Props {
  title: string;
  variant: "green" | "white";
  url: string;
}
const DefaultButton = ({ title, variant, url }: Props) => {
  const style =
    variant === "green"
      ? "h-11 border-white bg-green text-white"
      : "h-11 border-green bg-white text-green";
  return (
    <a href={url} target="_blank">
      <button
        className={`${style} rounded-md border-2 text-base lg:text-lg text-center py-2 px-3 w-fit hover:cursor-pointer`}
      >
        {title}
      </button>
    </a>
  );
};

export default DefaultButton;
