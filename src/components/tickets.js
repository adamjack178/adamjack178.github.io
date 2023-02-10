import React from "react";

import ticketStyles from "./styles/tickets.module.scss";
import ticket from "./assets/ticket.png";
import TicketList from "./ticketsList";

export default function Tickets(props) {
  const { close } = props;
  const { mytickets } = props;

  return (
    <div className={ticketStyles.container}>
      <h2>My Tickets</h2>
      <img src={ticket} alt="arcadium ticket" />
      <div className={ticketStyles.infoSection}>
        <a
          href="https://snowtrace.io/address/0x794d9112ede255d1096df2e75ce93205899313f1"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Contract: 0x794d9112ede255d1096df2e75ce93205899313f1</h3>
        </a>
        <TicketList list={mytickets}/>
      </div>
      <button onKeyDown={close} onClick={close}>
        Close
      </button>
    </div>
  );
}
