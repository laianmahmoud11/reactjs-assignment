import React, { useState, useEffect } from "react";
import searchBg from "../assets/images/Search.png";

export default function Search() {
  const [tripType, setTripType] = useState("one-way");
  const [departure, setDeparture] = useState(" ");
  const [arrival, setArrival] = useState(" ");
  const [date, setDate] = useState(" ");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCountries() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      const countryNames = data.map((country) => country.name.common);
      setCountries(countryNames.sort());
      setLoading(false);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="search" style={{ backgroundImage: `url(${searchBg})` }}>
      <header className="title">
        <h1 className="title-1">Let’s explore & travel the world</h1>
        <p className="title-2">
          Find the best destinations and the most popular stays!
        </p>
      </header>

      <form className="search-form">
        <div className="search-form-header">
          <p className="title">Search Flights</p>
          <div className="trip-type">
            <label>
              <input
                type="radio"
                value="return"
                checked={tripType === "return"}
                onChange={() => setTripType("return")}
              />
              Return
            </label>
            <label>
              <input
                type="radio"
                value="one-way"
                checked={tripType === "one-way"}
                onChange={() => setTripType("one-way")}
              />
              One-way
            </label>
          </div>
        </div>

        <div className="search-form-inputsbtns">
          <div className="search-form-inputs">
            <div className="input-label">
              <input
                type="text"
                list="countries"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
              <label>Departure</label>
            </div>

            <div className="input-label">
              <input
                type="text"
                list="countries"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
              />
              <label>Arrival</label>
            </div>

            <div className="input-label">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label>Date</label>
            </div>
          </div>
          <div className="search-btn">
            <button type="submit" className="flights-btn">
              Search flights
            </button>
          </div>
        </div>
      </form>

      <datalist id="countries">
        {countries.map((country, index) => (
          <option key={index} value={country} />
        ))}
      </datalist>
    </div>
  );
}
