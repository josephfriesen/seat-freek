import React from "react";
import NavLink from "./NavLink";
import PropTypes from "prop-types";

function Nav(props) {

  let links = [
  {name: "Home", path: "/"},
  {name: "Sports", path: "/"},
  {name: "Music", path: "/"},
  {name: "More", path: "/"},
  {name: "Sell", path: "/"}
  ]
  return (
    <div>
      <style jsx>{`
          ul {
            list-style: none;
            display: flex;
          }
          div {
            width: 100%;
          }
        `}</style>
      <ul>
        {links.map((link, index) =>
          <NavLink
            name={link.name}
            path={link.path}
            key={index} />
        )}
      </ul>
    </div>
  )
}

export default Nav;
