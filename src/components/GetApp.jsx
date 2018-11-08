import React from "react";
import AppStore from './AppStore';

function GetApp() {
  return (
    <div className="container">
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
          h2 {
            font-size: 1.17em
          }
        `}
      </style>
      <h2>SeatFreek App</h2>
      <p>Send a download link to your phone</p>
      <div className="input-box">
        <input type="text" placeholder="Enter your number"></input>
        <button type="button">Send</button>
      </div>
      <p>Message and data rates may apply</p>
        <AppStore />
    </div>
  );
}

export default GetApp
