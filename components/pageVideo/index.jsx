import React, { useRef } from "react"; // Import useRef from React
import "./style.css";
import MouseFollower from "../mouseFollow";

const PageVideo = ({ children, src,  title, url }) => {
  const videoRef = useRef(null); // Create a reference to the video

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Toggle the muted property
    }
  };

  return (
    <>
      <section className="video-page-main">
        <div className="video-elements">
          <MouseFollower targetRef={videoRef} />

          {/* Add a reference to the video and an onClick event listener */}
          <video
            ref={videoRef}
            playsInline
            autoPlay
            muted
            loop
            onClick={toggleMute} // Add the onClick event listener here
          >
            <source src={src} />
          </video>
        </div>
        <div className="text-container">
          <h1 className="title-video">{title}</h1>
          {children}
        </div>
      </section>
    </>
  );
};

export default PageVideo;
