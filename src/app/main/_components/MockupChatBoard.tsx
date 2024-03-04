import { BsFillSendFill } from "react-icons/bs";
import { GoPaperclip } from "react-icons/go";
import { GrEmoji } from "react-icons/gr";

const MockupChatBoard = () => {
  return (
    <div className="flex flex-col w-[28vw] -translate-x-[16.5vw] bg-white rounded-badge  translate-y-[12vh] -rotate-x-[20deg] -rotate-z-12 shadow-2xl">
      <div className="artboard artboard-horizontal phone-1 flex flex-row p-4 ">
        <label className="input input-bordered w-[25vw] flex items-center gap-2 self-end ">
          <input type="text" className="grow " placeholder="Message" />
          <GrEmoji size={20} />
          <GoPaperclip size={20} />
          <BsFillSendFill size={20} color="blue" />
        </label>
      </div>
    </div>
  );
};

export default MockupChatBoard;
