import { useState } from "react";
import { CreateElementType, Item } from "../Canvas";

type Props = {
  onAddItem: (args: CreateElementType) => any;
  onRemoveItem: (args: number) => void;
};

const InputStories = ({ onAddItem, onRemoveItem }: Props) => {
  const [inputPaceholder, setInputPaceholder] = useState("Type here");
  const [inputLabel, setInputLabel] = useState("");
  const [inputSize, setInputSize] = useState("input");

  const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Delete") {
      onRemoveItem(index);
    }
  };

  const createElement = (el: Item) => {
    const i = el.i;
    return (
      <div
        key={i}
        data-grid={el}
        className="border focus:border-dashed focus:border-2"
        onKeyDown={handleKeyDown(i)}
      >
        {
          <span className="text">
            {inputLabel.length !== 0 ? (
              <label
                className={`w-full input input-bordered  flex items-center gap-2 ${inputSize}`}
              >
                {inputLabel}
                <input type="text" className="grow" placeholder={inputPaceholder} />
              </label>
            ) : (
              <input
                type="text"
                placeholder={inputPaceholder}
                className={`input input-bordered w-full ${inputSize}`}
              />
            )}
          </span>
        }
      </div>
    );
  };

  return (
    <>
      <div className="flex-1 w-[90%] preview rounded-2xl flex justify-center items-center overflow-x-hidden">
        {inputLabel.length !== 0 ? (
          <label
            className={`translate-x-3 input input-bordered flex items-center gap-2 ${inputSize}`}
          >
            {inputLabel}
            <input type="text" className="grow" placeholder={inputPaceholder} />
          </label>
        ) : (
          <input
            type="text"
            placeholder={inputPaceholder}
            className={`input input-bordered w-full max-w-xs ${inputSize}`}
          />
        )}
      </div>
      <div className="flex-1 flex flex-col w-full space-y-1 ml-5">
        <div>
          <div className="label">
            <span className="label-text font-bold">Background Color</span>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={inputSize}
            onChange={({ target }) => setInputSize(target.value)}
            defaultValue="md"
          >
            <option value="input-lg">Large</option>
            <option value="input">Normal</option>
            <option value="input-sm">Small</option>
            <option value="input-xs">Tiny</option>
          </select>
        </div>
        <div>
          <div className="label">
            <span className="label-text font-bold">Label</span>
          </div>
          <input
            type="text"
            placeholder="Label"
            value={inputLabel}
            onChange={({ target }) => setInputLabel(target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <div className="label">
            <span className="label-text font-bold">Placeholder</span>
          </div>
          <input
            type="text"
            placeholder="Placeholder"
            value={inputPaceholder}
            onChange={({ target }) => setInputPaceholder(target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="self-start p-2">
          <button className="btn btn-neutral" onClick={() => onAddItem(createElement)}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default InputStories;
