import React from "react";
import { faCirclePlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PopularStay({
  type,
  name,
  price,
  rating,
  review,
  image,
}) {
  return (
    <div className="stay-card">
      <div className="stay-card-container">
        <img src={image} alt="img" className="stay-card-img" />
        <div className="stay-card-title-icon">
          <div className="stay-card-title">
            <span className="stay-card-type">{type}</span>
            <span className="stay-card-name">{name}</span>
            <span className="stay-card-price">${price}/night</span>
          </div>
          <FontAwesomeIcon icon={faCirclePlay} className="play-icon" />
        </div>
        <div className="rating">
          <p className="rating-1">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            {rating}
          </p>
          <p className="rating-2">({review} reviews)</p>
        </div>
        <a href="#" class="stay-btn">
          more details
        </a>
      </div>
    </div>
  );
}
