import React from "react";
import PropTypes from "prop-types";
import SearchIcon from './searchIcon.svg';

function Search() {
  return (
    <div className="searchContainer">
      <style jsx>{`
          .searchContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-radius: 12px;
            background-color: white;
            padding: 10px;
          }
          button {
            border-radius: 8px;
            background-color: #1673e6;
            color: white;
            height: 40px;
            width: 120px;
          }
          .searchBar {
            display: flex;
            align-items: center;
            width: 80%;
            justify-content: space-around;
          }
          input {
            height: 60%;
            font-size: 18px;
            width: 90%;
            border: none;
          }
          input:focus {
            outline: none;
          }
      `}
    </style>
      <div className="searchBar">
        <SearchIcon height={16} width={16} />
        <input type="text" placeholder="Search by team, artist, event, or venue"></input>
      </div>
      <button type="button">Search</button>
    </div>
  );
}

export default Search;
