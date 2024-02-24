"use client";
import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import MockupNavbar from "./_components/MockupNavbar";
import MockupForm from "./_components/MockupForm";
import MockupButton from "./_components/MockupButton";
import MockupImage from "./_components/MockupImage";

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
      <Parallax pages={12} ref={parallax}>
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
                <div className="w-max p-10">
                  <h1 className="animate-typing text-4xl font-bold overflow-hidden whitespace-nowrap  border-r-4 border-r-white pr-5">
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

        <ParallaxLayer sticky={{ start: 2, end: 4.5 }} className="flex items-center justify-end">
          <MockupNavbar />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2.5, end: 4.5 }} className="flex items-center justify-end">
          <MockupForm />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 4.5 }} className="flex items-center justify-end">
          <MockupButton />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3.5, end: 4.5 }} className="flex items-center justify-end">
          <MockupImage />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 7, end: 8 }} className="flex items-center justify-end">
          <div className="mockup-code p-3">
            <pre>
              <code>{reactImports}</code>
            </pre>
          </div>
        </ParallaxLayer>

        <ParallaxLayer ref={parallaxLayer} sticky={{ start: 5.5, end: 12 }}>
          <div></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 9, end: 12 }} className="flex items-center justify-center">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;
