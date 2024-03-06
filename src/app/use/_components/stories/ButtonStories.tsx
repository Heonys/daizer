import { useState } from "react";
import { CreateElementType, Item } from "../Canvas";

type Props = {
  onAddItem: (args: CreateElementType) => any;
  onRemoveItem: (args: number) => void;
};

const ButtonStories = ({ onAddItem, onRemoveItem }: Props) => {
  const [buttonColor, setButtonColor] = useState("btn-outline");
  const [buttonSize, setButtonSize] = useState("btn");
  const [buttonText, setButtonText] = useState("Button");

  const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Delete") {
      onRemoveItem(index);
    }
  };

  const createElement = (el: Item) => {
    const i = el.i;
    return (
      <div key={i} data-grid={el} className="border relative">
        {
          <span className="text">
            <button
              className={`btn w-full h-full ${buttonColor} ${buttonSize} focus:border-dashed focus:border-2`}
              onKeyDown={handleKeyDown(i)}
            >
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
      <div className="flex-1 flex flex-col w-full space-y-1 ml-5">
        <div>
          <div className="label">
            <span className="label-text font-bold">Background Color</span>
          </div>
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
          <div className="label">
            <span className="label-text font-bold">Size</span>
          </div>
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
          <div className="label">
            <span className="label-text font-bold">Text</span>
          </div>
          <input
            type="text"
            placeholder="Text"
            value={buttonText}
            onChange={({ target }) => setButtonText(target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="self-start p-2">
          <button className="btn btn-neutral w-20 " onClick={() => onAddItem(createElement)}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonStories;
