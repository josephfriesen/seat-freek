import React from 'react';
import GetApp from './GetApp';

function FooterListMenu() {
  const lists = [
    {
      heading: "Learn More",
      elements: [
        "About",
        "SeatGeek Enterprise",
        "MLS Partnership",
        "Sell on SeatGeek",
        "Event News"
      ]
    },
    {
      heading: "Platform",
      elements: [
        "Platform",
        "API Docs",
        "Dev Blog",
        "Dev Community",
        "Partner Program"
      ]
    },
    {
      heading: "Community",
      elements: [
        "Help & Support",
        "Press",
        "Jobs",
        "Twitter",
        "Our Team"
      ]
    },
    {
    heading: "What's Hot",
    elements: [
      "Justin Timberlake",
      "Pink",
      "Billy Joel",
      "Ariana Grande",
      "Fleetwood Mac"
      ]
    }
  ];

  return (
    <div className="mainWrap">
      <style jsx>{`
          .mainWrap {
            display: flex;
            justify-content: space-between;
            padding: 26px 0;

          }
          ul {
          list-style: none;
          padding: 0;
          margin: 0;
          }
          .main-list {
            display: flex;
            justify-content: space-between;
            width: 700px;
          }
          .list-title {
            display: block;
            padding-bottom: 26px;
            font-weight: bold;
          }
        `}</style>
      <ul className="main-list">
        {lists.map((list, i) =>
          <li key={i}><span className="list-title">{list.heading}</span>
          <ul>
            {list.elements.map((element, j) =>
              <li key={j}>{element}</li>
            )}
          </ul>
        </li>
        )}
      </ul>
    </div>
  );
}

export default FooterListMenu
