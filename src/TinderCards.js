import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Selena Gomez",
      url: "https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg?w=824&quality=70",
    },
    {
      name: "Emma Watson",
      url: "https://media.vanityfair.com/photos/60a3d27e292c88dd8b5007a1/master/w_1920,c_limit/480403143",
    },
  ]);


//   It giving error
//   const swiped = (direction, nameToDelete) => {
//     console.log("removing: " + nameToDelete);
//     // setLastDirection(direction);
//   };

//   const outOfFrame = (name) => {
//     console.log(name + " left the screen");
//   };
  return (
    <div className="tinder_card">
      <div className="tinderCards__cardContainer">
      {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})`}}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
      ))}
      </div>
    </div>
  );
}
export default TinderCards;
