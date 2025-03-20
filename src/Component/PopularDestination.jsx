import React from "react";

export default function PopularDestination({ name, price, image }) {
  return (
    <div
      className="popular-destination"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="destination-text">
        <h3>{name}</h3>
        <div className="dest-details">
          <p className="dest-from">FROM</p>
          <p className="dest-price">${price}</p>
        </div>
      </div>
    </div>
  );
}
