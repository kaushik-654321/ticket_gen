import React from "react";
import "./ticketheading.css";
const TicketHeading = ({ name, email }) => {
  return (
    <div className="ticket-heading">
      <h1>
        <span>
          Congrats, <span className="highlighted-name">{name}</span>!
        </span>
        <span>Your ticket is ready.</span>
      </h1>
      <p>We've emailed your ticket to</p>
      <p>
        <span className="email">{email}</span> and will send updates in
      </p>
      <p>the run up to the event.</p>
    </div>
  );
};

export default TicketHeading;
