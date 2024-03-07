import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";

const MockupFriendsList = () => {
  return (
    <div className="flex flex-col w-[20vw] translate-x-[4vw] bg-white rounded-3xl  -rotate-x-[20deg] -rotate-z-12 shadow-2xl">
      <div className="artboard artboard-horizontal phone-1 h-[45vh]">
        <div role="tablist" className="tabs tabs-bordered w-[18vw] p-2">
          <a role="tab" className="tab tab-active">
            Friends
          </a>
          <a role="tab" className="tab ">
            Group
          </a>
          <a role="tab" className="tab">
            options
          </a>
        </div>
        <label className="input input-bordered flex items-center gap-2 w-[18vw] m-2">
          <IoSearchSharp size={20} />
          <input type="text" className="grow" placeholder="Search" value="Olivia" />
        </label>

        <ul className="menu bg-base-200 w-[16vw] p-2 m-2">
          <li>
            <a className=" flex items-center">
              <div className="avatar">
                <div className="w-6 rounded">
                  <Image src="/images/man2.jpg" alt="man2" />
                </div>
              </div>
              <div>David</div>
            </a>
          </li>

          <li>
            <a className="active flex items-center">
              <div className="avatar">
                <div className="w-6 rounded">
                  <Image src="/images/woman1.jpg" alt="woman1" />
                </div>
              </div>
              <div>Olivia</div>
            </a>
          </li>
          <li>
            <a className=" flex items-center">
              <div className="avatar">
                <div className="w-6 rounded">
                  <Image src="/images/man1.jpg" alt="man1" />
                </div>
              </div>
              <div>William</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MockupFriendsList;
