"use client";
import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./style.css";
import { FcInfo } from "react-icons/fc";
import ButtonStories from "./stories/ButtonStories";
import InputStories from "../_components/stories/InputStories";
import BoxStories from "./stories/BoxStories";
import SircleStories from "./stories/SircleStories";
import ImageStories from "./stories/ImageStories";

export type Item = {
  i: number;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type CreateElementType = (el: Item) => React.ReactNode;

const ReactGridLayout = WidthProvider(RGL);

const Canvas = () => {
  const [newCounter, setNewCounter] = useState(1);
  const [items, setItems] = useState<[number, React.ReactNode][]>([[0, null]]);
  const [selected, setSelected] = useState("button");

  const onAddItem = (func: CreateElementType) => {
    const defaultOption = {
      i: newCounter,
      x: items.length * 2,
      y: Infinity,
      w: 1.5,
      h: 2.5,
    };

    setItems([...items, [newCounter, func(defaultOption)]]);
    setNewCounter(newCounter + 1);
  };

  const onRemoveItem = (index: number) => {
    setItems((prev) => {
      return prev.filter((v, i) => v[0] !== index);
    });
  };

  const generateStories = () => {
    switch (selected) {
      case "button": {
        return <ButtonStories onAddItem={onAddItem} onRemoveItem={onRemoveItem} />;
      }
      case "input": {
        return <InputStories onAddItem={onAddItem} onRemoveItem={onRemoveItem} />;
      }
      case "box": {
        return <BoxStories onAddItem={onAddItem} onRemoveItem={onRemoveItem} />;
      }
      case "sircle": {
        return <SircleStories onAddItem={onAddItem} onRemoveItem={onRemoveItem} />;
      }
      case "image": {
        return <ImageStories onAddItem={onAddItem} onRemoveItem={onRemoveItem} />;
      }
    }
  };

  return (
    <div className="flex items-cente">
      <div className="relative top-12  scale-[0.91] shadow-2xl flex space-x-2 w-full">
        <div className="join join-vertical space-y-1 ml-2 mt-2 flex flex-col items-center">
          <div className="flex flex-col space-y-1">
            <button className="btn join-item shadow-md scale-105 bg-orange-200 hover:bg-orange-200 hover:scale-110">
              Canvas1
            </button>
            <button className="btn btn-disabled join-item shadow-md">Canvas2</button>
            <button className="btn btn-disabled join-item shadow-md">Canvas3</button>
          </div>

          <div
            className="tooltip tooltip-right p-1 self-end"
            data-tip={`If you want to delete, press the "Del" key`}
          >
            <button className="btn ">
              <FcInfo size={25} />
            </button>
          </div>
        </div>

        <ReactGridLayout
          className=" bg-gray-50 w-[80vw] min-h-[95vh] preview overflow-hidden shadow-none"
          compactType="vertical"
          isDraggable={true}
          isResizable={true}
          useCSSTransforms={true}
          rowHeight={20}
          cols={20}
          allowOverlap
          resizeHandles={["se"]}
          transformScale={0.91}
        >
          {items.map((v) => v[1])}
        </ReactGridLayout>

        <div className="w-[30vw] border border-zinc-300 flex items-center justify-around flex-col space-y-2 p-3">
          <div className="w-full max-w-xs">
            <select
              className="select select-bordered select-sm w-full max-w-xs "
              defaultValue="button"
              onChange={({ target }) => setSelected(target.value)}
            >
              <option value="box">Box</option>
              <option value="sircle">Sircle</option>
              <option value="button">Button</option>
              <option value="input">Input Box</option>
              <option value="image">Image</option>
            </select>
          </div>

          {/* dydamic import + 로딩 스피너  필요할까? */}
          {generateStories()}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
