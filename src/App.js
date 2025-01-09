import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Register from './Register';
import Login from "./Login";
import Navbar from "./Comonents/Navbar";
import Flights from "./Comonents/Flights";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner from "./Comonents/Banner";
import Booking from "./Comonents/Booking";
import ConfirmBooking from "./Comonents/ConfirmBooking";

function App() {
  const [destination, setDestination] = useState("");

  const handleSearch = (destination) => {
    setDestination(destination);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner onSearch={handleSearch} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flights" element={<Flights destination={destination} />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmbooking" element={<ConfirmBooking/>} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
