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
          href="https://testnet.snowtrace.io/address/0x30C3dD0Bf6F4bcceeF877EA6685C1547F7D27E6f"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Contract: 0x30C3dD0Bf6F4bcceeF877EA6685C1547F7D27E6f</h3>
        </a>
        <TicketList list={mytickets}/>
      </div>
      <button onKeyDown={close} onClick={close}>
        Close
      </button>
    </div>
  );
}
