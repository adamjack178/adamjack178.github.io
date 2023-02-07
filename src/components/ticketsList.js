import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import tckListStyles from "./styles/ticketList.module.scss";

const TicketList = (props) => {
  const { list } = props;

  const getDate = (unix_timestamp) => {
     const date = new Date(unix_timestamp * 1000);
     return date.toLocaleString();
  }

  return (
    <ScrollArea.Root className={tckListStyles.ScrollAreaRoot}>
      <ScrollArea.Viewport className={tckListStyles.ScrollAreaViewport}>
        <div style={{ padding: "15px 20px" }}>
          <div className={tckListStyles.Text}>All My Tickets List</div>
          {list.map((tag,index) => (
            <div className={tckListStyles.Tag} key={index}>
              <div>ID: {tag.id.toString()}</div>
              <div>Number: {tag.number.toString()}</div>
              <div>Purchased At: {getDate(tag.purchaseTime)}</div>
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className={tckListStyles.ScrollAreaScrollbar}
        orientation="vertical"
      >
        <ScrollArea.Thumb className={tckListStyles.ScrollAreaThumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className={tckListStyles.ScrollAreaScrollbar}
        orientation="horizontal"
      >
        <ScrollArea.Thumb className={tckListStyles.ScrollAreaThumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={tckListStyles.ScrollAreaCorner} />
    </ScrollArea.Root>
  );
}

export default TicketList;
