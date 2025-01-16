import Image from "next/image";
import Images from "@/utils/images";

interface Props {
  title: string;
  description: string;
}

const DetailCard = ({ title, description }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-96 bg-white p-6 rounded-xl min-h-[400px]">
        <div className="grid gap-y-2">
          <Image src={Images.circleTick} alt="circle tick" />
          <h1 className="text-2xl lg:text-3xl font-medium text-black">
            {title}
          </h1>
          <p className="text-base font-medium text-gray">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
