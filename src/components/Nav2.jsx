import React from "react";
import NavLink from "./NavLink";
import PropTypes from "prop-types";

function Nav2(props) {
  let links = [
  {name: "Track My Order", path: "/"},
  {name: "Sign Up", path: "/"},
  {name: "Log In", path: "/"}
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

export default Nav2;
