import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from './logo.svg';


function NavLink(props) {
  let linkStyle = {
    textDecoration: "none",
    color: "white"
  }
  if (props.name == "Home") {
    console.log("hit")
    return (
      <div><Link to={props.path}style={linkStyle}>
        <Logo width={128} height={24}/>
    </Link>
    </div>
    )
  }
  else {
    return (
    <li>
      <style jsx> {`
          li {
            padding-right: 22px;

          }
        `}</style>
      <Link to={props.path}style={linkStyle}>{props.name}</Link>
    </li>
  )
}
}
NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
export default NavLink;
