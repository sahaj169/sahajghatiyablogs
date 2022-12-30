import React from "react";
import Lottie from "react-lottie-player";
import loading from "../../../public/assets/loader.json";
const Loading = () => {
  return (
    <div>
      <Lottie
        loop
        animationData={loading}
        play
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default Loading;
