import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../navbar/Navbar.css";


const Header = () => {



  const [addClass, setAddClass] = useState("");
  const [menuClick, setMenuClick] = useState("");

  const ok = () => {
    setAddClass(addClass == !true ? "open" : "");
    console.log("cross");
  };
  const menuClicks = () => {
    setMenuClick((menuClick = !false ? "ok" : ""));
    console.log("clos");
  };


  return (
    <>
      {/* <header className="header">
        <nav className="navbar">
          <div className="container">
            <div className="row">
              <div className="brand col-md-3">
                <Link to="/">
                  <h3>Brand </h3>
                </Link>
              </div>

              <div className="col-md-6"><input type="text"
              ></input>
                <i class="fa fa-search" aria-hidden="true"></i>

              </div>

              <div className="ok">
             
                <div
                  id="toggle"
                  className={`col-md-3 ${addClass} ${menuClick}`}
                  onClick={ok}
                >
                  <span id="toggle-btn" className={addClass}></span>
                </div>
                <div id="menu" className={`${addClass} `}>
                  <ul id="menu-list" className={addClass}>
                    <li id="menu-item" className={addClass}>
                      <Link to="/" className="menu-a hover " onClick={addClass}>
                        Home
                      </Link>
                    </li>
                    <li id="menu-item" className={addClass}>
                      <Link
                        to="/secondpage"
                        className="menu-a hover"
                        onClick={menuClicks}
                      >
                        Second Page
                      </Link>
                    </li>
                    <li id="menu-item" className={addClass}>
                      <Link
                        to="/thirdPage"
                        className="menu-a hover"
                        onClick={menuClicks}
                      >
                        Third Page
                      </Link>
                    </li>
                    <li id="menu-item" className={addClass}>
                      <Link to="/contact" className="menu-a hover" onClick={menuClicks}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </header> */}
      <Outlet />
    </>
  );
};

export default Header;
