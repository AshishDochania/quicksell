import './App.css';
import React, { useState} from "react";
import TicketBoard from './TicketBoard';
import Header from './components/Header';

function App() {
  const [groupBy, setGroupBy] = useState(() => localStorage.getItem("groupBy") || "Status");
  const [orderBy, setOrderBy] = useState(() => localStorage.getItem("orderBy") || "Priority");

  const handleGroupChange = (group) => {
    // console.log("Group By:", group);
    setGroupBy(group);
    localStorage.setItem("groupBy", group); 
  };

  const handleOrderChange = (order) => {
    // console.log("Order By:", order);
    setOrderBy(order);
    localStorage.setItem("orderBy", order); 
  };
  return (<>
    <Header onGroupChange={handleGroupChange} onOrderChange={handleOrderChange} />
    <TicketBoard group={groupBy} order={orderBy}/>
    </>
  );
};

export default App;
