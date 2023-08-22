import Footer from "../components/footer/footer.component";
import Nav from "../components/nav/nav-component";
import "./App.css";
import { useState ,useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

function App() {
  const [visible , setVisible] = useState()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    
  });
  const snapTo = () => {
    const firstPage = document.getElementById('first');
    firstPage.scrollIntoView({
      behavior: 'smooth',
    });
  };
  
  const snapToTwo = () => {
    const secondPage = document.querySelector('.second-page');
    secondPage.scrollIntoView({
      behavior: 'smooth',
    });
  };
  const snapToThree = () => {
    const secondPage = document.querySelector('.third-page');
    secondPage.scrollIntoView({
      behavior: 'smooth',
    });
  };

console.log(inView);
useEffect(()=>{
  inView ? setVisible("show") : setVisible("hidden")
},)
console.log(visible);


  return (
    <>
      <button onClick={snapTo}  className="snap">
        I
      </button>
      <button onClick={snapToTwo} className="snap two">
        II
      </button>
      <button onClick={snapToThree} className="snap three">
        III
      </button>

      <Nav></Nav>
      <main id="first" className="first-page">
        <div className="video-land">
          <div className="gradient"></div>{" "}
          <video
            className="big-video"
            src="./video_test.m4v"
            autoPlay
            muted
            loop
            id="myVideo"
          ></video>
        </div>
      </main>
      <main className="second-page">
        <div className="about-us">
          <div  className={`hidden about-us-container one-section ${visible}`}>
            <h1 className="big-tittles">| Tittle |</h1>
            <p className="text-about">Whether you need high quality imagery, a compelling story or marketing strategy – we’ve got you covered. What about a mountain location with perfect conditions that cannot be imitated, regardless of its whereabouts? No problem. All this while hosting world-class athletes or talent? Of course.</p>
          </div>
          <div ref={ref} className={`hidden about-us-container two-section ${visible}`}>
          <h1 className="big-tittles">| Tittle |</h1>
            <p className="text-about">Whether you need high quality imagery, a compelling story or marketing strategy – we’ve got you covered. What about a mountain location with perfect conditions that cannot be imitated, regardless of its whereabouts? No problem. All this while hosting world-class athletes or talent? Of course.</p>
          </div>
          <div  className={`hidden about-us-container three-section ${visible}`}>  <h1 className="big-tittles">| Tittle |</h1>
            <p className="text-about">Whether you need high quality imagery, a compelling story or marketing strategy – we’ve got you covered. What about a mountain location with perfect conditions that cannot be imitated, regardless of its whereabouts? No problem. All this while hosting world-class athletes or talent? Of course.</p></div>
        </div>
      </main>
      <main className="third-page">
        <div className="our-work">
          <div className="work-title-container">
            <div className="work-title">| Work |</div>
          </div>
          <div className="video-container">
            {/* aici adaugam un .map pt fiecare */}
            <div className="test-video">
              {/* <div className="video-text">Faleza - Tulcea</div> */}
              <video
                className="small-video"
                src="./video_test2.mp4"
                autoPlay
                muted
                loop
                id="myVideo"
              ></video>
            </div>
            <div className="test-video">
              <video
                className="small-video"
                src="./video_test2.mp4"
                autoPlay
                muted
                loop
                id="myVideo"
              ></video>
            </div>
            <div className="test-video">
              <video
                className="small-video"
                src="./video_test2.mp4"
                autoPlay
                muted
                loop
                id="myVideo"
              ></video>
            </div>
            <div className="test-video">
              <video
                className="small-video"
                src="./video_test2.mp4"
                autoPlay
                muted
                loop
                id="myVideo"
              ></video>
            </div>
            <div className="test-video">
              <video
                className="small-video"
                src="./video_test2.mp4"
                autoPlay
                muted
                loop
                id="myVideo"
              ></video>
            </div>
            <div className="test-video">
              <video
                className="small-video"
                src="./video_test2.mp4"
                autoPlay
                muted
                loop
                id="myVideo"
              ></video>
            </div>
          </div>
        </div>
      </main>
     
      <Footer></Footer>
    </>
  );
}

export default App;
