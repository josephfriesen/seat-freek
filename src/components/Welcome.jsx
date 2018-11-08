import React from "react";
import Banner from "./Banner";
import Filters from "./Filters";
import Category from "./Category";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";

function Welcome() {
  return (
  <div>
    <style jsx>{`
      .category {
        margin-top: 60px;
      }
      `}
    </style>
    <Banner/>
    <Filters/>
    <div className="category">
      <Category
        name="Popular Events"
        />
    </div>
    <div className="category">
      <Category
        name="Popular This Weekend"
        />
    </div>
    <div className="category">
      <Category
        name="Concerts"
        />
    </div>
    <div>
      <Footer />
      <Footer2 />
      <Footer3 />
    </div>
  </div>)
}

export default Welcome;
