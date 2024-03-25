import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect , useState } from "react";
import Footer from "../components/footer/footer.component";
import Nav from "../components/nav/nav-component";
import Landing from "../components/landing/index.jsx";
import Blog from "../route/articles/index.jsx";
import PageVideo from "../components/pageVideo/index.jsx";
import Contact from "../route/contact/index.jsx";
import {client } from "../sanity.js"
import RouteTransition from "../components/animatedPage/index.jsx";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const navObj = [
    { text: "Despre Noi", to: "/#second" },
    { text: "Proiecte", to: "#third" },
    { text: "Articole", to: "/blog" },
    { text: "Echipa", to: "#team" },
    { text: "Contact", to: "/contact" },
  ];

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const query = `*[_type == "project"]{
      title,
      "logoUrl": logo.asset->url,
      "smallVideoUrl": smallVideo.asset->url,
      "videoUrl": video.asset->url,
      projectText,
      
    }`;
    
    client.fetch(query).then(setProjects).catch(console.error);
  }, []);

  
  return (
    <>
      {/* <MouseFollower/> */}
      <Nav text={navObj}></Nav>

      <Routes>
        <Route path="/" element={
          <RouteTransition>
            <Landing />
          </RouteTransition>
        } />
        <Route path="/blog" element={
          <RouteTransition>
            <Blog />
          </RouteTransition>
        } />
        <Route path="/contact" element={
          <RouteTransition>
            <Contact />
          </RouteTransition>
        } />
        {projects.map((element, index) => (
          <Route key={index} path={"/" + element.title} element={
            <RouteTransition>
              <PageVideo
                src={element.videoUrl}
                title={element.title}
                p={element.projectText}
                url={element.url}
              />
            </RouteTransition>
          }/>
        ))}
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
