import "./App.css";

import { useState, useEffect, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { Route, Routes } from "react-router-dom";

import Footer from "../components/footer/footer.component";
import Nav from "../components/nav/nav-component";
import FirstPage from "../components/FirstPage/FirstPage.component";
import SecondPage from "../components/SecondPage/SecondPage.component";
import ThirdPage from "../components/ThirdPage/ThirdPage.component";
import ImagePlaceholder from "../components/VideoPlaceholder/VideoPlaceHolder";
import Landing from "../components/Landing/Landing.component";
import Clients from "../components/Clients/Clients.component";
import Blog from "../route/Blog.component";

function App() {
  const [visible, setVisible] = useState();
  const { ref, inView } = useInView({});


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
  const snapToFour = () => {
    const secondPage = document.querySelector("footer");
    secondPage.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    inView ? setVisible("show") : setVisible("hidden");
    return () => {};
  }, [inView]);

  const videoObj = [
    "./video2vsmall.mp4",
    "./video2vsmall.mp4",
    "./video2vsmall.mp4",
    "./video2vsmall.mp4",
    "./video2vsmall.mp4",
    "./video2vsmall.mp4",
  ];
  const navObjText = ["About Us", "Projects", "Blog", "Contact"];




  // Create a function to update the viewport width in the state
  // const updateViewportWidth = () => {
  //   setViewportWidth(window.innerWidth);
  // };

  // // Add an event listener to update the viewport width when the window is resized
  // useEffect(() => {
  //   window.addEventListener('resize', updateViewportWidth);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('resize', updateViewportWidth);
  //   };
  // }, []); // The empty dependency array means this effect runs only once after mounting

  // console.log(viewportWidth);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Landing>
              <Nav
                text={navObjText}
                handleAbout={snapToTwo}
                handleProjects={snapToThree}
                handleContact={snapToFour}
              ></Nav>

              <button onClick={snapTo} className="snap">
                I
              </button>
              <button onClick={snapToTwo} className="snap two">
                II
              </button>
              <button onClick={snapToThree} className="snap three">
                III
              </button>
              {/* <Suspense fallback={<ImagePlaceholder id="image-placeholder" />}> */}
                <FirstPage />
              {/* </Suspense> */}
              <SecondPage visible={visible} ref={ref} />
              <ThirdPage videoObj={videoObj} />
              <Clients />
            </Landing>
          }
        />
        <Route
          path="/blog"
          element={
            <Blog>
              <Nav
                text={""}
                handleAbout={snapToTwo}
                handleProjects={snapToThree}
                handleContact={snapToFour}
              ></Nav>
            </Blog>
          }
        />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
