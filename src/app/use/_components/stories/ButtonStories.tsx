import { useState } from "react";
import { CreateElementType, Item } from "../Canvas";

type Props = {
  onAddItem: (args: CreateElementType) => any;
};

const ButtonStories = ({ onAddItem }: Props) => {
  const [buttonColor, setButtonColor] = useState("btn-outline");
  const [buttonSize, setButtonSize] = useState("btn");
  const [buttonText, setButtonText] = useState("Button");

  const createElement = (el: Item) => {
    const i = el.i;
    return (
      <div key={i} data-grid={el} className="border">
        {
          <span className="text">
            <button className={`btn w-full h-full ${buttonColor} ${buttonSize}`}>
              {buttonText}
            </button>
          </span>
        }
      </div>
    );
  };

  return (
    <>
      <div className="flex-1 w-[90%] preview rounded-2xl flex justify-center items-center">
        <button className={`btn ${buttonColor} ${buttonSize}`}>{buttonText}</button>
      </div>
      <div className="flex-1 flex flex-col w-full space-y-4 ml-5">
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={buttonColor}
            onChange={({ target }) => setButtonColor(target.value)}
            defaultValue="outline"
          >
            <option value="btn-outline">Outline</option>
            <option value="btn-primary">Primary</option>
            <option value="btn-secondary">Secondary</option>
            <option value="btn-accent">Accent</option>
            <option value="btn-info">Info</option>
            <option value="btn-warning">Warning</option>
            <option value="btn-error">Error</option>
            <option value="btn-ghost">Ghost</option>
            <option value="btn-disabled">Disabled</option>
          </select>
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={buttonSize}
            onChange={({ target }) => setButtonSize(target.value)}
            defaultValue="md"
          >
            <option value="btn-lg">Large</option>
            <option value="btn">Normal</option>
            <option value="btn-sm">Small</option>
            <option value="btn-xs">Tiny</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Text"
            value={buttonText}
            onChange={({ target }) => setButtonText(target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="self-start">
          <button className="btn btn-neutral" onClick={() => onAddItem(createElement)}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonStories;
