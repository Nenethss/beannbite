import bgImage from "../assets/bg-image.jpg";
import LogoW from "../assets/Logo_white.png";

const Home = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-10 relative h-full w-full">
        <div className="py-9 w-87.5 bg-[#0e0e0e] absolute bottom-20 left-30 flex flex-col items-center justify-center rounded-2xl shadow-lg gap-6">
          <div className="flex flex-col gap-2">
            <img src={LogoW} alt="Background" className="h-20 object-cover" />
            <p className="text-sm text-white">
              • Coffee • Non-Coffee • Pastries •
            </p>
          </div>
          <div className="flex gap-4">
            <button className="text-[14px] cursor-pointer w-35 bg-white hover:bg-[#432818] px-2 py-1 text-[#0e0e0e] hover:text-white rounded-[19px] tracking-widest">
              VISIT US!
            </button>
            <button className="text-[14px] cursor-pointer w-35 bg-white hover:bg-[#432818] px-2 py-1 text-[#0e0e0e] hover:text-white rounded-[19px] tracking-widest">
              ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
