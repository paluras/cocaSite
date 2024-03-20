import "./App.css";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "../components/footer/footer.component";
import Nav from "../components/nav/nav-component";
import FirstPage from "../components/firstPage/index";
import SecondPage from "../components/SecondPage/index";
import ThirdPage from "../components/ThirdPage/ThirdPage.component";
import Landing from "../components/Landing/Landing.component";
import Clients from "../components/Clients/Clients.component";
import Blog from "../route/Blog.component";
import PageVideo from "../components/PageVideo/PageVideo.component";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [visible, setVisible] = useState();
  const { ref, inView } = useInView({});



  useEffect(() => {
    inView ? setVisible("show") : setVisible("hidden");
    return () => {};
  }, [inView]);

  const videoObj = [
    {
      src: "./var6.mp4",
      title: "Zahar face televizor",
      para: "The Golden Globe Awards are accolades bestowed, for excellence in both American and international film and television, by the Hollywood Foreign Press Association (HFPA), an organization representing international journalists who reported on the American entertainment industry. It is an annual award ceremony held since 1944 to honor artists and professionals and their work.",
      linkTo: "page",
    },
    {
      src: "./video2vsmall.mp4",
      title: "Babababa",
      para: "Ingrid Bergman (n. 29 august 1915, Stockholm, Suedia - d. 29 august 1982, Londra, Marea Britanie) a fost o actriță de film, de origine suedeză, laureată cu trei premii Oscar, laureată a triplei recunoașteri filmice numită Triple Crown of Acting, o categorie aparte pentru actorii și actrițele care sunt câștigători ai premiilor Oscar, Tony și Emmy.",
      linkTo: "page2",
    },
  ];

  const navObjText = ["Despre Noi", "Proiecte", "Blog", "Echipa", "Contact"];

  return (
    <>
    {/* <MouseFollower/> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav
                text={navObjText}
            
              ></Nav>
              <Landing>
                <a href="#first">
                  <button className="snap">I </button>
                </a>

                <a href="#second">
                  <button className="snap two">II </button>
                </a>
                <a href="#third">
                  <button className="snap three">III </button>
                </a>
                <FirstPage />

                <SecondPage visible={visible} ref={ref} />
                <ThirdPage videoObj={videoObj} />
                <Clients />
              </Landing>
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <Blog>
              <Nav
                text={["Go Back"]}
             
              ></Nav>
            </Blog>
          }
        />
        {videoObj.map((element, index) => (
          <Route
            key={index}
            path={element.linkTo}
            element={
              <>
                <ScrollToTop />
                <PageVideo
                  src={element.src}
                  title={element.title}
                  p={element.para}
                >
                  <Nav
                    text={["Go Back"]}
                
                  ></Nav>
                </PageVideo>
              </>
            }
          />
        ))}
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
