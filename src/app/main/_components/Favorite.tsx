import Image from "next/image";
import { useState } from "react";
import BiBi from "@/assets/bibi.jpg";
import { PiCaretDoubleLeftFill, PiCaretDoubleRightFill, PiPauseFill } from "react-icons/pi";
import { AiFillSound, AiOutlineHome } from "react-icons/ai";
import { IoSearch, IoShuffle, IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import PlayList from "./PlayList";
import ContentsGrid from "./ContentsGrid";
import PlayListGrid from "./PlayListGrid";
import IU from "@/assets/IU.jpg";

const Favorite = () => {
  const [volume, setVolume] = useState(40);

  return (
    <div className=" h-full px-5 py-5 bg-base-200 grid grid-cols-12 grid-rows-4 gap-6">
      <div className="bg-[#fefbfc] rounded-box col-start-1 col-span-3 row-span-3 overflow-hidden">
        <div className="flex items-center justify-between p-2 px-3">
          <div className="font-bold">PlayList</div>
          <IoShuffle size={22} />
        </div>
        <PlayListGrid />
      </div>
      <div className="bg-[#fefbfc] rounded-box  col-start-4 col-span-5 h-14 flex items-center justify-end">
        <ul className="menu menu-horizontal rounded-box flex items-center justify-end">
          <li className="w-11">
            <div>
              <AiOutlineHome className="text-black" size={25} />
            </div>
          </li>
          <li className="w-11">
            <div>
              <FaRegBell size={25} />
            </div>
          </li>
          <li className="w-11">
            <div>
              <IoSettingsOutline size={25} />
            </div>
          </li>
          <li>
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[#fefbfc] rounded-box  col-span-4 row-span-4 ">
        <div className="flex justify-center items-center h-16">
          <div className="join">
            <button className="btn join-item rounded-full">
              <IoSearch size={20} />
            </button>
            <input className="input bg-base-200 join-item rounded-full" placeholder="search" />
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <button className="btn btn-sm">#운동</button>
          <button className="btn btn-sm">#집중</button>
          <button className="btn btn-sm">#힙합</button>
          <button className="btn btn-sm">#휴식</button>
          <button className="btn btn-sm">#출퇴근길</button>
        </div>
        <ContentsGrid />
      </div>
      <div className="bg-base-200 rounded-box  col-span-5 "></div>
      <div className="bg-base-200 rounded-box  col-span-5 "></div>
      <div className="bg-[#fefbfc] rounded-box col-span-3">
        <div className="flex items-center justify-between p-2 px-3">
          <div className="font-bold">Recommend</div>
          {/* <IoShuffle size={22} /> */}
        </div>
        <PlayList image={IU} title="Celebrity" author="아이유(IU)" time="3:39" />
        <PlayList image={IU} title="Celebrity" author="아이유(IU)" time="3:39" />
      </div>
      <div className="bg-[#fefbfc] rounded-box col-span-5 flex justify-center space-x-4 flex-row items-center">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <PiCaretDoubleLeftFill size={25} />
            <PiPauseFill size={25} />
            <PiCaretDoubleRightFill size={25} />
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
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-black">밤양갱</div>
                  <div className="text-sm">비비 (BIBI)</div>
                </div>
                <div className=" text-sm self-end">1:42 / 2:26</div>
              </div>

              <progress className="progress w-48" value="70" max="100"></progress>
            </div>
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
