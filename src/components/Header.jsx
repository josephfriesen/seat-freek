import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Nav2 from "./Nav2";

function Header() {
  return (
    <div>
      <style jsx>{`
          .wrapper {
            position: fixed;
            height: 72px;
            width: 100%;
            z-index: 9999;
          }
          .container {
            margin: 0 auto;
            width: 90%;
            background-color: transparent;
          }
          .top-bar {
            display: flex;
            justify-content: space-between;
            width: 100%;
            background-color: transparent;
          }
          `}
        </style>
      <div className="wrapper">
        <div className="container">
          <div className="top-bar">
            <div className="top-item">
              <Nav/>
            </div>
            <div className="top-item">
              <Nav2/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

/* STRUCTURE:
_________________________________________
| | NAV BAR |  |         |  | NAV BAR |  |
|________________________________________|


*/
