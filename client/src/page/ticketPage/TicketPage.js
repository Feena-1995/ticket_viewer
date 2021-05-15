import React from "react";
import styled from "styled-components";

import TicketHeader from "../../component/ticketHeader/TicketHeader";
import Tickets from "../../component/tickets/Tickets";
import Pagination from "../../component/pagination/Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  height: 90%;
`;

const TicketPage = ({ tickets }) => {
  return (
    <Container data-testid={"tickets-page"}>
      <TicketHeader />
      {tickets.map((a) => {
        return <Tickets ticketDisplay={a} key={a.id} />;
      })}
      <Pagination />
    </Container>
  );
};

export default TicketPage;
