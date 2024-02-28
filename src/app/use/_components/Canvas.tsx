"use client";
import React, { useState, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./style.css";

const ReactGridLayout = WidthProvider(RGL);

type Item = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

const Canvas = ({ onLayoutChange = () => {} }) => {
  const [newCounter, setNewCounter] = useState(0);
  const [items, setItems] = useState<Item[]>([]);

  const [buttonColor, setButtonColor] = useState("black");
  const [buttonSize, setButtonSize] = useState("md");

  const onAddItem = () => {
    setItems([
      ...items,
      {
        i: "n" + newCounter,
        x: items.length * 2,
        y: Infinity, // puts it at the bottom
        w: 3,
        h: 3,
      },
    ]);
    setNewCounter(newCounter + 1);
  };

  const createElement = (el: Item) => {
    const i = el.i;
    return (
      <div key={i} data-grid={el} className="border">
        {
          <span className="text">
            <button className="btn btn-outline w-full h-full">Buttton</button>
            {/* <span>{i}</span> */}
          </span>
        }
      </div>
    );
  };

  return (
    <div className="flex items-cente">
      <div className="relative top-12  scale-[0.91] shadow-2xl flex space-x-2 w-full">
        <div className="join join-vertical justify-between space-y-1 ml-2 mt-2">
          <div className="flex flex-col space-y-1">
            <button className="btn join-item shadow-md scale-105 bg-orange-200">Canvas1</button>
            <button className="btn btn-disabled join-item shadow-md">Canvas2</button>
            <button className="btn btn-disabled join-item shadow-md">Canvas3</button>
          </div>
        </div>
        <ReactGridLayout
          onLayoutChange={(layout) => {
            onLayoutChange();
          }}
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
          {items.map((el) => createElement(el))}
        </ReactGridLayout>

        <div className="w-[30vw] border border-zinc-300 flex items-center justify-around flex-col space-y-4 p-3">
          <div className="w-full max-w-xs">
            <select className="select select-bordered  w-full max-w-xs ">
              <option disabled selected>
                Categoty
              </option>
              <option>Box</option>
              <option>Sircle</option>
              <option>Button</option>
              <option>Check box</option>
              <option>Input Box</option>
            </select>
          </div>
          <div className="flex-1 w-[90%] preview  rounded-2xl flex justify-center items-center">
            <button className="btn btn-outline btn-md">Button</button>
          </div>

          <div className="flex-1 flex flex-col w-full space-y-4 ml-5">
            <div>
              <select className="select select-bordered w-full max-w-xs">
                <option selected>Black</option>
                <option>Red</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full max-w-xs">
                <option>Large</option>
                <option selected>Normal</option>
                <option>Small</option>
                <option>Tiny</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="self-start">
              <button className="btn btn-neutral" onClick={onAddItem}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
