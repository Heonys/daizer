"use client";
import { FunctionComponent, useState, useEffect } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./style.css";

interface Props {
  className?: string;
  rowHeight?: number;
  onLayoutChange?: (layout: any, layouts: any) => void;
  cols?: any;
  breakpoints?: any;
  containerPadding?: number[];
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DropDrag: FunctionComponent<Props> = (props) => {
  const [layouts, setLayouts] = useState<{ [index: string]: any[] }>({
    lg: _.map(_.range(0, 10), function (item, i) {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (_.random(0, 5) * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05,
      };
    }),
  });
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("lg");
  const [mounted, setMounted] = useState(false);
  const [toolbox, setToolbox] = useState<{ [index: string]: any[] }>({
    lg: [],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const onBreakpointChange = (breakpoint: any) => {
    setCurrentBreakpoint(breakpoint);
    setToolbox({
      ...toolbox,
      [breakpoint]: toolbox[breakpoint] || toolbox[currentBreakpoint] || [],
    });
  };

  const onLayoutChange = (layout: any, layouts: any) => {
    setLayouts({ ...layouts });
  };

  const onDrop = (layout: any, layoutItem: any, _ev: any) => {
    alert(`Element parameters:\n${JSON.stringify(layoutItem, ["x", "y", "w", "h"], 2)}`);
  };

  const generateDOM = () => {
    return _.map(layouts.lg, function (l, i) {
      return (
        <div key={i} style={{ background: "#ccc" }} className={l.static ? "static" : ""}>
          {l.static ? (
            <span className="text" title="This item is static and cannot be removed or resized.">
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <div className="mb-4">
        <ResponsiveReactGridLayout
          {...props}
          style={{ background: "#f0f0f0" }}
          layouts={layouts}
          // margin={[5, 5]}
          width={500}
          measureBeforeMount={false}
          useCSSTransforms={mounted}
          compactType="horizontal"
          preventCollision={false}
          allowOverlap={true}
          onLayoutChange={onLayoutChange}
          onBreakpointChange={onBreakpointChange}
          onDrop={onDrop}
          containerPadding={[0, 0]}
          isDroppable
        >
          {generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    </>
  );
};

export default DropDrag;
