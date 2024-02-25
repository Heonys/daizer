"use client";
import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import MockupNavbar from "./_components/MockupNavbar";
import MockupForm from "./_components/MockupForm";
import MockupButton from "./_components/MockupButton";
import MockupImage from "./_components/MockupImage";
import Favorite from "./_components/Favorite";

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

const ParallaxPage = () => {
  const [rotate, setRotate] = useState(true);
  const parallaxLayer = useRef<IParallaxLayer>(null);
  const parallax = useRef<IParallax>(null);

  const [scaled, setScaled] = useState(true);

  function scrollListener() {
    const container = parallax.current?.container.current as HTMLDivElement;

    container.onscroll = () => {
      if (parallaxLayer.current?.isSticky === true) setRotate(false);
      else setRotate(true);
    };
    return () => {
      container.onscroll = null;
    };
  }

  useEffect(scrollListener, []);

  return (
    <div>
      <Parallax
        pages={12}
        ref={parallax}
        config={{ frequency: 1 }}
        className="bg-white text-[#2D3748]"
        // style={{
        //   background:
        //     "linear-gradient(180deg, hsla(130, 130%, 120%, 1) 0%, hsla(30, 80%, 90%, 1) 100%)",
        // }}
      >
        <ParallaxLayer sticky={{ start: 0, end: 4 }} className="flex items-center justify-start">
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 5.5, end: 8 }}
          className="flex items-center justify-end z-0"
        >
          <div className="hero min-h-screen z-0">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <div className="w-full p-10 bg-red-300">
                  <h1 className="animate-typing text-4xl font-bold overflow-hidden whitespace-nowrap text-base-100  border-r-4 border-r-white pr-5">
                    Provident cupiditate voluptatem et in
                  </h1>
                </div>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 8 }} className="flex items-center justify-end">
          <div
            className={`mockup-browser border bg-base-300 w-[700px] shadow-2xl h-[500px] translate-x-20 transition-all duration-700 ${
              rotate ? "-rotate-x-[20deg] -rotate-z-12" : ""
            }`}
          >
            <div className="mockup-browser-toolbar">
              <div className="input">https://localhost:3000</div>
            </div>
            <div className="flex justify-center h-full px-4 py-16 bg-base-200"></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2, end: 4.2 }} className="flex items-center justify-end">
          <MockupNavbar />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2.5, end: 4.4 }} className="flex items-center justify-end">
          <MockupForm />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 4.6 }} className="flex items-center justify-end">
          <MockupImage />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3.5, end: 4.8 }} className="flex items-center justify-end">
          <MockupButton />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 7, end: 8 }} className="flex items-center justify-end">
          <div className="mockup-code p-3">
            <pre>
              <code>{reactImports}</code>
            </pre>
          </div>
        </ParallaxLayer>

        <ParallaxLayer ref={parallaxLayer} sticky={{ start: 5.5, end: 10 }}>
          <div></div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 9, end: 12 }}
          className="flex items-center justify-center"
          onClick={() => setScaled(!scaled)}
        >
          <div
            className={`hero min-h-screen transition-all duration-700 ${
              scaled ? "scale-150" : "scale-100"
            }`}
          >
            <div
              className={`mockup-window border bg-base-300 absolute w-[90%] h-[90%] z-10 transition-all duration-700 ${
                scaled ? "opacity-0" : "opacity-100"
              }`}
            >
              <Favorite />
            </div>

            <div className="max-w-md z-20 absolute">
              <h1 className="text-4xl font-bold">Hello there</h1>
              <p className="py-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer speed={-1} factor={5} style={{ top: 100, left: 100 }}>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>npm i daisyui</code>
            </pre>
          </div>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
};

export default ParallaxPage;
