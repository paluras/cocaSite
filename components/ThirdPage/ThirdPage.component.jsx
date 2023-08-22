import "./ThirdPage.style.css"

const ThirdPage = ({ videoObj }) => {
  const handleMouseEnter = (event) => {
    const video = event.target;
    const overlay = video.parentElement.querySelector(".video-overlay");
    const title = video.parentElement.querySelector(".title");

    if (overlay && title) {
      overlay.style.opacity = "1";
      title.style.opacity = "1";
    }
  };

  const handleMouseLeave = (event) => {
    const video = event.target;
    const overlay = video.parentElement.querySelector(".video-overlay");
    const title = video.parentElement.querySelector(".title");

    if (overlay && title) {
      overlay.style.opacity = "0";
      title.style.opacity = "0";
    }
  };

  return (
    <main className="third-page">
      <div className="our-work">
        <div className="work-title-container">
          <div className="work-title">| Work |</div>
        </div>
        <div className="video-container">
          {videoObj.map((el, index) => (
            <div className="test-video" key={index}>
              <video
                text="titlu-film"
                className="small-video"
                src={el}
                autoPlay
                muted
                loop
                id={`myVideo-${index}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></video>
              <div className="video-overlay"></div>
              <div className="title">Pe Faleza - Coca Andrei</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ThirdPage;
