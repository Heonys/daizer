"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "@react-spring/web";
import React from "react";
import "./styles.css";

export default function App() {
  const [{ offsetY }] = useSpring(() => ({ offsetY: 0 }));

  return (
    <div className="scroll ">
      <div className="background" />
      <div
        className="circle"
        style={{
          position: "fixed",
          top: "20%",
          left: "60%",
          transform: "scale(0.6)",
        }}
      >
        <animated.div>{offsetY}</animated.div>
      </div>
    </div>
  );
}

{
  /* <Parallax pages={4} config={{ frequency: 1 }} className="scroll">
<div className="background" />
<ParallaxLayer offset={0} factor={1} speed={-1} style={{ top: 0, left: 0 }}>
  <div className="circle" style={{ position: "absolute", top: "60%", left: "30%" }} />
</ParallaxLayer>
<ParallaxLayer offset={2} factor={1.5} speed={-1} style={{ top: 0, left: 0 }}>
  <div
    className="circle"
    style={{
      position: "fixed",
      top: "20%",
      left: "60%",
      transform: "scale(0.6)",
    }}
  >
    <animated.div>{offsetY}</animated.div>
  </div>
</ParallaxLayer>
</Parallax> */
}
