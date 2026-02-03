const BestSellerCard = ({ item }) => {
  const words = item.name.split(" ");
  const firstWord = words.shift();
  const rest = words.join(" ");

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-2">
      <h2 className="text-md font-semibold text-white">• {item.type} •</h2>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex w-60 h-75 justify-center items-center rounded-[20px]"
      >
        <div className="w-full bg-black/60 h-12 flex items-center justify-center py-8 ">
          <p className="text-[17px] text-white font-semibold text-center">
            {firstWord}
            <br />
            {rest}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
