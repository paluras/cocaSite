import { LiaBreadSliceSolid } from "react-icons/lia";

const ImagePlaceholder = () => {
  return (
    <main id="first" className="first-page">
    <div style={{backgroundColor:"black"}} className="video-land">
      <div className="icon-absolute"><LiaBreadSliceSolid /></div>
      <div className="gradient"></div>{" "}
     <img className="placeholder" src="placeholder.jpg" alt="placeholder" />
    </div>
  </main>
  );
};

export default ImagePlaceholder;