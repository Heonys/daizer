import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  author: string;
  time: string;
  current?: boolean;
};

const PlayList = ({ image, title, author, time, current = false }: Props) => {
  return (
    <div className={`flex p-2 shadow-md m-2 hover:scale-110 ${current ? "bg-gray-200" : ""}`}>
      <div className="w-12">
        <Image src={image} alt={title} />
      </div>
      <div className="flex items-center w-full justify-between px-3">
        <div>
          <h1 className="">{title}</h1>
          <h2 className="text-sm text-gray-400">{author}</h2>
        </div>
        <h2 className="text-sm text-gray-400">{time}</h2>
      </div>
    </div>
  );
};

export default PlayList;
