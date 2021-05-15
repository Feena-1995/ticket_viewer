import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

import LoadingPage from "./page/loadingPage/LoadingPage";
import ErrorPage from "./page/errorPage/ErrorPage";
import TicketPage from "./page/ticketPage/TicketPage";
import TicketModal from "./component/ticketModal/TicketModal";
import TicketDetails from "./component/ticketDetails/TicketDetails";
import ErrorBoundary from "./errorBoundary/ErorBoundary";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectId, setSelectId] = useState(null);

  const handleFetchTickets = useCallback(async () => {
    try {
      const res = await axios.post("http://localhost:3001/tickets", {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      });

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

  return (
    <ErrorBoundary>
      <div className="App">
        {loading ? (
          <LoadingPage />
        ) : error ? (
          <ErrorPage />
        ) : (
          <TicketPage tickets={tickets} toggleModal={toggleModal} />
        )}
        {visible ? (
          <TicketModal>
            {selectId && (
              <TicketDetails
                selectTicket={tickets.find((t) => t.id === selectId)}
                onClose={() => setVisible(false)}
              />
            )}
          </TicketModal>
        ) : null}
      </div>
    </ErrorBoundary>
  );
}

export default App;
