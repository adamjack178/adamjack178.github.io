import React, { useState, useEffect } from "react";

import arcadeStyles from "./styles/arcade.module.scss";

const Arcade = () => {
    const [days, setDays] = useState(+localStorage.getItem('days') || 30);
    const [hours, setHours] = useState(+localStorage.getItem('hours') || 0);
    const [minutes, setMinutes] = useState(+localStorage.getItem('minutes') || 0);
    const [seconds, setSeconds] = useState(+localStorage.getItem('seconds') || 0);
    const [timeLeft, setTimeLeft] = useState(
      (days * 86400) + (hours * 3600) + (minutes * 60) + seconds
    );
    const [tickets, setTickets] = useState(+localStorage.getItem('tickets') || 0);
  
    useEffect(() => {
      localStorage.setItem('days', days);
      localStorage.setItem('hours', hours);
      localStorage.setItem('minutes', minutes);
      localStorage.setItem('seconds', seconds);
    }, [days, hours, minutes, seconds]);
  
    useEffect(() => {
      localStorage.setItem('tickets', tickets);
    }, [tickets]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft === 0) {
            clearInterval(intervalId);
          }
  
          return timeLeft - 1;
        });
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    useEffect(() => {
      setDays(Math.floor(timeLeft / 86400));
      setHours(Math.floor((timeLeft % 86400) / 3600));
      setMinutes(Math.floor(((timeLeft % 86400) % 3600) / 60));
      setSeconds(Math.floor(((timeLeft % 86400) % 3600) % 60));
    }, [timeLeft]);
  
    const handleBuyTicket = () => {
      setTickets(tickets + 1);
    };
  

  return (
    <div className={arcadeStyles.container}>
      <div className={arcadeStyles.timeSection}>
        <h1>Arcadium Tickets</h1>
        <div className={arcadeStyles.timeBlocksSection}>
          <div className={arcadeStyles.timeBlock}>
            <h3>Days</h3>
            <span>{days} :</span>
          </div>
          <div className={arcadeStyles.timeBlock}>
            <h3>Hours</h3>
            <span>{hours} :</span>
          </div>
          <div className={arcadeStyles.timeBlock}>
            <h3>Minutes</h3>
            <span>{minutes} :</span>
          </div>
          <div className={arcadeStyles.timeBlock}>
            <h3>Seconds</h3>
            <span>{seconds}</span>
          </div>
        </div>
      </div>

      <div>
        <button onClick={handleBuyTicket}>Buy Ticket</button>
        <section>
          <h3>Total Tickets Bought</h3>
          <p>{tickets}</p>
        </section>
      </div>
    </div>
  );
};

export default Arcade;
