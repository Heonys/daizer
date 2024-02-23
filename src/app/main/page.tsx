"use client";
import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";

const ParallaxPage = () => {
  const [rotate, setRotate] = useState(true);
  const parallaxLayer = useRef<IParallaxLayer>(null);
  const parallax = useRef<IParallax>(null);

  const scrollListener = () => {
    const handleWheelEvent = () => {
      if (parallax.current?.current! > 1000) {
        setRotate(false);
      } else {
        setRotate(true);
      }
    };
    window.addEventListener("wheel", handleWheelEvent);
    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  };

  useEffect(scrollListener, []);

  const reactImports = `
    import React, { useState } from 'react';                       

    function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
    );
    }
  `;
  return (
    <div>
      <Parallax pages={10} ref={parallax}>
        <ParallaxLayer
          ref={parallaxLayer}
          sticky={{ start: 0, end: 4 }}
          className="flex items-center justify-end"
        >
          <div
            className={`mockup-code text-primary-content translate-x-10 transition-all duration-700 ${
              rotate ? "-rotate-x-[20deg] -rotate-z-12" : ""
            }`}
          >
            <pre>
              <code>{reactImports}</code>
            </pre>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;
