import Images from "@/utils/images";
import Image, { StaticImageData } from "next/image";

interface Props {
  content: {
    image: string | StaticImageData; 
    head: React.ReactNode;
    up: string;
    details: string[];
    bottom: string;
  };
  index: number;
}

const IntroCard = ({ content, index }: Props) => {
  return (
    <div className="h-fit grid grid-cols-1 lg:grid-cols-2 px-10 sm:px-20 xl:px-40 py-8 xl:py-16 gap-8">
      <div
        className={`flex justify-center items-center ${
          index % 2 === 1 ? "lg:order-last" : "order-first"
        }`}
      >
        <Image src={content.image} alt="Project Rescue"/>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[440px] grid gap-y-2">
          {content.head}
          <div className="text-gray-700 text-base font-medium grid gap-y-2">
            <p>{content.up}</p>
            {content.details.map((item: string, index: number) => (
              <div className="flex gap-2" key={index}>
                <Image
                  src={Images.circleTick}
                  width={24}
                  height={24}
                  alt="circle tick"
                />
                <p>{item}</p>
              </div>
            ))}
            <p>{content.bottom}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
