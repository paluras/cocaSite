import { useState } from "react";
import "./nav.styles.css";
import { LiaBreadSliceSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GiHamburgerMenu} from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Nav({ handleAbout, handleProjects, handleContact, text }) {
  const [pop, setPop] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
const [mobile, setMobile] = useState()


  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);

  };
  console.log(mobile);


  // Add an event listener to update the viewport width when the window is resized
  useEffect(() => {
    window.addEventListener('resize', updateViewportWidth);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, ); // The empty dependency array means this effect runs only once after mounting

  console.log(viewportWidth);


  const handlePop = () =>{
    setPop(prev => !prev)
  }

  return (
    <>
      <nav>
        <div className="left-container-nav">
          <Link to={"/"}>
            {" "}
            <LiaBreadSliceSolid />
          </Link>
        </div>
    { viewportWidth > 500?   <div className="right-container-nav">
          <div className="nav-menu">
            <a onClick={handleAbout}>{text[0]}</a>
          </div>
          <div className="nav-menu">
            <a  onClick={handleProjects}>{text[1]}</a>
          </div>
          <div className="nav-menu">
          <Link to={"/blog"}>{text[2]}</Link>
          </div>
        
          <div  className="nav-menu">
            <a onClick={handleContact} >{text[3]}</a>
          </div>
        </div> : <div  className="right-container-mobile">
          {pop ? (
           <GiHamburgerMenu onClick={handlePop}  className="hamburger"/>  
          ) : (
            <div className="opened">
              <AiOutlineClose onClick={handlePop}  className="closed" />
              <div className="list">
                <ul>
                  <li><a onClick={handleAbout}>{text[0]}</a></li>
                  <li><a  onClick={handleProjects}>{text[1]}</a></li>
                  <li><Link to={"/blog"}>{text[2]}</Link></li>
                  <li> <a onClick={handleContact} >{text[3]}</a></li>
                </ul>
              </div>
            </div>
          )}
        </div> }

       
      </nav>
    </>
  );
}

export default Nav;
