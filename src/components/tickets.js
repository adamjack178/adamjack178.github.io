import React from "react";

import ticketStyles from "./styles/tickets.module.scss";
import ticket from "./assets/ticket.png";

export default function Tickets(props) {
  const { close } = props;
  return (
    <div className={ticketStyles.container}>
      <h2>My Tickets</h2>
      <img src={ticket} alt="arcadium ticket" />
      <div className={ticketStyles.infoSection}>
        <a
          href="https://testnet.snowtrace.io/token/0xE70F41944744855647eec543cdCe9Ee17DA676A1"
          target="_blank"
          without
          rel="noreferrer"
        >
          <h3>Token ID: 1234567891234567891234587</h3>
        </a>

        <h4>
          Amount: <span>22</span>
        </h4>
      </div>
      <button onKeyDown={close} onClick={close}>
        Close
      </button>
    </div>
  );
}
