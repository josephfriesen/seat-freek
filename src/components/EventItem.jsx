import React from 'react';
import PropTypes from 'prop-types';
import EventImg from './EventImg';


function EventItem(props) {
  return (
    <div className="event-item">
      <style jsx>
        {`
          .event-item:hover > .event-image-wrap {
            -webkit-box-shadow: 2px 10px 5px -6px rgba(0,0,0,0.58);
            -moz-box-shadow: 2px 10px 5px -6px rgba(0,0,0,0.58);
            box-shadow: 2px 10px 5px -6px rgba(0,0,0,0.58);
          }
          .event-item:hover > p {
            color: blue;
          }
          `}
        </style>
        <div className="event-image-wrap">
        <EventImg price={props.price} imageUrl={props.imageUrl}/>
        </div>
        <p>{props.name}</p>
        <span>{props.date}</span> &bull;  <span>{props.location}</span>
      </div>
    );
  }

  export default EventItem
