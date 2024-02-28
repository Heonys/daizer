"use client";
import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./style.css";

const ReactGridLayout = WidthProvider(RGL);

const AddRemoveLayout = ({
  className = "layout",
  cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight = 20,
  onLayoutChange = () => {},
}) => {
  const [items, setItems] = useState<any>(
    [0, 1, 2, 3, 4].map((i, key, list) => ({
      i: i.toString(),
      x: i * 2,
      y: 0,
      w: 2,
      h: 2,
      add: i === list.length - 1,
    }))
  );

  const [newCounter, setNewCounter] = useState(0);
  const [layoutCols, setLayoutCols] = useState(cols);

  const onAddItem = () => {
    setItems([
      ...items,
      {
        i: "n" + newCounter,
        x: (items.length * 2) % (layoutCols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
      },
    ]);
    setNewCounter(newCounter + 1);
  };

  const onBreakpointChange = (breakpoint, cols) => {
    setLayoutCols(cols);
  };

  const onRemoveItem = (i) => {
    setItems(items.filter((item) => item.i !== i));
  };

  const createElement = (el) => {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el} className="border">
        {el.add ? (
          <span
            className="add text"
            onClick={onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <span className="text">
            <button className="btn btn-primary w-full h-full">Primary</button>
            {/* <span>{i}</span> */}
          </span>
        )}
        <span className="remove text-white" style={removeStyle} onClick={() => onRemoveItem(i)}>
          x
        </span>
      </div>
    );
  };

  return (
    <div className="mt-20">
      <button onClick={onAddItem}>Add Item</button>
      <ReactGridLayout
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        className={className}
        // cols={10}
        rowHeight={rowHeight}
      >
        {items.map((el) => createElement(el))}
      </ReactGridLayout>
    </div>
  );
};

export default AddRemoveLayout;
