import React from "react";
import { useForm } from "./formContext";
import TicketHeading from "./ticketHeading";
function Heading() {
  const { formData } = useForm();
  return (
    <>
      {formData?.name ? (
        <TicketHeading name={formData?.name} email={formData?.email} />
      ) : (
        <>
          <h1>
            <span>Your Journey to Coding Conf</span>
            <span>2025 Starts Here!</span>
          </h1>
          <p>Secure your spot at next year's biggest coding conference.</p>
        </>
      )}
    </>
  );
}

export default Heading;
