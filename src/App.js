import React from "react";
import ItineraryForm from "./components/ItineraryForm";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="content">
        <h1 className="main-title">TRAVEL ITINERARY PLANNER</h1>
        <ItineraryForm />
      </div>
      <Footer />
    </div>
  );
};

export default App;
