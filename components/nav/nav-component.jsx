
import './nav.styles.css'

function Nav() {
  

  return (
    <>
     <nav>
      <div className="left-container-nav">
        <img src="/logo.png" width="64px" height="64px" alt="Logo" />
      </div>
      <div className="right-container-nav">
        <div className="nav-menu"><h3>About Us</h3></div>
        <div className="nav-menu"><h3>Projects</h3></div>
        <div className="nav-menu"><h3>Blog</h3></div>
        <div className="nav-menu"><h3>Team</h3></div>
        <div className="nav-menu"><h3>Contact</h3></div>
      </div>
     </nav>
    </>
  )
}

export default Nav
