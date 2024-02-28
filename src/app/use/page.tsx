import dynamic from "next/dynamic";
import React from "react";

const Canvas = dynamic(() => import("./_components/Canvas"), { ssr: false });

const UsePage = () => {
  return <Canvas />;
};

export default UsePage;
