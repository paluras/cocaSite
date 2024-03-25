import "./style.css";
import { useState, useEffect } from "react";
const FirstPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState("1");

  useEffect(() => {
    const videoElement = document.querySelector("video");

    const handleVideoLoad = () => {
      setIsVideoLoaded("0");
    };

    videoElement.addEventListener("loadeddata", handleVideoLoad);

    return () => {
      videoElement.removeEventListener("loadeddata", handleVideoLoad);
    };
  }, []);

  return (
    <>
      <section id="first" className="first-page">
        <div className="video-land">
          <div className="icon-absolute">
            <img
              width={300}
              src="/coca_logo.webp"
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
          >
            {" "}
            <source src="./land_video_big.webm" />
            <source src="./land_video.webm" />
          </video>
        </div>
      </section>
    </>
  );
};

export default FirstPage;
