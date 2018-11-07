import React from 'react';
import EventItem from './EventItem';
import PageRightBtn from './PageRightBtn.svg';

function Category(props) {
  const fakeEvents = [
    {
      name: "Clippers at Trail Blazers",
      price: "$9+",
      date: "Nov 8",
      location: "Moda Center",
      imageUrl: "https://images.unsplash.com/photo-1520393518755-2df6a7d0ae64?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6d0a476c1f1bdb02cfa2c88d4043e79&auto=format&fit=crop&w=3450&q=80"
    },
    {
      name: "Ariana Grande with Normani",
      price: "$59+",
      date: "Apr 30",
      location: "Moda Center",
      imageUrl: "https://images.unsplash.com/photo-1520393518755-2df6a7d0ae64?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6d0a476c1f1bdb02cfa2c88d4043e79&auto=format&fit=crop&w=3450&q=80"
    },
    {
      name: "Fleetwood Mac",
      price: "$116+",
      date: "Nov 19",
      location: "Moda Center",
      imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5a23a8b4b953bdba8262a4cd98acf99&auto=format&fit=crop&w=3450&q=80"
    },
    {
      name: "KISS",
      price: "$67",
      date: "Feb 1",
      location: "Moda Center",
      imageUrl: "https://images.unsplash.com/photo-1518623297607-280afda77b75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2b77b083a3a94f8bc2338845d92464cd&auto=format&fit=crop&w=3450&q=80"
    }
  ]
  return (
    <div>
      <style jsx>
        {`
          .fake-event-wrapper {
            display: flex;
            justify-content: space-around;
            width: 1070px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
          }
          h3 {
            width: 1070px;
            margin-left: auto;
            margin-right: auto;
          }
          .page-wrapper {
            position: absolute;
            top: 25%;
            right: -25px;
            background-color: white;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.58);
            -moz-box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.58);
            box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.58);
          }
          `}
        </style>
        <h3>{props.name}</h3>
        <div className="fake-event-wrapper">
          {fakeEvents.map((event, index) =>
            <EventItem
              name={event.name}
              price={event.price}
              date={event.date}
              location={event.location}
              imageUrl={event.imageUrl}
              key={index}
              />
          )}
          <div className="page-wrapper">
            <PageRightBtn/>
          </div>
        </div>
      </div>
    );
  }

  export default Category
