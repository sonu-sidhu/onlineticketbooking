// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Flights({ destination }) {
//   const navigate = useNavigate();
//   const flights = [
//     { id: 1, flightNumber: "AA123", from: "New York", to: destination, time: "10:00 AM", price: "$300" },
//     { id: 2, flightNumber: "DL456", from: "London", to: destination, time: "02:30 PM", price: "$450" },
//     { id: 3, flightNumber: "UA789", from: "Paris", to: destination, time: "06:00 PM", price: "$500" },
//     { id: 4, flightNumber: "BA101", from: "Tokyo", to: destination, time: "08:45 PM", price: "$600" },
//   ];

//   const handleBookNow = (flight) => {
//     navigate("/booking", { state: { flight } }); // Pass flight data
//   };

//   return (
//     <section className="flights-section">
//       <div className="container">
//         <h2 className="section-title">Today's Flights to {destination}</h2>
//         <div className="row">
//           {flights.map((flight) => (
//             <div className="col-md-3" key={flight.id}>
//               <div className="flight-card">
//                 <h5 className="flight-number">Flight {flight.flightNumber}</h5>
//                 <p className="flight-details">From: {flight.from}</p>
//                 <p className="flight-details">To: {flight.to}</p>
//                 <p className="flight-time">Departure: {flight.time}</p>
//                 <p className="flight-price">{flight.price}</p>
//                 <button className="btn btn-primary" onClick={() => handleBookNow(flight)}>
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Flights() {
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state?.destination || "Unknown Destination";

  const flights = [
    { id: 1, flightNumber: "AA123", from: "New York", to: destination, time: "10:00 AM", price: "$300" },
    { id: 2, flightNumber: "DL456", from: "London", to: destination, time: "02:30 PM", price: "$450" },
    { id: 3, flightNumber: "UA789", from: "Paris", to: destination, time: "06:00 PM", price: "$500" },
    { id: 4, flightNumber: "BA101", from: "Tokyo", to: destination, time: "08:45 PM", price: "$600" },
  ];

  const handleBookNow = (flight) => {
    navigate("/booking", { state: { flight } });
  };

  return (
    <section className="flights-section">
      <div className="container">
        <h2 className="section-title">Today's Flights to {destination}</h2>
        <div className="row">
          {flights.map((flight) => (
            <div className="col-md-3" key={flight.id}>
              <div className="flight-card">
                <h5 className="flight-number">Flight {flight.flightNumber}</h5>
                <p className="flight-details">From: {flight.from}</p>
                <p className="flight-details">To: {flight.to}</p>
                <p className="flight-time">Departure: {flight.time}</p>
                <p className="flight-price">{flight.price}</p>
                <button className="btn btn-primary" onClick={() => handleBookNow(flight)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
