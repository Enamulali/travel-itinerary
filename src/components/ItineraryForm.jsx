import React, { useState } from "react";
import "../styles/ItineraryForm.css";

const ItineraryForm = () => {
  const [basicDetails, setBasicDetails] = useState({
    tripName: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBasicDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Basic Details:", basicDetails);
  };

  return (
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
  );
};

export default ItineraryForm;
