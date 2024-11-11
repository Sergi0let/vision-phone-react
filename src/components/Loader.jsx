import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="le0 absolute top-0 flex h-full w-full items-center justify-center">
        <div className="h-[10vw] w-[10vw]">Loading...</div>
      </div>
    </Html>
  );
};

export { Loader };
