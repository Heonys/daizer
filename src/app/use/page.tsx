"use client";
import dynamic from "next/dynamic";
import React from "react";
import { RecoilRoot } from "recoil";

const Canvas = dynamic(() => import("./_components/Canvas"), { ssr: false });

const UsePage = () => {
  return (
    <RecoilRoot>
      <Canvas />;
    </RecoilRoot>
  );
};

export default UsePage;
