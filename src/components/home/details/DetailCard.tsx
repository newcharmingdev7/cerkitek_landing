import Image from "next/image";
import Images from "@/utils/images";

interface Props {
  title: string;
  description: string;
}

const DetailCard = ({ title, description }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="w-full bg-white p-6 rounded-xl min-h-80">
        <div className="grid gap-y-2">
          <Image
            src={Images.circleTick}
            alt="circle tick"
            width={64}
            height={64}
          />
          <h1 className="text-2xl lg:text-3xl font-medium text-black">
            {title}
          </h1>
          <p className="text-gray text-base font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
