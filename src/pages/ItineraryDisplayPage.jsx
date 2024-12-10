import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ItineraryDisplayPage.css";

const ItineraryDisplayPage = () => {
  const location = useLocation();
  const { tripName, startDate, endDate } = location.state || {};

  // Format the dates to the user's locale
  const formattedStartDate = startDate
    ? new Date(startDate).toLocaleDateString()
    : "";
  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString()
    : "";

  return (
    <div className="itinerary-display-container">
      <h2>Your Itinerary</h2>
      {tripName && startDate && endDate ? (
        <div className="itinerary-details">
          <h3>{tripName}</h3>
          <p>
            <strong>Start Date:</strong> {formattedStartDate}
          </p>
          <p>
            <strong>End Date:</strong> {formattedEndDate}
          </p>
        </div>
      ) : (
        <p>No itinerary data available.</p>
      )}
    </div>
  );
};

export default ItineraryDisplayPage;
