import { Link } from "react-router-dom";
import "./ThirdPage.style.css";

// eslint-disable-next-line react/prop-types
const ThirdPage = ({ videoObj }) => {
  const handleMouseEnter = (event) => {
    const video = event.target;
  
    const overlay = video.parentElement.querySelector(".video-overlay");
    const title = video.parentElement.querySelector(".title");

    if (video) {
      overlay.style.opacity = "0";
      title.style.opacity = "1";
    }
  };

  const handleMouseLeave = (event) => {
    const video = event.target;
    const overlay = video.parentElement.querySelector(".video-overlay");
    const title = video.parentElement.querySelector(".title");

    if (overlay.style.opacity == "0") {
      overlay.style.opacity = "0";
      title.style.opacity = "0";
    }
  };

  return (
    <main className="third-page">
      <div className="our-work">
        <div className="work-title-container">
          <div className="work-title">| Work |</div>
        </div>
        <div className="video-container">
          {videoObj.map((el, index) => (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="test-video"
              key={index}
            >
              <video
                className="small-video"
                src={el.src}
                autoPlay
                playsInline
                muted
                loop
                id={`myVideo-${index}`}
              ></video>
              <div className="video-overlay"></div>
              <Link className="title" to={el.linkTo}> {el.title}</Link>
              
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ThirdPage;
