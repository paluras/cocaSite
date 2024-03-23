import "./style.css";
import { useState, useEffect } from "react";
const FirstPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState("1");

  useEffect(() => {
    const videoElement = document.querySelector("video");
    videoElement.addEventListener("loadeddata", () => {
      setIsVideoLoaded("0");
    });
  });

  return (
    <>
      <section id="first" className="first-page">
        <div className="video-land">
          <div className="icon-absolute">
            <img
              width={300}
              height={300}
              src="/coca_logo.png"
              alt="Logo for Coca Production"
            />
          </div>
          <div className="gradient"></div>{" "}
          <video
            preload="true"
            className="big-video"
            playsInline
            autoPlay
            muted
            loop
            id="myVideo"
          >  <source src="./land_video_big.webm" />
            <source src="./land_video.webm" />

          
          </video>
        </div>
      </section>
    </>
  );
};

export default FirstPage;
