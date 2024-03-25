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

  const videoObj = [
    {
      src: "./land_video.webm",
      title: "Numaru N",
      para: [
        "Proiectul “Numarul N” se naste din dorinta de a pune in valoare meseriile facute de oameni pasionati si dedicati. Multe intalniri ocazionale cu diversi profesionisti ne-au pus in contexte inedite care nu puteau fi pastrate doar pentru noi. Si iata, aceasta serie de mini- documentare ce au in prim-plan munca cu toate partile bune sau mai putin bune, urmareste oameni care nu au doua instante: Omul profesionist si omul in timpul liber.Am reusit sa descoperim oameni care se definesc prin meseria lor.",
        "Numarul N este inspirat din faptul ca multe pravalii sunt mici, cu numar la poarta, care uneori se confunda printre multele numere ale strazilor. Se pot trece cu vederea. Dar intrand in fiecare spatiu prezentat de noi, descoperi dimensiuni in totala contradictie cu cele fizice. ",
        "Urmareste si mergi la ei. Sustine pravaliile mici.",
      ],
      linkTo: "page",
      url: "./n_logo.png",
    },
    {
      src: "./land_video.webm",
      title: "Camera Oranj",
      para: [
        "Spatiul online nu are filtre. Suntem inconjurati de medii digitale in fiecare proiect, moment sau activitate si de multe ori picam in hipnotismul lor.",
        "Camera Oranj se naste din dorinta de a oferii cateva notiuni, credem noi, importante pentru a putea naviga, participa si creste in aceste medii dar si abilitatea de a deveni creator parte dintr-un val de modelare a continutului. Cursul vine structurat in 8 lectii care vor acoperi notiuni despre foto-video, marketing, planificare, iar la final, participantul sa ramana cu abilitati clare in producerea continutului in toate formele lui.",
        "Ne dorim ca cei ce aduc aportul la mediile online, sa o faca constient intelegand intregul mecanism din spate. Afara de importanta directa in aportul participantilor la “internet”, cursul Camera Oranj doreste sa puna accent pe observarea si valorizarea mediului inconjurator.",
        "Perspectiva ta asupra lumii este unica, iar noi, spectatorii meritam sa o vedem.",
      ],
      linkTo: "page2",
      url: "./camera_oranj.svg",
    },
  ];
  return (
    <>
      {/* <MouseFollower/> */}
      <Nav text={navObj}></Nav>

      <Routes>
        <Route path="/" element={<Landing ></Landing>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/contact" element={<Contact />} />
        {projects.map((element, index) => (
          <Route
            key={index}
            path={"/" + element.title}
            element={
              <>
                <ScrollToTop />
                <PageVideo
                  src={element.videoUrl}
                  title={element.title}
                  p={element.projectText}
                  url={element.url}
                ></PageVideo>
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
