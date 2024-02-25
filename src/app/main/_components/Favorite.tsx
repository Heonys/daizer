import Image from "next/image";
import { useState } from "react";
import BiBi from "@/../public/bibi.jpg";
import { PiCaretDoubleLeftFill, PiCaretDoubleRightFill } from "react-icons/pi";
import { AiFillSound } from "react-icons/ai";

const Favorite = () => {
  const [volume, setVolume] = useState(40);

  return (
    <div className=" h-full px-5 py-5 bg-base-200 grid grid-cols-12 grid-rows-4 gap-6">
      <div className="bg-[#fefbfc] rounded-box col-start-1 col-span-3 row-span-2 "></div>
      <div className="bg-[#fefbfc] rounded-box  col-start-4 col-span-5 "></div>
      <div className="bg-[#fefbfc] rounded-box  col-span-4 row-span-4 "></div>
      <div className="bg-base-200 rounded-box  col-span-5 "></div>
      <div className="bg-[#fefbfc] rounded-box  col-span-3 row-span-2"></div>
      <div className="bg-base-200 rounded-box  col-span-5 "></div>
      <div className="bg-[#fefbfc] rounded-box col-span-5 flex justify-center space-x-4 flex-row items-center">
        <div className="flex space-x-3">
          <div className="flex items-center">
            <PiCaretDoubleLeftFill size={25} />
          </div>
          <div className="flex space-x-3 items-center">
            <Image
              src={BiBi}
              alt="play"
              width={60}
              height={60}
              className="border border-gray-300"
            />
            <div>
              <div className="font-black">밤양갱</div>
              <div className="text-sm">비비 (BIBI)</div>
              <progress className="progress w-48" value="70" max="100"></progress>
            </div>
          </div>
          <div className="flex items-center">
            <PiCaretDoubleRightFill size={25} />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            min={0}
            max="100"
            onChange={(event) => setVolume(+event.target.value)}
            value={volume}
            className="w-16 range range-xs"
          />
          <AiFillSound />
        </div>
      </div>
    </div>
  );
};
export default Favorite;
