import React from "react";
import Banner from "./Banner";
import Filters from "./Filters";
import Category from "./Category";

function Welcome() {
  return (
  <div>
    <Banner/>
    <Filters/>
    <Category
      name="Popular Events"
      />
  </div>)
}

export default Welcome;
