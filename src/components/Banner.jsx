import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Banner.css";

export default function Banner() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=SoT5JImB1H8"
      width="100vw"
      height="100vh"
      controls={false}
      playing={true}
      light={true}
    />
  );
}
