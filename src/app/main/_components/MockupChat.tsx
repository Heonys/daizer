import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
  message: string;
  style?: string;
};
const MockupChat = ({ image, message, style, name }: Props) => {
  return (
    <div className={`-translate-x-[21vw] -rotate-x-[20deg] -rotate-z-12  z-50 ${style}`}>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-14 rounded-full">
            <Image src={image} alt="woman1" />
          </div>
        </div>
        <div className="chat-bubble w-[23vw]">{message}</div>
        <div className="chat-header font-bold m-1">
          {name}
          <time className="text-xs opacity-50 p-1">12:45</time>
        </div>
      </div>
    </div>
  );
};

export default MockupChat;
