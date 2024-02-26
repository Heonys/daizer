"use client";
import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import MockupNavbar from "./_components/MockupNavbar";
import MockupForm from "./_components/MockupForm";
import MockupButton from "./_components/MockupButton";
import MockupImage from "./_components/MockupImage";
import Favorite from "./_components/Favorite";
import { IoMdArrowRoundDown } from "react-icons/io";

const ParallaxPage = () => {
  const [rotate, setRotate] = useState(true);
  const parallaxLayer1 = useRef<IParallaxLayer>(null);
  const parallaxLayer2 = useRef<IParallaxLayer>(null);
  const parallax = useRef<IParallax>(null);
  const scrollDownRef = useRef<IParallaxLayer>(null);

  const [ScrollDownSticky, setScrollDownSticky] = useState(true);

  const [scaled, setScaled] = useState(true);

  function scrollListener() {
    const container = parallax.current?.container.current as HTMLDivElement;

    container.onscroll = () => {
      if (scrollDownRef.current?.isSticky === false) setScrollDownSticky(false);
      else setScrollDownSticky(true);

      if (parallaxLayer1.current?.isSticky === true) setRotate(false);
      else setRotate(true);

      if (parallaxLayer2.current?.isSticky === true) setScaled(false);
      else setScaled(true);

      // if (parallaxLayer3.current?.isSticky === true) setScaled(false);
      // else setScaled(true);
    };
    return () => {
      container.onscroll = null;
    };
  }

  useEffect(scrollListener, []);

  return (
    <div>
      <Parallax
        pages={13}
        ref={parallax}
        config={{ frequency: 1 }}
        className="bg-white text-[#2D3748]"
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
          sticky={{ start: 0, end: 9.5 }}
          className={`flex items-end justify-center p-10 transition-all duration-500 ${
            ScrollDownSticky ? "" : "hidden"
          }`}
          ref={scrollDownRef}
        >
          <div className="animate-bounce w-36 flex flex-col items-center space-y-1">
            <p className="font-extrabold">Scroll Down</p>
            <IoMdArrowRoundDown size={30} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 5.5, end: 8 }}
          className="flex items-center justify-end z-0"
        >
          <div className="hero min-h-screen z-0">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <div className="w-full p-10">
                  <h1 className="text-4xl font-bold ">Provident cupiditate voluptatem et in</h1>
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
          <div className="mockup-code p-3 w-[600px] h-[420px]">
            <pre>
              <code>
                <div>
                  <span className="text-[#C678DD]">{`import`}</span>
                  <span className="text-red-400">{` React, { useState } `}</span>
                  <span className="text-[#C678DD]">{`from`}</span>
                  <span className="text-[#98C379]">{" react"}</span>

                  <span className="text-[#C678DD]">{`
import`}</span>
                  <span className="text-red-400">{` { useForm, SubmitHandler } `}</span>
                  <span className="text-[#C678DD]">{`from`}</span>
                  <span className="text-[#98C379]">{" react-hook-forms"}</span>

                  <div>
                    <span className="text-[#C678DD]">{`import`}</span>
                    <span className="text-red-400">{` useUserQuery `}</span>
                    <span className="text-[#C678DD]">{`from`}</span>
                    <span className="text-[#98C379]">{" @/hooks/useUserQuery"}</span>

                    <span className="text-[#C678DD]">{`

const`}</span>
                    <span className="text-blue-400">{` OptimisticUpdatePage `}</span>
                    <span className="text-yellow-400">{`= () => { `}</span>
                  </div>
                </div>
                <div className="animate-typing overflow-hidden text-base-100 border-r-4 border-r-white pr-5">
                  <span className="text-[#C678DD]">{`  const`}</span>
                  <span className="text-orange-400">{` { getUserQuery, postUserMutation }`}</span>
                  <span className="text-blue-400">{` = useUserQuery({ staleTime: 1000 * 10 });`}</span>
                </div>
                <div>
                  <span className="text-[#C678DD]">{`
  const`}</span>
                  <span className="text-blue-400">{` handleClick`}</span>

                  <span className="text-yellow-400">{` = () => { `}</span>

                  <span className="text-red-400">{`
    postUserMutation`}</span>
                  <span className="text-blue-400">{`.mutate`}</span>
                  <span className="text-orange-400">{`({ id: Date.now(), message: "item" });
`}</span>
                  <span className="text-yellow-400">{`  };`}</span>
                </div>
              </code>
            </pre>
          </div>
        </ParallaxLayer>

        <ParallaxLayer ref={parallaxLayer1} sticky={{ start: 5.5, end: 10 }}>
          <div></div>
        </ParallaxLayer>

        <ParallaxLayer ref={parallaxLayer2} sticky={{ start: 9.5, end: 15 }}>
          <div></div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 9, end: 13 }} className="flex items-center justify-center">
          <div
            className={`hero min-h-screen transition-all duration-1000 ${
              scaled ? "scale-150" : "scale-100"
            }`}
          >
            <div
              className={`mockup-window border bg-base-300 absolute w-[90%] h-[90%] z-10 transition-all duration-1000 ${
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

        <ParallaxLayer
          sticky={{ start: 12, end: 13 }}
          className="flex bg-base-200 items-end justify-center"
        >
          <div className="hero min-h-screen bg-base-200 relative">
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
            <aside className="absolute left-1/2 translate-x-[-50%] bottom-5">
              <p>Copyright © 2024 - All right reserved by Jiheon Kim</p>
            </aside>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;
