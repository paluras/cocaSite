import { useState } from "react";
import "./nav.styles.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Nav({ handleAbout, handleProjects, handleContact, text }) {
  const [pop, setPop] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [gridAnim, setGridAnim] = useState("0fr");

  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  // Add an event listener to update the viewport width when the window is resized
  useEffect(() => {
    window.addEventListener("resize", updateViewportWidth);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }); // The empty dependency array means this effect runs only once after mounting

  const handlePop = () => {
    setPop((prev) => !prev);
    pop ? setGridAnim("1fr") : setGridAnim("0fr");
  };

  return (
    <>
      <header>
        <nav>
          <div className="left-container-nav">
            <Link to={"/"}>
              {" "}
              <img
                style={{}}
                src="/just_coca.png"
                alt="Logo for Coca Production"
              />
            </Link>
          </div>
          {viewportWidth > 500 ? (
            <div className="right-container-nav">
              <div className="nav-menu">
              <a href="#second">{text[0]}</a>
              </div>
              <div className="nav-menu">
                <a href="#third">{text[1]}</a>
              </div>
              <div className="nav-menu">
                <Link to={"/blog"}>{text[2]}</Link>
              </div>

              <div className="nav-menu">
                <a >{text[3]}</a>
              </div>
              <div className="nav-menu">
                <a href="#footer">{text[4]}</a>
              </div>
            </div>
          ) : (
            <div className="right-container-mobile">
              {pop ? (
                <svg
                  className="hamburger"
                  onClick={handlePop}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                </svg>
              ) : (
                <div className="opened">
                  <svg
                    className="closed"
                    onClick={handlePop}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                  </svg>
                </div>
              )}
              <div style={{ gridTemplateRows: `${gridAnim}` }} className="list">
                <ul>
                  <li>
                    <a >{text[0]}</a>
                  </li>
                  <li>
                    <a >{text[1]}</a>
                  </li>
                  <li>
                    <Link to={"/blog"}>{text[2]}</Link>
                  </li>
                  <li>
                    {" "}
                    <a >{text[3]}</a>
                  </li>
                  <li>
                    {" "}
                    <a >{text[4]}</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Nav;
