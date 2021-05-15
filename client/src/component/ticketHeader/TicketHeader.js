import React from "react";
import styled from "styled-components";

const TicketContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px black solid;
  font-size: 16px;
  font-weight: bold;
  margin: 40px 0 2px 0;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const TicketCell = styled.div`
  padding: 5px;
  margin: 5px 5px;
  min-width: 130px;
  max-width: 130px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TicketHeader = () => {
  return (
    <TicketContainer data-testid={"ticket-header"}>
      <TicketCellSmall data-testid={"header-priority"}>
        Priority
      </TicketCellSmall>
      <TicketCellSmall data-testid={"header-status"}>Status</TicketCellSmall>
      <TicketCellSmall data-testid={"header-id"}>ID</TicketCellSmall>
      <TicketCellSubject data-testid={"header-subject"}>
        Subject
      </TicketCellSubject>
      <TicketCell data-testid={"header-requester"}>Requester</TicketCell>
      <TicketCell data-testid={"header-updated"}>Updated</TicketCell>
      <TicketCell data-testid={"header-group"}>Group</TicketCell>
      <TicketCell data-testid={"header-assignee"}>Assignee</TicketCell>
    </TicketContainer>
  );
};

export default TicketHeader;
