import "./ThirdPage.style.css"

// eslint-disable-next-line react/prop-types
const ThirdPage = ({videoObj})=>{
    
    return(
        <main className="third-page">
        <div className="our-work">
          <div className="work-title-container">
            <div className="work-title">| Work |</div>
          </div>
          <div className="video-container">
            {videoObj.map((el) => (
              <div className="test-video">
                <video
                  className="small-video"
                  src={el}
                  autoPlay
                  muted
                  loop
                  id="myVideo"
                ></video>
              </div>
            ))}

         
          </div>
        </div>
      </main>
    )
}

export default ThirdPage

