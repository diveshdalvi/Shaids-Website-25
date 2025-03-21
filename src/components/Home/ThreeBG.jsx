/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import Shaids_logo from "../../assets/images/logo.png";

const ThreeBG = () => {
  const [sceneLoaded, setSceneLoaded] = useState(
    localStorage.getItem("splineLoaded") === "true"
  );

  // Handle the loading state change when the scene is loaded
  // const handleLoad = () => {
  //   setLoading(false); // Mark loading as false when the scene has finished loading
  //   localStorage.setItem("splineLoaded", "true"); // Save in localStorage
  //   setSceneLoaded(true); // Update state
  // };

  return (
    <div className="relative w-full h-screen">
      {/* Spline scene container */}
      {!sceneLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
          Loading Scene...
        </div>
      )}
      <Spline
        className="absolute top-0 left-0 w-full h-full"
        scene="https://prod.spline.design/vTwioKQtvdizYR0c/scene.splinecode"
        // onLoad={handleLoad} /
      />

      {/* Optional: Logo in bottom-right corner */}
      <div className="absolute bg-[#02050f] bottom-0 right-0 b w-40 h-20 z-50 font-NordBold text-white flex items-center justify-center">
        {/* <img
          src={Shaids_logo}
          alt=""
          className=" w-auto overflow-auto size-20 self-center z-50"
        /> */}
      </div>
    </div>
  );
};

export default ThreeBG;
