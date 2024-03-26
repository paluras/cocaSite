import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import "./style.css";
import { client } from "../../sanity";
import { urlFor } from "../../utility/imageBuildSanity";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const component = useRef();
  const slider = useRef();
  const divRef = useRef();
  const [divWidth, setDivWidth] = useState(0);
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

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setDivWidth(width);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let handleClick = () => {
    console.log("ran");
    let scrollPosition = window.scrollY;
    window.scrollTo({
      top: scrollPosition + divWidth,
      behavior: "smooth",
    });
  };

  const [runAnimations, setRunAnimations] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setRunAnimations((prevState) => !prevState);
    });

    observer.observe(slider.current, {
      childList: true,
      subtree: true,
    });

    // cleanup
    return () => observer.disconnect();
  }, [slider, projects]);

  useLayoutEffect(() => {
    if (projects.length && slider.current) {
      let panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "power2.out",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${slider.current.offsetWidth}`,
        },
      });
    }
  }, [projects]);

  return (
    <div className="scroll-container" ref={component}>
      <div ref={slider} className="container">
        {projects.map((item, index) => (
          <div key={index} className="panel">
            <div ref={divRef} className="content">
              <button className="next panel-btn" onClick={handleClick}>
                Inainte
              </button>
              <button className="back panel-btn" onClick={handleClick}>
                Inapoi
              </button>
            <a href={"/" + item.title}>
              <video
                src={item.videoUrl}
                autoPlay
                playsInline
                muted
                loop
              ></video>
              </a>
              <a className="goTo" href={"/" + item.title}>{item.title}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
