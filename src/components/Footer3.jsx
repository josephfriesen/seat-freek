import React from 'react';
import ChairIco from './ChairIco.svg'

function Footer3() {
  let links = [
    "Privacy Policy",
    "Terms of Use",
    "Site Map",
    "Mobile Version"
  ]
  return (
    <div className="wrapper">
      <style jsx>{`
        .wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        li {
          margin-right: 16px;
        }
      `}
      </style>
      <div>
      <ul>
        <li><ChairIco/></li>
        {links.map((link, index) =>
          <li key={index}>{link}</li>
        )}
      </ul>
    </div>
    <div>© 2018 SeatGeek. All rights reserved. <a href="#">Made in NYC.</a></div>
    </div>
  );
}

export default Footer3;
