import { LiaBreadSliceSolid }  from 'react-icons/lia'
import "./FirstPage.style.css"


const FirstPage = ({videoSrc})=>{
  
return(
    <>
     <main id="first" className="first-page">
        <div className="video-land">
          <div className="icon-absolute"><LiaBreadSliceSolid /></div>
          <div className="gradient"></div>{" "}
          <video
            className="big-video"
            src={videoSrc}
            autoPlay
            muted
            loop
            id="myVideo"
          ></video>
        </div>
      </main>
    </>
)
}

export default FirstPage