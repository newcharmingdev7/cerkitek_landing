import DefaultButton from "@/components/common/DefaultButton";
import { contactContent } from "@/consts/homeContents";
import { bookmarkUrl } from "@/consts/urls";

const Contact = () => {
  return (
    <div className="px-8 sm:px-16 lg:px-30 py-8 lg:py-16 text-white grid gap-y-4 bg-green">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center">
        {contactContent.title}
      </h1>
      <div className="flex justify-center">
        <p className="max-w-[640px] text-cente text-white text-base font-medium text-center">
          {contactContent.description}
        </p>
      </div>
      <div className="flex justify-center">
        <DefaultButton
          title="Contact us now"
          variant="green"
          url={bookmarkUrl}
        />
      </div>
    </div>
  );
};

export default Contact;
