import React, { useState, useRef } from "react";
import "../styles/ItineraryForm.css";

const ItineraryForm = () => {
  const [basicDetails, setBasicDetails] = useState({
    tripName: "",
    startDate: "",
    endDate: "",
  });
  const [showItinerary, setShowItinerary] = useState(false); // State to control showing itinerary

  // Reference for the itinerary display container
  const itineraryRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBasicDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowItinerary(true); // Show the itinerary after submission

    // Scroll to the itinerary display container after form submission
    if (itineraryRef.current) {
      itineraryRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Align to the top of the container
      });
    }
  };

  // Format the dates to the user's locale
  const formattedStartDate = basicDetails.startDate
    ? new Date(basicDetails.startDate).toLocaleDateString()
    : "";
  const formattedEndDate = basicDetails.endDate
    ? new Date(basicDetails.endDate).toLocaleDateString()
    : "";

  return (
    <>
      <div className="form-container">
        <h2>Create Your Itinerary</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Trip Name:
            <input
              type="text"
              name="tripName"
              value={basicDetails.tripName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={basicDetails.startDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={basicDetails.endDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Conditionally render itinerary details below the form */}
      {showItinerary && (
        <div
          className="itinerary-display-container"
          ref={itineraryRef} // Assign ref to the itinerary display
        >
          <h2>Your Itinerary</h2>
          {basicDetails.tripName &&
          basicDetails.startDate &&
          basicDetails.endDate ? (
            <div className="itinerary-details">
              <h3>{basicDetails.tripName}</h3>
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
      )}
    </>
  );
};

export default ItineraryForm;
