import Images from "@/utils/images";

export const maincontent = {
  title: (
    <>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
        Unlock Your <br />{" "}
        <span className="text-darkRed">Digital Potential</span> <br />
        with CerkiTek
      </h1>
    </>
  ),
  discription: `At CerkiTek, we bridge the gap between your business challenges and
            transformative IT solutions. Whether you are rescuing a struggling
            project, modernizing outdated systems, or building custom software
            from scratch, we are here to ensure your business thrives in the
            digital age.`,
};

export const choosecontent = {
  head: {
    title: (
      <>
        <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
          Why Choose CerkiTek?
        </h1>
      </>
    ),
    description: `In a world where technology evolves at lightning speed, we help
            businesses stay ahead. Our expertise lies in`,
  },
  content: [
    {
      title: "Project Rescue",
      desription: `We turn distressed projects into success stories, 
      identifying root causes of failure, realigning goals, 
      and implementing recovery strategies that deliver results.`,
    },
    {
      title: "Software modernization",
      desription: `Outdated systems holding you back? 
      Our modernization services enhance performance, security, 
      and scalability—future-proofing your operations with minimal disruption.`,
    },
    {
      title: "Custom Software Development",
      desription: `Your business is unique, 
      and your software should be too. We craft tailor-made solutions designed 
      to meet your exact needs and deliver measurable value.`,
    },
  ],
};

export const introContent = [
  {
    borderColor: "border-[#62C1BF]",
    image: Images.first,
    head: (
      <>
        <span className="text-darkRed">Project Rescue:</span> <br />
        Get Back on Track
      </>
    ),
    up: `No project is beyond saving with CerkiTek. Our seasoned experts dive deep to:`,
    details: [
      `Diagnose root issues.`,
      `Re-establish clear objectives.`,
      `Implement robust recovery plans.`,
    ],
    bottom: `The result? Your project not only gets back on track but exceeds expectations.`,
  },
  {
    borderColor: "border-[#041598]",
    image: Images.second,
    head: (
      <>
        <span className="text-darkRed">Software modernization:</span> <br />
        Stay Future-Ready
      </>
    ),
    up: `Stop letting outdated software slow you down. Our modernization process ensures:`,
    details: [
      `Enhanced performance and security`,
      `Improved user experiences.`,
      `Seamless integration of cutting-edge technologies.`,
    ],
    bottom: `With CerkiTek, your systems will be as innovative as your vision.`,
  },
  {
    borderColor: "border-[#FFD118]",
    image: Images.third,
    head: (
      <>
        <span className="text-darkRed">Custom Software Development:</span>{" "}
        <br />
        Built for You
      </>
    ),
    up: `Tired of one-size-fits-all solutions? We deliver software that is:`,
    details: [
      `Tailored to your business needs.`,
      `Scalable and secure.`,
      `Designed to adapt as your business grows.`,
    ],
    bottom: `From concept to deployment, our team collaborates with you every step of the way.`,
  },
];

export const contactContent = {
  title: "Partner with CerkiTek Today",
  description: `Your business deserves more than just solutions—it deserves a partner committed to your success. 
  At CerkiTek, we do not just solve problems; we create opportunities for growth, innovation, and excellence.`,
};
