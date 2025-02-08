import React from "react";
import './HeroComponent.css'; // Import the external CSS file

const HeroSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Show an alert message
    alert("Your booking has been confirmed! We look forward to seeing you.");
  };

  return (
    <div>
      <div><br></br></div>
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="title-container">
            <h2 className="hero-title">F a n c y   H a i r</h2>
            <h1 className="hero-titlee">Hair salon Expert</h1>
          </div>
          <br />
          <div className="booking-title-container">
            <h2 className="booking-title">Make an Appointment</h2>
          </div>
          <form className="booking-form" onSubmit={handleSubmit}>
            <select className="booking-select">
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
            </select>
            <input type="date" className="booking-input" />
            <input type="time" className="booking-input" />
            <button type="submit" className="booking-button">Submit</button>
          </form>
        </div>
      </section>
      <div><br></br></div>
    </div>
  );
};

export default HeroSection;