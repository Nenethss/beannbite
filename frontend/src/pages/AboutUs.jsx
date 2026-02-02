import aboutus from "../assets/aboutus.png";
import About from "../components/About";

const AboutUs = () => {
  return (
    <div className="h-130 w-full p-10 flex">
      <div
        className="h-full w-[50%] rounded-lg"
        style={{
          backgroundImage: `url(${aboutus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="h-full w-[50%]">
        <About />
      </div>
    </div>
  );
};

export default AboutUs;
