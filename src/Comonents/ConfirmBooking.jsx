// import React from "react";


// const ConfirmBooking = () => {
//   return (
//     <div className="confirm-booking">
//       <div className="container">
//         <h1 className="section-title">Confirm Your Booking</h1>

//         {/* Booking Summary */}
//         <BookingSummary />

//         {/* Payment Section */}
//         <PaymentSection />
//       </div>
//     </div>
//   );
// };

// const BookingSummary = () => (
//   <div className="booking-details">
//     <h2>Booking Summary</h2>
//     <ul>
//       <li><strong>Flight:</strong> Flight ABC123</li>
//       <li><strong>Departure:</strong> Jan 12, 2025, 10:00 AM</li>
//       <li><strong>Arrival:</strong> Jan 12, 2025, 2:00 PM</li>
//       <li><strong>Seats:</strong> 2 (Economy)</li>
//       <li><strong>Total Price:</strong> ₹15,000</li>
//     </ul>
//   </div>
// );

// const PaymentSection = () => (
//   <div className="payment-section">
//     <h2>Payment Options</h2>

//     <div className="payment-methods">
//       {/* UPI Payment */}
//       <PaymentOption
//         title="Pay via UPI"
//         content={<p>UPI ID: <strong>bookings@flightpay</strong></p>}
//         action={<button className="copy-btn">Copy UPI ID</button>}
//       />

//       {/* QR Code */}
//       <PaymentOption
//         title="Scan QR Code"
//         content={<img src="path/to/qr-code.png" alt="QR Code for Payment" />}
//       />

//       {/* Credit/Debit Card */}
//       <PaymentOption
//         title="Pay via Credit/Debit Card"
//         content={
//           <form>
//             <input
//               type="text"
//               placeholder="Card Number"
//               className="form-control"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Cardholder Name"
//               className="form-control"
//               required
//             />
//             <div className="form-row">
//               <input
//                 type="text"
//                 placeholder="MM/YY"
//                 className="form-control small"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="CVV"
//                 className="form-control small"
//                 required
//               />
//             </div>
//             <button type="submit" className="btn-pay">Pay ₹15,000</button>
//           </form>
//         }
//       />
//     </div>
//   </div>
// );

// const PaymentOption = ({ title, content, action }) => (
//   <div className="payment-option">
//     <h3>{title}</h3>
//     {content}
//     {action}
//   </div>
// );

// export default ConfirmBooking;


import React, { useState } from "react";
import qrImg from '../Assets/Images/51QqUQabYkL.png'

const ConfirmBooking = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (upiId) => {
    navigator.clipboard.writeText(upiId)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((error) => console.error("Failed to copy text: ", error));
  };

  return (
    <div className="confirm-booking">
      <div className="container">
        <h1 className="section-title">Confirm Your Booking</h1>

        {/* Booking Summary */}
        <BookingSummary />

        {/* Payment Section */}
        <PaymentSection handleCopy={handleCopy} copied={copied} />
      </div>
    </div>
  );
};

const BookingSummary = () => (
  <div className="booking-details">
    <h2>Booking Summary</h2>
    <ul>
      <li><strong>Flight:</strong> Flight ABC123</li>
      <li><strong>Departure:</strong> Jan 12, 2025, 10:00 AM</li>
      <li><strong>Arrival:</strong> Jan 12, 2025, 2:00 PM</li>
      <li><strong>Seats:</strong> 2 (Economy)</li>
      <li><strong>Total Price:</strong> ₹15,000</li>
    </ul>
  </div>
);

const PaymentSection = ({ handleCopy, copied }) => (
  <div className="payment-section">
    <h2>Payment Options</h2>

    <div className="payment-methods">
      {/* UPI Payment */}
      <PaymentOption
        title="Pay via UPI"
        content={
          <>
            <p>UPI ID: <strong>bookings@flightpay</strong></p>
            <button
              className={`copy-btn ${copied ? "copied" : ""}`}
              onClick={() => handleCopy("bookings@flightpay")}
            >
              {copied ? "Copied!" : "Copy UPI ID"}
            </button>
          </>
        }
      />

      {/* QR Code */}
      <PaymentOption
        title="Scan QR Code"
        content={<img src={qrImg} alt="QR Code for Payment" />}
      />

      {/* Credit/Debit Card */}
      <PaymentOption
        title="Pay via Credit/Debit Card"
        content={
          <form>
            <input
              type="text"
              placeholder="Card Number"
              className="form-control"
              required
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="form-control"
              required
            />
            <div className="form-row">
              <input
                type="text"
                placeholder="MM/YY"
                className="form-control small"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                className="form-control small"
                required
              />
            </div>
            <button type="submit" className="btn-pay">Pay ₹15,000</button>
          </form>
        }
      />
    </div>
  </div>
);

const PaymentOption = ({ title, content }) => (
  <div className="payment-option">
    <h3>{title}</h3>
    {content}
  </div>
);

export default ConfirmBooking;
