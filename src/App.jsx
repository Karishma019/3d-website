import {
  OrbitControls,
  ScrollControls,
  Scroll,
  useScroll,
  Html,
  Environment,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import CanvasLoader from "./CanvasLoader";
import Pyramid from "./Pyramid";
import Building from "./Building";
import Overlay from "./Overlay";
import HauntedHouse from "./HauntedHouse";
import "./App.css";
import { Office } from "./Office";
import { useControls } from "leva";
import Ball from "./Ball";

const ScrollSection = ({ children }) => {
  return (
    <Scroll>
      <Html>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{children}</h1>
        </div>
      </Html>
    </Scroll>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <Canvas
        style={{
          height: "100vh",
          width: "100%",
        }}
        shadows
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* <directionalLight intensity={5} /> */}
          {/* <ambientLight args={["#fff111", 2]} /> */}
          {/* <OrbitControls enableZoom={false} /> */}
          {/* <ScrollControls pages={3} damping={0.25}> */}
          {/* <Pyramid scale={0.2} position={[4, -4, 0]} /> */}
          {/* <Building scale={0.04} position={[-1, 0.5, 0]} /> */}
          {/* <HauntedHouse scale={0.05} position={[0, 0, 0]} /> */}
          {/* <Sparkles /> */}
          {/* <Overlay /> */}
          {/* <Office /> */}
          <Ball />
          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
