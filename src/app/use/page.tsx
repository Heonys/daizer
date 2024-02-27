import dynamic from "next/dynamic";
import React from "react";

const Canvas = dynamic(() => import("./_components/Canvas"), { ssr: false });

const UsePage = () => {
  return (
    <div className="mt-20">
      <Canvas
        className="layout"
        rowHeight={10}
        breakpoints={{ lg: 500, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      />
    </div>
  );
};

export default UsePage;
