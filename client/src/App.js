import React, { useState, useEffect } from "react";
import "./App.css";

import ErrorBoundary from "./errorBoundary/ErorBoundary";
import LoadingPage from "./page/loadingPage/LoadingPage";
import ErrorPage from "./page/errorPage/ErrorPage";
import TicketPage from "./page/ticketPage/TicketPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      {loading ? <LoadingPage /> : error ? <ErrorPage /> : <TicketPage />}
    </div>
  );
}

export default App;
