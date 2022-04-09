import React, { useEffect,useState } from "react";
import "./Nav.css";

function Nav() {

  const [show, handleShow] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY>210) {
        handleShow(true);
      }
      else handleShow(false);
    });
    // Cleanup functiion return
    return ()=>{
      window.removeEventListener("scroll");
    };
  },[]);

  return (
    // if show is true append nav__black to nav class
    <div className={`nav ${show && "nav__black"}`}>
      <div>
        <img
         className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
      </div>

      <div>
        <img className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
