import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Nav2 from "./Nav2";

function Header() {
  return (
    <div>
      <style jsx>{`
          .background {
            background: linear-gradient(135deg,#1673e6 50%,#01a1e7);
            height: 72px;
            width: 100%;
            border-bottom: 1px solid black;
          }
          .container {
            margin: 0 auto;
            width: 80%;
          }
          .top-bar {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
          `}
        </style>
      <div className="background">
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
