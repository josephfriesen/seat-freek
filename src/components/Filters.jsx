import React from "react";
import LocationFilter from "./LocationFilter";
import DateFilter from "./DateFilter";

function Filters() {
  return (
    <div className="filterParent">
      <style jsx>
        {`
          .filterParent {
            width: 100%;
            border-bottom: 1px solid #e1e1e1;
          }
          .filterWrapper {
            display: flex;
            justify-content: space-around;
            width: 250px;
            margin: 0 auto;
            padding: 16px 0;
          }
        `}
      </style>
      <div className="filterWrapper">
      <LocationFilter/>
      <span>|</span>
      <DateFilter/>
    </div>
    </div>
  )
}

export default Filters;
