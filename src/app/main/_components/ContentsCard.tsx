import Image, { StaticImageData } from "next/image";
import React from "react";
import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";

type Props = {
  image: StaticImageData;
  like?: boolean;
  title: string;
  author: string;
};

const ContentsCard = ({ image, author, title, like = false }: Props) => {
  return (
    <div className="w-30 bg-base-100 shadow-xl rounded-md hover:scale-110">
      <Image src={image} alt={title} />
      <div className="body p-1 ">
        <div>
          <h1 className="font-bold">{title}</h1>
          <div className="flex w-full flex-row justify-between">
            <h2 className="text-sm text-gray-400">{author}</h2>
            {like ? <TiHeartFullOutline size={20} /> : <TiHeartOutline size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsCard;
