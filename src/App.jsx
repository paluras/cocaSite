import Footer from "../components/footer/footer.component";
import Nav from "../components/nav/nav-component";
import "./App.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { FcGoogle } from "react-icons/fc";

import FirstPage from "../components/FirstPage/FirstPage.component";
import SecondPage from "../components/SecondPage/SecondPage.component";
import ThirdPage from "../components/ThirdPage/ThirdPage.component";

function App() {
  const [visible, setVisible] = useState();
  const { ref, inView } = useInView({
    /* Optional options */
  });
  const snapTo = () => {
    const firstPage = document.getElementById("first");
    firstPage.scrollIntoView({
      behavior: "smooth",
    });
  };

  const snapToTwo = () => {
    const secondPage = document.querySelector(".second-page");
    secondPage.scrollIntoView({
      behavior: "smooth",
    });
  };
  const snapToThree = () => {
    const secondPage = document.querySelector(".third-page");
    secondPage.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    inView ? setVisible("show") : setVisible("hidden");
    return () => {};
  }, [inView]);

  const videoObj = [
    "./video_test2.mp4",
    "./video_test2.mp4",
    "./video_test2.mp4",
    "./video_test2.mp4",
    "./video2vsmall.mp4",
    "./video2v.webm",
  ];

  return (
    <>
      <button onClick={snapTo} className="snap">
        I
      </button>
      <button onClick={snapToTwo} className="snap two">
        II
      </button>
      <button onClick={snapToThree} className="snap three">
        III
      </button>

      <Nav handleAbout={snapToTwo} handleProjects={snapToThree}></Nav>
      <FirstPage />

      <SecondPage visible={visible} ref={ref} />

      <ThirdPage videoObj={videoObj} />
      {/* CLIENTS SECTION */}
      <div className="worked-with">
        | Clients |
        <div className="worked-icons">
          <FcGoogle />
          <img src="./react.svg" alt="" />
          <img
            src="https://www.primatv.ro/assets/imgs/logo-prima-hd-2.png"
            alt=""
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
