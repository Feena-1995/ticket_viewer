import React from "react";
import styled from "styled-components";

import TicketHeader from "../../component/ticketHeader/TicketHeader";
import Ticket from "../../component/ticket/Ticket";
import Pagination from "../../component/pagination/Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  height: 90%;
`;

const TicketPage = ({ tickets, toggleModal }) => {
  return (
    <Container data-testid={"tickets-page"}>
      <TicketHeader />
      {tickets.map((a) => {
        return (
          <Ticket ticketDisplay={a} key={a.id} toggleModal={toggleModal} />
        );
      })}
      <Pagination />
    </Container>
  );
};

export default TicketPage;
