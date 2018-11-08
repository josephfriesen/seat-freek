import React from 'react';
import Iphone from './iphone.svg';

function AppStore(props) {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 80%;
        }
        .v-divider {
          height: 30px;
          border-right: 1px solid #e1e1e1;
        }
      `}
      </style>
      <div>
        <Iphone/>&nbsp;
        <span>App Store</span>
      </div>
      <div className="v-divider">&nbsp;</div>
      <div>
        <Iphone />&nbsp;<span>Play Store</span>
      </div>
    </div>
  );
}

export default AppStore;
