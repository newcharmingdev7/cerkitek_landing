import Main from "@/components/home/section/Main";
import Choose from "@/components/home/section/Choose";
import Intro from "@/components/home/section/Intro";
import Contact from "@/components/home/section/Contact";

export default function Home() {
  return (
    <div className="bg-white dark:bg-defaultBlack">
      <Main />
      <Choose />
      <Intro />
      <Contact />
    </div>
  );
}
