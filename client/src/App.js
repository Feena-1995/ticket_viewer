import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

import LoadingPage from "./page/loadingPage/LoadingPage";
import ErrorPage from "./page/errorPage/ErrorPage";
import TicketPage from "./page/ticketPage/TicketPage";
import TicketModal from "./component/ticketModal/TicketModal";
import TicketDetails from "./component/ticketDetails/TicketDetails";
import ErrorBoundary from "./errorBoundary/ErorBoundary";

const Container = styled.div`
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 0px;
  height: 0px;
  box-shadow: 0 5px 10px 2px rgba(195, 192, 192, 0.5);
  padding: 20px;
  text-align: center;
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);

  const handleFetchTickets = useCallback(async () => {
    try {
      const res = await axios.post("http://localhost:3001/tickets", {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      });
      if (res.data.tickets.length > 25) {
        setTotalPage(Math.ceil(res.data.tickets.length / 25));
      }

      setTickets(res.data.tickets);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    handleFetchTickets();
  }, [handleFetchTickets]);

  const toggleModal = (id) => {
    setVisible(true);
    setSelectId(id);
  };

  const handleChangePage = (offset) => {
    setPage(page + offset);
  };

  const sliceTickets =
    totalPage > 0 ? tickets.slice(page * 25, (page + 1) * 25) : tickets;

  return (
    <ErrorBoundary>
      <div className="App">
        {loading ? (
          <LoadingPage />
        ) : error ? (
          <ErrorPage />
        ) : (
          <>
            <TicketPage
              tickets={sliceTickets}
              toggleModal={toggleModal}
              totalPage={totalPage}
              page={page}
              handleChangePage={handleChangePage}
            />
          </>
        )}
        {visible ? (
          <TicketModal>
            <Container>
              {selectId && (
                <TicketDetails
                  selectTicket={tickets.find((t) => t.id === selectId)}
                  onClose={() => setVisible(false)}
                />
              )}
            </Container>
          </TicketModal>
        ) : null}
      </div>
    </ErrorBoundary>
  );
}

export default App;
