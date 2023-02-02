import React, { useState, useEffect } from "react";

import arcadeStyles from "./styles/arcade.module.scss";
import ticket from "../components/assets/ticket.png";

const Arcade = () => {
  const [date] = useState(new Date("2023-02-10"));
  const [countdown, setCountdown] = useState({});
  const [tickets, setTickets] = useState(0);

  useEffect(() => {
    const calculateCountdown = () => {
      const difference = +date - +new Date();
      let tempCountdown = {};

      if (difference > 0) {
        tempCountdown = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      setCountdown(tempCountdown);
    };

    const intervalId = setInterval(calculateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [date]);

  const handleBuyTicket = () => {
    setTickets(tickets + 1);
  };

  return (
    <div className={arcadeStyles.container}>
      <div className={arcadeStyles.Insidecontainer}>
        <div className={arcadeStyles.timeSection}>
          <h1>Arcadium Tickets</h1>
          <div className={arcadeStyles.timeBlocksSection}>
            <div className={arcadeStyles.timeBlock}>
              <h3>Days</h3>
              <span>{countdown.days} :</span>
            </div>
            <div className={arcadeStyles.timeBlock}>
              <h3>Hours</h3>
              <span>{countdown.hours} :</span>
            </div>
            <div className={arcadeStyles.timeBlock}>
              <h3>Minutes</h3>
              <span>{countdown.minutes} :</span>
            </div>
            <div className={arcadeStyles.timeBlock}>
              <h3>Seconds</h3>
              <span>{countdown.seconds}</span>
            </div>
          </div>
        </div>

        <div className={arcadeStyles.ticketSection}>
          <div className={arcadeStyles.imgContainer}>
            <img src={ticket} alt="Arcadium ticket" />
          </div>
          <button onClick={handleBuyTicket}>Buy Ticket</button>
        </div>
      </div>

      <div className={arcadeStyles.ticketsCounter}>
        
          <span>My Tickets</span>
        
        <h3>Total Tickets Bought</h3>
        <p>{tickets}</p>
      </div>
    </div>
  );
};

export default Arcade;
