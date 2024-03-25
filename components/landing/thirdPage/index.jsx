import { Link } from "react-router-dom";
import {
  handleMouseEnter,
  handleMouseLeave,
} from "../../../utility/handleMouse";
import "./style.css";
import { useEffect, useState } from "react";
import { client } from "../../../sanity";
import { urlFor } from "../../../utility/imageBuildSanity";

// eslint-disable-next-line react/prop-types
const ThirdPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
          title,
          "logoUrl": logo.asset->url,
          "smallVideoUrl": smallVideo.asset->url,
          "videoUrl": video.asset->url,
          projectText
        }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <section id="third" className="third-page">
      <div className="our-work">
        <div className="work-title-container"></div>
        <div className="video-container">
          {projects.map((el, index) => (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="test-video"
              key={index}
            >
              <video
                className="small-video"
                src={el.smallVideoUrl}
                autoPlay
                playsInline
                muted
                loop
                id={`myVideo-${index}`}
              ></video>
              <div className="video-overlay"></div>
              <Link className="title" to={"/" + el.title}>
                <img src={urlFor(el.logoUrl)} alt={el.title} />
                {el.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
