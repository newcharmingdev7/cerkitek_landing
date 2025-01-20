import DetailCard from "../details/DetailCard";
import { choosecontent } from "@/consts/homeContents";

const Choose = () => {
  return (
    <div className="py-8 lg:py-16 px-8 sm:px-16 lg:px-30 grid gap-y-5 lg:gap-y-10 bg-lightGray dark:bg-defaultBlack">
      <div className="grid gap-2">
        {choosecontent.head.title}
        <div className="flex justify-center">
          <p className="max-w-[640px] text-center text-gray dark:text-white text-base font-medium">
            {choosecontent.head.description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {choosecontent.content.map((item, index) => (
          <div key={index}>
            <DetailCard title={item.title} description={item.desription} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
