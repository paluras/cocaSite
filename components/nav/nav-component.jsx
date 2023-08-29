import { useState } from "react";
import "./nav.styles.css";

import { Link } from "react-router-dom";

import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Nav({ handleAbout, handleProjects, handleContact, text }) {
  const [pop, setPop] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [gridAnim , setGridAnim] = useState("0fr")

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

  console.log(viewportWidth);

  const handlePop = () => {
    setPop((prev) => !prev);
    pop ? setGridAnim("1fr") : setGridAnim("0fr")
  };



  return (
    <>
      <nav>
        <div className="left-container-nav">
          <Link to={"/"}>
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 32 32"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 16 4 C 8.822 4 4 8.4303594 4 12.568359 C 4 14.014359 4.775 15.191891 6 15.712891 L 6 24 C 6 26.206 7.794 28 10 28 L 22 28 C 24.206 28 26 26.206 26 24 L 26 15.712891 C 27.225 15.191891 28 14.014359 28 12.568359 C 28 8.4303594 23.178 4 16 4 z M 16 6 C 22.438 6 26 9.8833594 26 12.568359 C 26 13.336359 25.56675 13.862562 24.84375 13.976562 L 24 14.111328 L 24 24 C 24 25.103 23.103 26 22 26 L 10 26 C 8.897 26 8 25.103 8 24 L 8 14.111328 L 7.15625 13.978516 C 6.43325 13.863516 6 13.336359 6 12.568359 C 6 9.8833594 9.562 6 16 6 z"></path>
            </svg>
          </Link>
        </div>
        {viewportWidth > 500 ? (
          <div className="right-container-nav">
            <div className="nav-menu">
              <Link to={"/"} onClick={handleAbout}>{text[0]}</Link>
              
            </div>
            <div className="nav-menu">
              <a onClick={handleProjects}>{text[1]}</a>
            </div>
            <div className="nav-menu">
              <Link to={"/blog"}>{text[2]}</Link>
            </div>

            <div className="nav-menu">
              <a onClick={handleContact}>{text[3]}</a>
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
                 <div style={{gridTemplateRows: `${gridAnim}`}} className="list">
                  <ul>
                    <li>
                      <a onClick={handleAbout}>{text[0]}</a>
                    </li>
                    <li>
                      <a onClick={handleProjects}>{text[1]}</a>
                    </li>
                    <li>
                      <Link to={"/blog"}>{text[2]}</Link>
                    </li>
                    <li>
                      {" "}
                      <a onClick={handleContact}>{text[3]}</a>
                    </li>
                  </ul>
                </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
