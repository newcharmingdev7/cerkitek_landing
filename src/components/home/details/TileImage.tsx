import Images from "@/utils/images";
import Image from "next/image";

const TileImage = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2">
      <div className="grid gap-y-2">
        <Image
          src={Images.mainFirst}
          alt="Potential with CerkiTek"
          className="rounded-lg"
        />
        <Image
          src={Images.mainSecond}
          alt="Potential with CerkiTek"
          className="rounded-lg"
        />
      </div>
      <div className="grid gap-y-2">
        <Image
          src={Images.mainThird}
          alt="Potential with CerkiTek"
          className="rounded-lg"
        />
        <Image
          src={Images.mainFourth}
          alt="Potential with CerkiTek"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default TileImage;
