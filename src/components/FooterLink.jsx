import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from './logo.svg';


function FooterLink(props) {
  let linkStyle = {
    textDecoration: "none",
    color: "#1673e6"
  }
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
    FooterLink.propTypes = {
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    };
    export default FooterLink;
