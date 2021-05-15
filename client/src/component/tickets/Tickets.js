import React from "react";
import styled from "styled-components";

const TicketContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px #d9d9d9 solid;
  font-size: 16px;
  :hover {
    background: rgba(158, 207, 250, 0.3);
  }
`;

const TicketCellSmall = styled.div`
  padding: 5px;
  margin: 5px 5px;
  min-width: 55px;
`;

const TicketCellSubject = styled.div`
  padding: 5px;
  margin: 5px 5px;
  min-width: 290px;
  max-width: 290px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TicketCell = styled.div`
  padding: 5px;
  margin: 5px 5px;
  min-width: 130px;
  max-width: 130px;
`;

const Tickets = (props) => {
  const {
    ticketDisplay: {
      id,
      subject,
      updated_at,
      status,
      priority,
      requester_id,
      assignee_id,
      group_id,
    },
  } = props;

  const date = new Date(Date.parse(updated_at));

  return (
    <TicketContainer data-testid={`ticket-row-${id}`}>
      <TicketCellSmall data-testid={"ticket-priorty"}>
        {priority ?? "-"}
      </TicketCellSmall>
      <TicketCellSmall data-testid={"ticket-status"}>{status}</TicketCellSmall>
      <TicketCellSmall data-testid={"ticket-id"}>#{id}</TicketCellSmall>
      <TicketCellSubject data-testid={"ticket-subject"}>
        {subject}
      </TicketCellSubject>
      <TicketCell data-testid={"ticket-requester"}>{requester_id}</TicketCell>
      <TicketCell data-testid={"ticket-date"}>
        {date.toLocaleString().slice(0, 8)}
      </TicketCell>
      <TicketCell data-testid={"ticket-group"}>{group_id}</TicketCell>
      <TicketCell data-testid={"ticket-assignee"}>{assignee_id}</TicketCell>
    </TicketContainer>
  );
};

export default Tickets;
