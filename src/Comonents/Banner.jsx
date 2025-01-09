
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const destinations = [
    "New York",
    "London",
    "Tokyo",
    "Sydney",
    "Paris",
    "Delhi",
    "Dubai",
    "Singapore",
    "Berlin",
    "Toronto",
  ];

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filteredSuggestions = destinations.filter((destination) =>
        destination.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() !== "") {
      navigate("/flights", { state: { destination: searchQuery } });
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); // Set the clicked suggestion as the input value
    setSuggestions([]); // Clear the suggestions dropdown
  };

  return (
    <section className="banner-section">
      <div className="container text-center text-white">
        <h1 className="banner-title">Book Your Tickets Now</h1>
        <p className="banner-subtitle">
          Find the best deals on trains, buses, and flights, all in one place.
        </p>
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Enter destination or route"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" onClick={handleSearchClick}>
            Search
          </button>
        </div>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Banner;
