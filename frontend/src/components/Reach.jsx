import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Reach = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium text-white">REACH US ON:</p>
      <div className="flex gap-4 items-center">
        <FaSquareFacebook className="cursor-pointer hover:text-[#BB9457] text-[36px] text-white" />
        <RiInstagramFill className="cursor-pointer hover:text-[#BB9457] text-[40px] text-white" />
      </div>
    </div>
  );
};

export default Reach;
