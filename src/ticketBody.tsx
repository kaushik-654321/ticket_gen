import React from "react";
import "./ticketBody.css";
const TicketBody = ({ name, imgUrl, github }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("en-us", { month: "short" });
  const currentYear = currentDate.getFullYear();
  const day = String(currentDate.getDate()).padStart(2, "0");
  return (
    <div className="ticket">
      <div className="first-div">
        <img
          src="../assets/images/logo-full.svg"
          alt="logo"
          className="logo"
        ></img>
        <p>
          {currentMonth} {day} , {currentYear} / Austin, Tx
        </p>
      </div>
      <div className="third-div">#01609</div>
      <div className="second-div">
        <div className="img_div">
          <img src={imgUrl} alt="uploaded" className="ticket-img" />
        </div>
        <div className="text_div">
          <p className="name">{name}</p>
          <div className="github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.88 10.9.58.1.79-.25.79-.56v-2.2c-3.21.7-3.89-1.5-3.89-1.5-.53-1.4-1.3-1.8-1.3-1.8-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.2 1.8 1.2 1.04 1.8 2.72 1.3 3.38.98.1-.75.41-1.3.75-1.6-2.56-.3-5.25-1.3-5.25-5.6 0-1.2.42-2.2 1.1-3-.1-.28-.47-1.4.1-2.9 0 0 .96-.3 3.15 1.2.91-.25 1.9-.37 2.88-.38.98 0 1.97.13 2.88.38 2.2-1.5 3.15-1.2 3.15-1.2.57 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.7 5.3-5.27 5.6.42.37.8 1.1.8 2.2v3.3c0 .3.2.67.8.56C20.2 21.4 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            {github}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBody;
