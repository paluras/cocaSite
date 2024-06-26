import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import "./style.css";
import { client } from "../../sanity";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const component = useRef();
  const slider = useRef();
  const divRef = useRef();
  const [divWidth, setDivWidth] = useState(0);
  const [projects, setProjects] = useState([]);
  console.log(projects.length);
  console.log(divWidth);
  // console.log(slider.current.style.width = divWidth * projects.length);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
        title,
        "logoUrl": logo.asset->url,
        "smallVideoUrl": smallVideo.asset->url,
        "videoUrl": video.asset->url,
        projectText,
        introduction
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
  }, [projects.length]);

  let handleClick = () => {
    let scrollPosition = window.scrollY;
    window.scrollTo({
      top: scrollPosition + divWidth ,
      behavior: "smooth",
    });
  };
  let handleClickBack = () => {

    let scrollPosition = window.scrollY;
    window.scrollTo({
      top: scrollPosition - divWidth,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    if (projects.length && slider.current) {
      let ctx = gsap.context(() => {
        let panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + slider.current.offsetWidth
          }
        });
      }, component);
      return () => ctx.revert();
    }
  }, [projects, divWidth]);
  let string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ipsum, veniam perspiciatis assumenda sed consectetur eius. Suscipit tempora, blanditiis repellat amet ullam molestiae est minus aliquid fugiat. Porro, suscipit repellat?"
  console.log(string.length);
  return (
    <div className="scroll-container" ref={component}>
      <div
        style={{ width: `${100 * projects.length}vw`,
      height:"100vh" }}
        ref={slider}
        className="container"
      >
        {projects.map((item, index) => (
          <div key={index} className="panel">
            <div ref={divRef} className="content">
              <button className="next panel-btn" onClick={handleClick}>
                Inainte
              </button>
              <button className="back panel-btn" onClick={handleClickBack}>
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
              <a className="goTo" href={"/" + item.title}>
                {item.title}
              </a>
              <p>{item.introduction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
