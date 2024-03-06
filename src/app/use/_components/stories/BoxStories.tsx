import { useState } from "react";
import { CreateElementType, Item } from "../Canvas";

type Props = {
  onAddItem: (args: CreateElementType) => any;
  onRemoveItem: (args: number) => void;
};

const BoxStories = ({ onAddItem, onRemoveItem }: Props) => {
  const [boxColor, setBoxColor] = useState("bg-transparent");
  const [bordeSides, setBordeSides] = useState({
    top: true,
    right: true,
    bottom: true,
    left: true,
  });

  const sides = `${bordeSides.bottom ? "border-b-4" : ""} ${bordeSides.left ? "border-l-4" : ""}
  ${bordeSides.right ? "border-r-4" : ""} ${bordeSides.top ? "border-t-4" : ""}`;

  const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Delete") {
      onRemoveItem(index);
    }
  };

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof typeof bordeSides;
    setBordeSides((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const createElement = (el: Item) => {
    const i = el.i;
    return (
      <div key={i} data-grid={el} className="relative border-0">
        {
          <button
            onKeyDown={handleKeyDown(i)}
            className={`btn no-animation border-0 ${sides} focus:border-dashed focus:border-2 border-gray-300 w-full h-full ${boxColor} ${
              boxColor === "bg-transparent" ? "hover:bg-transparent" : `hover:${boxColor}`
            }  cursor-auto shadow-none`}
          ></button>
        }
      </div>
    );
  };

  return (
    <>
      <div className="flex-1 w-[90%] preview rounded-2xl flex justify-center items-center">
        <div
          className={`btn no-animation border-0 ${sides} border-gray-300 w-1/2 h-1/2 ${boxColor} hover:${boxColor} cursor-auto shadow-none`}
        ></div>
      </div>
      <div className="flex-1 flex flex-col w-full space-y-2 ml-5">
        <div>
          <div className="label">
            <span className="label-text font-bold">Background Color</span>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={boxColor}
            onChange={({ target }) => setBoxColor(target.value)}
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
        <div>
          <div className="label">
            <span className="label-text font-bold">Individual sides Border</span>
          </div>
          <div className="form-control flex flex-col">
            <div className="flex items-center space-x-2">
              <label className="label cursor-pointer flex justify-start space-x-2">
                <span className="label-text">Top</span>
                <input
                  type="checkbox"
                  name="top"
                  checked={bordeSides.top}
                  className="checkbox"
                  onChange={handleCheckBox}
                />
              </label>
              <label className="label cursor-pointer flex justify-start space-x-2">
                <span className="label-text">Right</span>
                <input
                  type="checkbox"
                  name="right"
                  className="checkbox"
                  checked={bordeSides.right}
                  onChange={handleCheckBox}
                />
              </label>
              <label className="label cursor-pointer flex justify-start space-x-2">
                <span className="label-text">Bottom</span>
                <input
                  type="checkbox"
                  name="bottom"
                  checked={bordeSides.bottom}
                  className="checkbox"
                  onChange={handleCheckBox}
                />
              </label>
              <label className="label cursor-pointer flex justify-start space-x-2">
                <span className="label-text">Left</span>
                <input
                  type="checkbox"
                  name="left"
                  checked={bordeSides.left}
                  className="checkbox"
                  onChange={handleCheckBox}
                />
              </label>
            </div>
          </div>
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

export default BoxStories;
