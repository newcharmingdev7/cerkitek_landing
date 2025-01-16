import Image from "next/image";
import Images from "@/utils/images";

const Header = () => {
  return (
    <div className="p-4 lg:p-10">
      <Image src={Images.logo} alt="CERKITEK" />
    </div>
  );
};

export default Header;
