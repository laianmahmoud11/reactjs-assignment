import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faTicket,
  faUtensils,
  faBus,
  faTaxi,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";

export default function TripPreperations() {
  const preparations = [
    {
      name: "Hotel",
      link: "/hotel",
      icon: faHotel,
      backgroundColor: "#F9668D",
    },
    {
      name: "Attractions",
      link: "/attractions",
      icon: faTicket,
      backgroundColor: "#FF9B53",
    },
    {
      name: "Eats",
      link: "/eats",
      icon: faUtensils,
      backgroundColor: "#36DA76",
    },
    {
      name: "Commute",
      link: "/commute",
      icon: faBus,
      backgroundColor: "#FDBF00",
    },
    { name: "Taxi", link: "/taxi", icon: faTaxi, backgroundColor: "#4DABFF" },
    {
      name: "Movies",
      link: "/movies",
      icon: faClapperboard,
      backgroundColor: "#79ca00",
    },
  ];

  return (
    <div className="trip-preperations">
      <p className="trip-preperations-title">Prepare for your trip</p>
      <div className="trip-menu">
        {preparations.map((item) => (
          <div key={item.name} className="trip-item">
            <button
              className="trip-button"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="trip-icon"
                style={{ color: "white", fontSize: "40px" }}
              />
            </button>
            <div className="trip-text">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
