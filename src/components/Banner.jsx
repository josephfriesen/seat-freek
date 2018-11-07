import React from "react";
import PropTypes from "prop-types";
import Search from './Search';

function Banner() {
  return (
    <div className="addBg">
      <style jsx>
        {`
          .addBg {
            width: 100%;
            height: 387px;
            background: linear-gradient(135deg,#1673e6 50%,#01a1e7);
          }
          h1 {
            color: white;
          }
          .contentWrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            height: 100%;
          }
          `}
        </style>
        <div className="contentWrapper">
          <h1>Millions of tickets in one place.</h1>
          <Search/>
        </div>
      </div>
    );
  }

  export default Banner;
