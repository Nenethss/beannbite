import menuList from "../assets/MenuList.jpg";

const MenuList = () => {
  return (
    <div className="h-130 w-full p-10 flex">
      <div className="h-full w-[50%] py-6">
        <div className="h-full w-full bg-[#FFE6A7] rounded-l-2xl  p-6 flex flex-col gap-6">
          <h1 className="text-[22px] font-michroma">
            ENJOY FRESHLY BREWED COFFEE AND BAKED GOODS
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            ipsum in nulla vulputate lacinia. Phasellus lectus magna, pharetra
            vitae dapibus in, cursus id ex. Mauris auctor risus eros, non
            ultricies quam gravida vel.
          </p>
          <div className="w-full flex">
            <button className="cursor-pointer hover:bg-[#432818] bg-[#0e0e0e] text-white px-6 py-2 rounded-xl">
              MENU LIST
            </button>
          </div>
        </div>
      </div>
      <div
        className="h-full w-[55%] rounded-lg"
        style={{
          backgroundImage: `url(${menuList})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default MenuList;
