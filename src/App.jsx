import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import Footer from "../components/footer/footer.component";
import Nav from "../components/nav/nav-component";
import Landing from "../components/landing/index.jsx";
import Blog from "../route/articles/index.jsx";
import PageVideo from "../components/pageVideo/index.jsx";
import { client } from "../sanity.js";
import { urlFor } from "../utility/imageBuildSanity.js";
import RouteTransition from "../components/animatedPage/index.jsx";
import Team from "../route/team/index.jsx";
import { PortableText } from "@portabletext/react";
// import Scroll from "../route/projects/index.jsx";
const Contact = lazy(() => import("../route/contact/index.jsx"));
const Scroll = lazy(() => import("../route/projects/index.jsx"));
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  const navObj = [
    { text: "Despre Noi", to: "/#second" },
    { text: "Proiecte", to: "/projects" },
    { text: "Articole", to: "/blog" },
    { text: "Echipa", to: "/team" },
    { text: "Contact", to: "/contact" },
  ];

  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    const query = `*[_type == "project"]{
      title,
      "logoUrl": logo.asset->url,
      "smallVideoUrl": smallVideo.asset->url,
      "videoUrl": video.asset->url,
      body,
      
    }`;

    client.fetch(query).then(setProjects).catch(console.error);
  }, []);

  const serializers = {
    types: {
      image: ({ value }) => (
        <img
          style={{
            width: "100%",
            padding: "20px 0px",
            objectFit: "contain",
          }}
          src={urlFor(value.asset)}
        />
      ),
    },
  };

  return (
    <>
      {/* <MouseFollower/> */}
      <Nav text={navObj}></Nav>

      <Routes>
        <Route
          path="/"
          element={
            <RouteTransition>
              <Landing />
            </RouteTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <RouteTransition>
              <Blog />
            </RouteTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <RouteTransition>
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100vw",
                    }}
                  ></div>
                }
              >
                <Contact />
              </Suspense>
            </RouteTransition>
          }
        />

        {projects.map((element, index) => (
          <Route
            key={element.title}
            path={"/" + element.title}
            element={
              <RouteTransition>
                <ScrollToTop />
                <PageVideo
                  key={element.title}
                  src={element.videoUrl}
                  title={element.title}
                  url={element.url}
                >
                  <PortableText value={element.body} components={serializers} />
                </PageVideo>
              </RouteTransition>
            }
          />
        ))}

        <Route
          path="/projects"
          element={
            <RouteTransition>
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100vw",
                    }}
                  ></div>
                }
              >
                <ScrollToTop />
                <Scroll />
              </Suspense>
            </RouteTransition>
          }
        ></Route>

        <Route path="/team" element={<Team />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
