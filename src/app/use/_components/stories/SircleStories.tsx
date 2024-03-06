import { useState } from "react";
import { CreateElementType, Item } from "../Canvas";

type Props = {
  onAddItem: (args: CreateElementType) => any;
  onRemoveItem: (args: number) => void;
};

const SircleStories = ({ onAddItem, onRemoveItem }: Props) => {
  const [sircleColor, setSircleColor] = useState("bg-transparent");

  const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Delete") {
      onRemoveItem(index);
    }
  };

  const createElement = (el: Item) => {
    const i = el.i;
    return (
      <div key={i} data-grid={el} className="relative border-0 ">
        {
          <button
            onKeyDown={handleKeyDown(i)}
            className={`btn no-animation rounded-full border-2 border-gray-300  w-full h-full aspect-square ${sircleColor} hover:${sircleColor} cursor-auto shadow-none`}
          ></button>
        }
      </div>
    );
  };

  return (
    <>
      <div className="flex-1 w-[90%] preview rounded-2xl flex justify-center items-center">
        <div
          className={`btn no-animation rounded-full border-2 border-gray-300  w-28 h-28 ${sircleColor} hover:${sircleColor} cursor-auto shadow-none`}
        ></div>
      </div>
      <div className="flex-1 flex flex-col w-full space-y-2 ml-5">
        <div>
          <div className="label">
            <span className="label-text font-bold">Background Color</span>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={sircleColor}
            onChange={({ target }) => setSircleColor(target.value)}
            defaultValue="outline"
          >
            <option value="bg-transparent">Transparent</option>
            <option value="btn-primary">Primary</option>
            <option value="btn-secondary">Secondary</option>
            <option value="btn-accent">Accent</option>
            <option value="btn-info">Info</option>
            <option value="btn-warning">Warning</option>
            <option value="btn-error">Error</option>
            <option value="btn-disabled">Disabled</option>
          </select>
        </div>

        <div className="self-start p-2">
          <button className="btn btn-neutral w-20" onClick={() => onAddItem(createElement)}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default SircleStories;
