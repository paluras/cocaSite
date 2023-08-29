import "./PageVideo.styles.css";

const PageVideo = ({ children , src , p ,title }) => {
  return (
    <>
      {children}
      <main className="video-page-main">
        <video
          controls
          playsInline
          className="video-page"
          src={src}
        ></video>
        <h1 className="title-video">{title}</h1>
        <p className="video-description">
         {p}
        </p>
      </main>
    </>
  );
};

export default PageVideo;
