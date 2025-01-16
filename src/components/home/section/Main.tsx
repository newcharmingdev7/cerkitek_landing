import Image from "next/image";
import Images from "@/utils/images";
import DefaultButton from "@/components/common/DefaultButton";
import { maincontent } from "@/consts/homeContents";

const Main = () => {
  return (
    <div className="px-8 sm:px-16 lg:px-30 py-4 sm:py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[650px] grid gap-y-2 lg:max-w-[440px] h-fit">
          {maincontent.title}
          <p className="text-base text-gray h-fit">{maincontent.discription}</p>
          <div className="flex gap-x-2">
            <DefaultButton title="Contact us now" variant="green" />
            <DefaultButton title="Learn More" variant="white" />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center item-center">
        <Image
          src={Images.main}
          alt="Unlock your digital potential with CerkiTek"
        />
      </div>
    </div>
  );
};

export default Main;
