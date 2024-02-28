"use client";
import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./style.css";
import ButtonStories from "./stories/ButtonStories";
import InputStories from "../_components/stories/InputStories";

export type Item = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type CreateElementType = (el: Item) => React.ReactNode;

const ReactGridLayout = WidthProvider(RGL);

const Canvas = () => {
  const [newCounter, setNewCounter] = useState(0);
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const [selected, setSelected] = useState("button");

  const onAddItem = (func: CreateElementType) => {
    const defaultOption = {
      i: "n" + newCounter,
      x: items.length * 5,
      y: Infinity,
      w: 2,
      h: 2,
    };

    setItems([...items, func(defaultOption)]);
    setNewCounter(newCounter + 1);
  };

  const generateStories = () => {
    switch (selected) {
      case "button": {
        return <ButtonStories onAddItem={onAddItem} />;
      }
      case "input": {
        return <InputStories onAddItem={onAddItem} />;
      }
    }
  };

  return (
    <div className="flex items-cente">
      <div className="relative top-12  scale-[0.91] shadow-2xl flex space-x-2 w-full">
        <div className="join join-vertical justify-between space-y-1 ml-2 mt-2">
          <div className="flex flex-col space-y-1">
            <button className="btn join-item shadow-md scale-105 bg-orange-200 hover:bg-orange-200 hover:scale-110">
              Canvas1
            </button>
            <button className="btn btn-disabled join-item shadow-md">Canvas2</button>
            <button className="btn btn-disabled join-item shadow-md">Canvas3</button>
          </div>
        </div>
        <ReactGridLayout
          className=" bg-gray-50 w-[80vw] min-h-[95vh] preview overflow-hidden"
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
          {items}
        </ReactGridLayout>

        <div className="w-[30vw] border border-zinc-300 flex items-center justify-around flex-col space-y-4 p-3">
          <div className="w-full max-w-xs">
            <select
              className="select select-bordered  w-full max-w-xs "
              defaultValue="button"
              onChange={({ target }) => setSelected(target.value)}
            >
              {/* <option value="box">Box</option>
              <option value="sircle">Sircle</option>
              <option value="image">Image</option> */}
              <option value="button">Button</option>
              <option value="input">Input Box</option>
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
