import { footerContent } from "@/consts/footerContent";

const Footer = () => {
  return (
    <div className="flex justify-between p-4 lg:p-8 text-gray dark:text-white text-base font-medium">
      <div>{footerContent.copyright}</div>
      <div>{footerContent.companymail}</div>
    </div>
  );
};

export default Footer;
