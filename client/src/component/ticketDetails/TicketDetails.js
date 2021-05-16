import React from "react";

import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 500px;
  height: 500px;
  max-height: 500px;
  overflow-y: scroll;
  box-shadow: 0 5px 10px 2px rgba(195, 192, 192, 0.5);
  padding: 20px;
  text-align: left;
  border: 2px solid grey;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 3px;
  cursor: pointer;
  border: 1px solid grey;
  padding: 5px 20px 5px 20px;
  border-radius: 10px;

  :hover {
    background: #2196f3;
  }
`;
const ModalItem = styled.div`
  margin: 8px 0 8px 0;
  font-weight: bold;
`;

const ModalData = styled.div`
  font-weight: normal;
  margin-top: 8px;
`;

const TicketDetails = ({ selectTicket, onClose }) => {
  const {
    id,
    subject,
    updated_at,
    description,
    requester_id,
    assignee_id,
    submitter_id,
  } = selectTicket;
  const date = new Date(Date.parse(updated_at));

  return (
    <Container>
      <CloseButton
        onClick={() => onClose()}
        data-testid={"detail-close_button"}
      >
        Close
      </CloseButton>
      <ModalItem data-testid={"detail-id"}>
        Ticket ID: <ModalData>{id}</ModalData>
      </ModalItem>
      <ModalItem data-testid={"detail-subject"}>
        Subject: <ModalData>{subject}</ModalData>
      </ModalItem>
      <ModalItem data-testid={"detail-description"}>
        Description: <ModalData>{description}</ModalData>
      </ModalItem>
      <ModalItem data-testid={"detail-requester_id"}>
        Requester ID: <ModalData>{requester_id}</ModalData>
      </ModalItem>
      <ModalItem data-testid={"detail-assignee_id"}>
        Assignee ID: <ModalData>{assignee_id}</ModalData>
      </ModalItem>
      <ModalItem data-testid={"detail-submitter_id"}>
        Submitter ID: <ModalData>{submitter_id}</ModalData>
      </ModalItem>
      <ModalItem data-testid={"detail-updated_at"}>
        Updated at: <ModalData>{date.toLocaleString().slice(0, 8)}</ModalData>
      </ModalItem>
    </Container>
  );
};

export default TicketDetails;
