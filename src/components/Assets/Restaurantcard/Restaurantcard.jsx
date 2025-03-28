import React from 'react';
import "./restaurantcard.scss";

const RestaurantCard = (props) => {
  return (
    <div className="restaurant">
      <div className="res-container">
        <div className="text">
          <h3>Name: {props.name}</h3>
          <h4>Description: {props.description}</h4>
          <h4>State: {props.state}</h4>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
