import "./nav.styles.css";
import { LiaBreadSliceSolid } from "react-icons/lia";
// eslint-disable-next-line react/prop-types
function Nav({ handleAbout, handleProjects, handleContact}) {
  return (
    <>
      <nav>
        <div className="left-container-nav">
          <LiaBreadSliceSolid />
        </div>
        <div className="right-container-nav">
          <div className="nav-menu">
            <a onClick={handleAbout}>About Us</a>
          </div>
          <div className="nav-menu">
            <a  onClick={handleProjects}>Projects</a>
          </div>
          <div className="nav-menu">
            <a>Blog</a>
          </div>
          <div className="nav-menu">
            <a>Team</a>
          </div>
          <div  className="nav-menu">
            <a onClick={handleContact} >Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
