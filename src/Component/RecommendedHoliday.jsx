import React from "react";

export default function RecommendedHoliday({ name, duration, price, image }) {
  return (
    <div className="recommended-holiday">
      <img src={image} alt={name} />
      <div className="card-details">
        <div className="card-title">
          <p className="card-name">{name}</p>
          <p className="card-duration">{duration}</p>
        </div>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}
