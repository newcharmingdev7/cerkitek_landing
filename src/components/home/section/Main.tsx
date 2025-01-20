import DefaultButton from "@/components/common/DefaultButton";
import TileImage from "../details/TileImage";
import { maincontent } from "@/consts/homeContents";
import { bookmarkUrl } from "@/consts/urls";

const Main = () => {
  return (
    <div className="px-8 sm:px-16 lg:px-30 py-4 sm:py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[650px] grid gap-y-2 lg:max-w-[440px] h-fit">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Unlock Your <br />{" "}
            <span className="text-darkRed dark:text-green">
              Digital Potential
            </span>{" "}
            <br />
            with CerkiTek
          </h1>
          <p className="text-base text-gray dark:text-white h-fit">
            {maincontent.discription}
          </p>
          <DefaultButton
            title="Contact us now"
            variant="green"
            url={bookmarkUrl}
          />
        </div>
      </div>
      <div className="w-full h-full flex justify-center item-center">
        <TileImage />
      </div>
    </div>
  );
};

export default Main;
