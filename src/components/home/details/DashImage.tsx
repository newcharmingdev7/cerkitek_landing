import Image, { StaticImageData } from "next/image";

interface Props {
  url: StaticImageData | string;
  index: number;
}

const DashImage = ({ url, index }: Props) => {
    const borderColor =
    index === 0
      ? "border-[#62C1BF]"
      : index === 1
      ? "border-[#041598]"
      : "border-[#FFD118]";
  return (
    <div className="relative h-full">
      <div
        className={`${borderColor} w-full h-full absolute bottom-4 left-4 border-t-2 border-r-2 border-dashed border-opacity-40 rounded-lg z-0`}
      ></div>
      <div className="w-full h-full overflow-hidden z-10">
        <Image
          src={url}
          alt="Project Rescue"
          className="objectfit-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default DashImage;
