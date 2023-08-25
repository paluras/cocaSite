import "./FirstPage.style.css";
import { useState, useEffect } from "react";
const FirstPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState("1");

  useEffect(() => {
    const videoElement = document.querySelector("video");
    console.log(videoElement);
    videoElement.addEventListener("loadeddata", () => {
      setIsVideoLoaded("0");
    });
  });

  isVideoLoaded == "0" ? console.log(true) : console.log(false);
  return (
    <>
      <main id="first" className="first-page">
        <div className="video-land">
          <div className="icon-absolute">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 32 32"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 16 4 C 8.822 4 4 8.4303594 4 12.568359 C 4 14.014359 4.775 15.191891 6 15.712891 L 6 24 C 6 26.206 7.794 28 10 28 L 22 28 C 24.206 28 26 26.206 26 24 L 26 15.712891 C 27.225 15.191891 28 14.014359 28 12.568359 C 28 8.4303594 23.178 4 16 4 z M 16 6 C 22.438 6 26 9.8833594 26 12.568359 C 26 13.336359 25.56675 13.862562 24.84375 13.976562 L 24 14.111328 L 24 24 C 24 25.103 23.103 26 22 26 L 10 26 C 8.897 26 8 25.103 8 24 L 8 14.111328 L 7.15625 13.978516 C 6.43325 13.863516 6 13.336359 6 12.568359 C 6 9.8833594 9.562 6 16 6 z"></path>
            </svg>
          </div>
          <div
            style={{ opacity: `${isVideoLoaded}` }}
            className="absolute-cover"
          >
            <div className="icon-absolute">
              {" "}
              <svg
                className="animateSvg"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 16 4 C 8.822 4 4 8.4303594 4 12.568359 C 4 14.014359 4.775 15.191891 6 15.712891 L 6 24 C 6 26.206 7.794 28 10 28 L 22 28 C 24.206 28 26 26.206 26 24 L 26 15.712891 C 27.225 15.191891 28 14.014359 28 12.568359 C 28 8.4303594 23.178 4 16 4 z M 16 6 C 22.438 6 26 9.8833594 26 12.568359 C 26 13.336359 25.56675 13.862562 24.84375 13.976562 L 24 14.111328 L 24 24 C 24 25.103 23.103 26 22 26 L 10 26 C 8.897 26 8 25.103 8 24 L 8 14.111328 L 7.15625 13.978516 C 6.43325 13.863516 6 13.336359 6 12.568359 C 6 9.8833594 9.562 6 16 6 z"></path>
              </svg>{" "}
            </div>
          </div>
          <div className="gradient"></div>{" "}
          <video
            className="big-video"
            src="./var6.mp4"
            playsInline
            autoPlay
            muted
            loop
            id="myVideo"
          ></video>
        </div>
      </main>
    </>
  );
};

export default FirstPage;
