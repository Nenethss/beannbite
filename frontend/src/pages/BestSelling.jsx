import BestSellerCard from "../components/BestSellerCard";
import { bestSelling } from "../data/bestSelling";

const BestSelling = () => {
  return (
    <div className="w-full h-100 flex justify-center items-center flex-col gap-10 py-10 mb-8 mt-4">
      <div>
        <h1 className="font-michroma text-[30px] text-white rounded-lg ">
          BEST <span className="text-[#ffe6a7]">SELLING </span>
        </h1>
      </div>
      <div className="flex w-full h-[75%] px-10 gap-10">
        {bestSelling.map((item) => (
          <BestSellerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
