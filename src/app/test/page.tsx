"use client";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useTransition, animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const reactImports1 = `
import { useEffect } from 'react';
import { createConnection } from './chat.js';
`;

const reactImports2 = `
function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
`;

const reactImports3 = `
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
`;

const TestPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Parallax pages={5}>
      <ParallaxLayer sticky={{ start: 3, end: 4 }} className="flex items-center justify-start">
        <div className="mockup-code m-4 p-3">
          <pre className="animate-typing overflow-hidden delay-1000">
            <code>{reactImports1}</code>
          </pre>
          <pre className="animate-typing overflow-hidden">
            <code>{reactImports2}</code>
          </pre>
          <pre className="animate-typing overflow-hidden">
            <code>{reactImports3}</code>
          </pre>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default TestPage;
