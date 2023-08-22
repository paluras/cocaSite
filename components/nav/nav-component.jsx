
import './nav.styles.css'
import { LiaBreadSliceSolid }  from 'react-icons/lia'
function Nav() {
  

  return (
    <>
     <nav>
      <div className="left-container-nav">
        <LiaBreadSliceSolid  />
      </div>
      <div className="right-container-nav">
        <div className="nav-menu"><h4>About Us</h4></div>
        <div className="nav-menu"><h4>Projects</h4></div>
        <div className="nav-menu"><h4>Blog</h4></div>
        <div className="nav-menu"><h4>Team</h4></div>
        <div className="nav-menu"><h4>Contact</h4></div>
      </div>
     </nav>
    </>
  )
}

export default Nav
