import React from 'react';
import FooterLink from "./FooterLink";


function Footer() {
  let links = [
    {name: "NFL", path: "/"},
    {name: "NBA", path: "/"},
    {name: "NHL", path: "/"},
    {name: "MLB", path: "/"},
    {name: "MLS", path: "/"},
    {name: "Rock", path: "/"},
    {name: "Pop", path: "/"},
    {name: "Hip-Hop", path: "/"},
    {name: "Country", path: "/"},
    {name: "Concerts", path: "/"},
    {name: "Theater", path: "/"},
    {name: "NCAAB", path: "/"},
    {name: "NCAAF", path: "/"},
  ]
  return (
    <div className="wrapper">
      <style jsx>{`
        .wrapper {
          margin-top: 200px;
          width: 100%;
          border-top: 1px solid #e1e1e1;
          border-bottom: 1px solid #e1e1e1;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: center;
        }
      `}
      </style>
      <ul>
        {links.map((link, index) =>
          <FooterLink
            name={link.name}
            path={link.path}
            key={index} />
        )}
      </ul>
    </div>
  );
}

export default Footer
