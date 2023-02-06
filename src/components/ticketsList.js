import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import tckListStyles from "./styles/ticketList.module.scss";

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `1234567891234567891234587${a.length - i}`
);

const TicketList = () => (
  <ScrollArea.Root className={tckListStyles.ScrollAreaRoot}>
    <ScrollArea.Viewport className={tckListStyles.ScrollAreaViewport}>
      <div style={{ padding: "15px 20px" }}>
        <div className={tckListStyles.Text}>All My Tickets List</div>
        {TAGS.map((tag) => (
          <div className={tckListStyles.Tag} key={tag}>
            <div>ID: {tag}</div>
            <div>Number: 7</div>
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

export default TicketList;
