import Footer from "../components/footer/footer.component";
import Nav from "../components/nav/nav-component";
import "./App.css";

function App() {
  const snapTo = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
  const snapToTwo = () => {
    window.scrollTo({
      top: 950,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button onClick={snapTo}  className="snap">
        1
      </button>
      <button onClick={snapToTwo} className="snap two">
        2
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
        <div className="our-work">
          <div className="work-title-container">
            <h1 className="work-title">Our Work:</h1>
          </div>
          <div className="video-container">
            {/* aici adaugam un .map pt fiecare */}
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
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
