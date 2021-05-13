import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

import LoadingPage from "./page/loadingPage/LoadingPage";
import ErrorPage from "./page/errorPage/ErrorPage";
import TicketPage from "./page/ticketPage/TicketPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tickets, setTickets] = useState([]);

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

  return (
    <div className="App">
      {loading ? <LoadingPage /> : error ? <ErrorPage /> : <TicketPage />}
    </div>
  );
}

export default App;
