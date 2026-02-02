import Reach from "./Reach";

const About = () => {
  return (
    <div className="h-full w-full rounded-r-2xl px-6 flex flex-col gap-2 justify-center py-2">
      <h1 className="text-[42px] text-white">
        ABOUT <span className="text-[#BB9457]">US</span>
      </h1>
      <p className="text-[18px] text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
        ipsum in nulla vulputate lacinia. Phasellus lectus magna, pharetra vitae
        dapibus in, cursus id ex. Mauris auctor risus eros, non ultricies quam
        gravida vel. Proin ultricies blandit nibh, eget interdum dolor pulvinar
        ut. Phasellus faucibus lectus vel erat mattis placerat. Vivamus purus
        nibh, sagittis a mattis eget, ullamcorper sed justo.
      </p>
      <Reach />
    </div>
  );
};

export default About;
