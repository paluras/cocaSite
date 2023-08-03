
import './nav.styles.css'

function Nav() {
  

  return (
    <>
     <nav>
      <div className="left-container-nav">
        <img src="/logo.png" width="64px" height="64px" alt="Logo" />
      </div>
      <div className="right-container-nav">
        <div className="nav-menu"><h3>Despre noi</h3></div>
        <div className="nav-menu"><h3>Ia de vezi!</h3></div>
        <div className="nav-menu"><h3>Proiecte</h3></div>
        <div className="nav-menu"><h3>Frământări</h3></div>
        <div className="nav-menu"><h3>Team</h3></div>
        <div className="nav-menu"><h3>Contact</h3></div>
      </div>
     </nav>
    </>
  )
}

export default Nav
