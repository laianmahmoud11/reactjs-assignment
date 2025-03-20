import React, { useState } from "react";
import Header from "./Component/Header.jsx";
import Search from "./Component/Search.jsx";
import RecentSearch from "./Component/RecentSearch.jsx";
import TripPreperations from "./Component/TripPreperations.jsx";
import PopularDestination from "./Component/PopularDestination.jsx";
import RecommendedHoliday from "./Component/RecommendedHoliday.jsx";
import PopularStay from "./Component/PopularStay.jsx";
import NewsLetter from "./Component/NewsLetter.jsx";
import Footer from "./Component/Footer.jsx";

import { flights } from "./data/flights.js";
import { destinations } from "./data/destinations.js";
import { holidays } from "./data/holidays.js";
import { stays } from "./data/stays.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [recentSearches, setRecentSearches] = useState(flights);
  const [popularDestinations, setPopularDestinations] = useState(destinations);
  const [recommendedHolidays, setRecommendedHolidays] = useState(holidays);
  const [popularStays, setPopularStays] = useState(stays);

  return (
    <div className="app">
      <Header />
      <Search />
      <div class="main-content">
        <p className="recent-searches-title">recent searches</p>
        <div className="recent-searches">
          {recentSearches.map((flight, index) => (
            <RecentSearch key={index} {...flight} />
          ))}
        </div>
        <div className="trip-preperations-section">
          <TripPreperations />
        </div>
        <div className="popular-destinations-container">
          <header className="popular-dest-header">
            <div className="popular-dest-titles">
              <p>Plan Your Next Trip</p>
              <h3>Most Popular Destinations</h3>
            </div>
            <a href="#">
              View all destinations <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </header>
        </div>
        <div className="destinations-grid">
          {popularDestinations.map((destination, index) => (
            <PopularDestination key={index} {...destination} />
          ))}
        </div>
        <div className="recommended-holidays-container">
          <header className="rec-title">
            <h3>Recommended Holidays</h3>
            <a href="#">
              View all holidays <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </header>
        </div>
        <div className="holidays-card-container">
          {recommendedHolidays.map((holiday, index) => (
            <RecommendedHoliday key={index} {...holiday} />
          ))}
        </div>
        <div className="popular-stays">
          <header className="popular-stays-header">
            <h3>Popular Stays</h3>
            <a href="#">
              View all stays
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </header>
          <div className="popular-stays-container">
            {popularStays.map((stay, index) => (
              <PopularStay key={index} {...stay} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-section">
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
