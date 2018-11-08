import React from 'react';
import FooterListMenu from './FooterListMenu';
import GetApp from './GetApp';

function Footer2() {
  return (
    <div className="bigger-wrapper">
      <style jsx>
        {`
          .bigger-wrapper {
            border-bottom: 1px solid #e1e1e1;
            width: 100%;
          }
          .footer2-wrap {
            display: flex;
            justify-content: space-between;
            width: 90%;
            margin: 0 auto;

            padding-bottom: 26px;
          }
          `}
        </style>
      <div className="footer2-wrap">
          <FooterListMenu />
          <div style={{width: "1px", borderRight: "1px solid #e1e1e1",
            margin: "16px 0"}}>&nbsp;</div>
          <div style={{width: "400px"}}>
            <GetApp />
          </div>
        </div>
      </div>
    )
  }

  export default Footer2;
