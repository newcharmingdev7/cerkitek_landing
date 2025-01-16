import IntroCard from "../details/IntroCard";
import { introContent } from "@/consts/homeContents";

const Intro = () => {
  return (
    <div className="grid gap-y-4">
      {introContent.map((item, index) => (
        <IntroCard content={item} key={index} index ={index}/>
      ))}
    </div>
  );
};

export default Intro;
