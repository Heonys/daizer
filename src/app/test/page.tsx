"use client";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./style.css";

const ReactGridLayout = WidthProvider(RGL);

const GridPropertyLayout = ({
  items = 10,
  rowHeight = 25,
  onLayoutChange = () => {},
  cols = 20,
}) => {
  const generateLayout = () => {
    return _.map(new Array(items), function (item, i) {
      const w = Math.ceil(Math.random() * 4);
      const y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: w,
        h: y,
        i: i.toString(),
      };
    });
  };

  const [layout, setLayout] = useState(generateLayout());

  const generateDOM = () => {
    return _.map(_.range(items), function (i) {
      return (
        <div className="border border-blue-300" key={i} data-grid={layout[i]}>
          <span className="text ">{i}</span>
        </div>
      );
    });
  };

  const onResize = (layout, oldLayoutItem, layoutItem, placeholder) => {
    if (layoutItem.h < 3 && layoutItem.w > 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }

    if (layoutItem.h >= 3 && layoutItem.w < 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }
  };

  useEffect(() => {
    setLayout(generateLayout());
  }, [items]);

  return (
    <div className="mt-20 bg-red-100">
      <ReactGridLayout
        onLayoutChange={(layout) => {
          onLayoutChange();
          setLayout(layout);
        }}
        onResize={onResize}
        isDraggable={true}
        isResizable={true}
        compactType="vertical"
        // measureBeforeMount={false}
        rowHeight={rowHeight}
        cols={cols}
        allowOverlap
        resizeHandles={["se"]}
      >
        {generateDOM()}
      </ReactGridLayout>
    </div>
  );
};

export default GridPropertyLayout;
