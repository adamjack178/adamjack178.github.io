import React, { useState, useEffect, useRef } from "react";
import Popup from 'reactjs-popup'

import arcadeStyles from "./styles/arcade.module.scss";
import ticket from "../components/assets/ticket.png";
import Tickets from "../components/tickets";

const Arcade = (props) => {
  const [date] = useState(new Date("2023-02-10"));
  const [countdown, setCountdown] = useState({});
  const [tickets, setTickets] = useState(0);
  const ref = useRef()
  const closeTooltip = () => ref.current.close()
  const { stations } = props;

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

    setTickets(stations.ticketsArcadium)
  
    return () => clearInterval(intervalId);
  }, [date,tickets,setTickets,stations.ticketsArcadium]);  

  const handleBuyTicket = async () => {
    stations.buyTicket();
    setTickets(stations.ticketsArcadium)
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
         
      <Popup
        ref={ref}
        closeOnDocumentClick={false}
        closeOnEscape={false}
        trigger={
          <span>My Tickets</span>
        }
        p
        modal
      >
        <span>
          <Tickets close={closeTooltip} />
        </span>
      </Popup>
        
        <h3>Total Tickets Bought</h3>
        <p>{tickets}</p>
      </div>
    </div>
  );
};

export default Arcade;
