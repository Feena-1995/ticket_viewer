import React from "react";

import TicketHeader from "../../component/ticketHeader/TicketHeader";

const TicketPage = () => {
  return (
    <div data-testid={"tickets-page"}>
      <TicketHeader />
      Ticket Page
    </div>
  );
};

export default TicketPage;
