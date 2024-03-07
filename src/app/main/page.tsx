"use client";
import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import MockupNavbar from "./_components/MockupNavbar";
import MockupFriendsList from "./_components/MockupFriendsList";
import MockupChatBoard from "./_components/MockupChatBoard";
import Favorite from "./_components/Favorite";
import { IoMdArrowRoundDown } from "react-icons/io";
import { FaArrowRightLong, FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import MockupChat from "./_components/MockupChat";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ParallaxPage = () => {
  const router = useRouter();
  const [rotate, setRotate] = useState(true);
  const parallaxLayer1 = useRef<IParallaxLayer>(null!);
  const parallaxLayer2 = useRef<IParallaxLayer>(null!);
  const parallax = useRef<IParallax>(null!);
  const scrollDownRef = useRef<IParallaxLayer>(null!);
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
    };
    return () => {
      container.onscroll = null;
    };
  }

  useEffect(scrollListener, []);

  return (
    <Parallax
      pages={16}
      ref={parallax}
      className="bg-white text-[#2D3748] max-h-[98vh] my-auto border-b-4 border-base-200"
    >
      <ParallaxLayer
        sticky={{ start: 0, end: 5 }}
        className="flex items-center justify-start max-h-[96vh]"
      >
        <div className="hero min-h-screen flex justify-start items-center ml-10">
          <div className="hero-content flex lg:flex-row relative w-full justify-start">
            <Image
              src="/images/Daisy.jpg"
              alt="daisy"
              className="max-w-sm rounded-lg shadow-2xl z-40 -rotate-z-[35deg] -translate-x-[8rem] "
            />
            <div className="p-2 absolute left-[20%] top-1/2 w-full z-50">
              <h1 className="text-[2.5vw] leading-normal font-bold">Layout Editor </h1>
              <h1 className="text-[2.5vw] leading-normal font-bold relative">
                {`for `}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent blur-xl absolute">
                  DaisyUI
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent ">
                  DaisyUI
                </span>
              </h1>
              <h1 className="text-[2.5vw] leading-normal font-bold">Make prototyping easier</h1>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 0, end: 10.5 }}
        className={`flex items-end justify-center p-5 max-h-[96vh] -z-40 transition-all duration-500 ${
          ScrollDownSticky ? "" : "hidden"
        }`}
        ref={scrollDownRef}
      >
        <div className="animate-bounce w-96 flex flex-col items-center space-y-1">
          <p className="font-extrabold">Scroll Down</p>
          <IoMdArrowRoundDown size={30} />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 7, end: 9 }}
        className="flex items-center justify-end z-0 max-h-[96vh]"
      >
        <div className="hero min-h-screen z-0">
          <div className="hero-content flex flex-col lg:flex-row-reverse w-full">
            <div className="self-start w-full">
              <div className="w-full">
                <h1 className="text-[2.5vw] text-[#394e6b] font-bold leading-normal">
                  Easily with Grid-based
                </h1>
                <h1 className="text-[2.5vw] text-[#80d0d0] font-mono leading-normal">
                  without writing code
                </h1>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 1, end: 9 }}
        className="flex items-center justify-end"
        style={{ maxHeight: "97.5vh" }}
      >
        <div
          className={`mockup-browser border bg-base-300 w-[52vw] shadow-2xl h-[75vh] translate-x-[5vw] transition-all duration-700 ${
            rotate ? "-rotate-x-[20deg] -rotate-z-12" : ""
          }`}
        >
          <div className="mockup-browser-toolbar">
            <div className="input">https://daizer.vercel.app/main</div>
          </div>
          <div className="flex justify-center h-full px-4 py-16 bg-base-200"></div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 2, end: 5.2 }}
        className="flex items-center justify-end "
        style={{ maxHeight: "97.5vh" }}
      >
        <MockupNavbar />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 2.5, end: 5.4 }}
        className="flex items-center justify-end "
        style={{ maxHeight: "97.5vh" }}
      >
        <MockupFriendsList />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 3, end: 5.6 }}
        className="flex items-center justify-end"
        style={{ maxHeight: "97.5vh" }}
      >
        <MockupChatBoard />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 4, end: 4.5 }}
        className="flex items-center justify-end z-50 absolute "
        style={{ maxHeight: "97.5vh" }}
      >
        <MockupChat
          image="/images/woman1.jpg"
          name="Olivia"
          message="Hi! The website design looks really nice."
          style="-translate-y-[16vh]"
        />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 4.1, end: 4.6 }}
        className="flex items-center justify-end z-50 absolute "
        style={{ maxHeight: "97.5vh" }}
      >
        <div className="-translate-x-[16.5vw]  -rotate-x-[20deg] -rotate-z-12 z-50 -translate-y-[6vh]">
          <div className="chat chat-end ">
            <div className="chat-bubble chat-bubble-warning w-[22vw]">
              Thanks! I made it with Daizer. Great for making quick prototypes.
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 4.2, end: 4.7 }}
        className="flex items-center justify-end z-50 absolute "
        style={{ maxHeight: "97.5vh" }}
      >
        <MockupChat
          image="/images/woman1.jpg"
          name="Olivia"
          message="Wow, thanks! I'll try it right away."
          style="translate-y-[7vh]"
        />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 8, end: 9 }}
        className="flex items-center justify-end z-50 max-h-[96vh]"
      >
        <div className="mockup-code p-3 w-[44vw] h-[60vh] -translate-x-[1vw] overflow-hidden">
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
                <span className="text-orange-400">{` { register, handleSubmit, control, getValues }`}</span>
                <span className="text-blue-400">{` = useForm`}</span>
                <span className="text-yellow-200">{`<FormType>()`}</span>
              </div>

              <div>
                <span className="text-[#C678DD]">{`  const`}</span>
                <span className="text-orange-400">{` { postMutation }`}</span>
                <span className="text-blue-400">{` = useUserQuery()`}</span>
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

              <div>
                <span className="text-[#C678DD]">{`  const`}</span>
                <span className="text-orange-400">{` onSubmit:`}</span>
                <span className="text-yellow-200">{` SubmitHandler<FormStateType>`}</span>
                <span className="text-yellow-400">{` = (data) => {
   `}</span>
                <span className="text-[#C678DD]">{`  const`}</span>
                <span className="text-orange-400">{` request:`}</span>
                <span className="text-yellow-200">{` Reqest`}</span>
                <span className="text-yellow-400">{` = {}`}</span>

                <span className="text-yellow-400">{`  
  };`}</span>
              </div>
            </code>
          </pre>
        </div>
      </ParallaxLayer>

      <ParallaxLayer ref={parallaxLayer1} sticky={{ start: 6.2, end: 11 }} className="max-h-[96vh]">
        <div></div>
      </ParallaxLayer>

      <ParallaxLayer ref={parallaxLayer2} sticky={{ start: 11, end: 15 }} className="max-h-[96vh]">
        <div></div>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 10, end: 16 }}
        className="flex items-center justify-center max-h-[96vh]"
      >
        <div
          className={`hero min-h-screen transition-all duration-1000  ${
            scaled ? "scale-150" : "scale-100"
          }`}
        >
          <div
            className={`mockup-window border bg-base-300 absolute translate-y-[4vh] w-[90%] h-[87%] z-10 transition-all duration-1000 ${
              scaled ? "opacity-0" : "opacity-100"
            }`}
          >
            <Favorite />
          </div>

          <div className="max-w-md z-20 absolute -translate-x-10 p-2 rounded-xl mt-10">
            <h1 className="text-4xl  text-[#394e6b] font-bold">{`Let's create`}</h1>
            <h1 className="text-4xl  text-[#394e6b] font-bold">music streaming service</h1>
            <p className="py-6">
              <span>{`layout for`}</span>
              <span className="font-bold">{` DaisyUI `}</span>
              <span>components with</span>
              <span className="font-bold">{` Daizer`}</span>
            </p>
            <button className="btn bg-red-500 text-white">
              <FaRegCirclePlay size={20} />
              <div>Streaming Now</div>
            </button>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 14.5, end: 16 }}
        className="flex bg-white items-end justify-center max-h-[96vh]"
      >
        <div className="hero min-h-screen relative">
          <div className="hero-content text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-[2.5vw] leading-normal font-bold w-full  ">{`Finally, Let's really`}</h1>
              <h1 className="text-[2.5vw] font-bold w-full">{`get started now`}</h1>

              <p className="py-6 max-w-md m-auto">
                daisyUI adds component class names to Tailwind CSS so you can make beautiful
                websites faster than ever.
              </p>
              <div className="flex space-x-4 items-center justify-center">
                <button
                  className="text-[1vw] group btn btn-neutral"
                  onClick={() => router.push("/use")}
                >
                  Get Started
                  <FaArrowRightLong className="duration-100 group-hover:translate-x-1" />
                </button>
                <a className="text-[1vw] btn group" href="https://github.com/Heonys/daizer">
                  <FaGithub
                    color="black"
                    size={20}
                    className="duration-100 group-hover:scale-110"
                  />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <aside className="absolute left-1/2 translate-x-[-50%] bottom-5">
            <p>Copyright © 2024 - All right reserved by Jiheon Kim</p>
          </aside>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxPage;
