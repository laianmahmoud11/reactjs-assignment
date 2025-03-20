import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export default function RecentSearch({ from, to, date }) {
  return (
    <div className="recent-search">
      <div className="recent-searches-fromto">
        <span>{from}</span>
        <FontAwesomeIcon icon={faPlane} />
        <span>{to}</span>
      </div>
      <div className="recent-searches-departon">
        <p>
          <strong>Depart On: </strong>
          {date}
        </p>
      </div>
    </div>
  );
}
