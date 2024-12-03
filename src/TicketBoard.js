import React, { useState, useEffect } from "react";
import StatusPage from "./pages/StatusPage";
import UserPage from "./pages/UserPage";
import PriorityPage from "./pages/PriorityPage";

const TicketBoard = ({group,order}) => {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);

      localStorage.setItem("tickets", JSON.stringify(result.tickets));
      localStorage.setItem("users", JSON.stringify(result.users));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {
      group === "Status" ? (
        <StatusPage data={data} order={order} />
      ) : group === "User" ? (
        <UserPage data={data} order={order} />
      ) : (
        <PriorityPage data={data} order={order} />
      )
    }
    </div>
  );
};

export default TicketBoard;
