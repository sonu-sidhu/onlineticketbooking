import React from "react";
import { useLocation , useNavigate } from "react-router-dom";
// import "./Booking.scss";

const Booking = () => {
  const location = useLocation();
  const { flight } = location.state || {}; // Access flight data
  const navigate = useNavigate();




  if (!flight) {
    return <h2 className="error-message">No flight data available. Please select a flight.</h2>;
  }
  const hadnleClick = () => { 
    navigate("/confirmbooking")
  }

  return (
    <div className="booking-page">
      <div className="container">
        <h1 className="page-title">Book Your Flight</h1>
        <div className="flight-details">
          <h3>Flight {flight.flightNumber}</h3>
          <p><strong>From:</strong> {flight.from}</p>
          <p><strong>To:</strong> {flight.to}</p>
          <p><strong>Departure:</strong> {flight.time}</p>
          <p><strong>Price:</strong> {flight.price}</p>
        </div>
        <div className="booking-form">
          <h2>Passenger Information</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="Enter your phone number" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="passengers">Number of Passengers</label>
              <input type="number" id="passengers" min="1" placeholder="Enter number of passengers" className="form-control" required />
            </div>
            <button onClick={hadnleClick} type="submit" className="btn btn-primary">Confirm Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
