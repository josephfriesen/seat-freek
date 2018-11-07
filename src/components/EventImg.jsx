import React from "react";
import PropTypes from "prop-types";
import LikeIco from "./LikeIco.svg";

function EventImg(props) {
  return (
    <div className="eventImgElement">
      <style jsx> {`
          .eventImgElement {
            background: url(${props.imageUrl});
            width: 260px;
            height: 160px;
            border-radius: 6px;
            background-size: cover;
            background-position: center;
            position: relative;
          }
          .price-meta {
            position: absolute;
            bottom: 15px;
            left: 8px;
            display: block;
            background: rgba(0,0,0,0.6);
            color: white;
            padding: 4px;
            border-radius: 12px;
          }
          .like-btn {
            position: absolute;
            top: 15px;
            right: 8px;
          }
        `}
      </style>
      <div className="like-btn">
      <LikeIco />
      </div>
    <span className="price-meta">{props.price}</span>
    </div>
  )
}

export default EventImg;
