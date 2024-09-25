import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <Html>
      <p>{progress != 0 ? `${progress.toFixed()}%` : "loading..."}</p>
    </Html>
  );
};

export default CanvasLoader;
