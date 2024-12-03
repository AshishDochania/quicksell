import React from "react";
import "./Card.css";
import GetPriorityIcon from "./GetPriorityIcon";
import GetStatusIcon from "./GetStatusIcon";

const TicketCard = ({ id, title, type, profilePic,priority="",todo="" }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{id}</span>
        <div className="card-profile">
          <img src={profilePic} alt="profile" />
        </div>
      </div>
      <div className="card-content">
      {todo && <div className="card-icon"><GetStatusIcon status={todo} /></div>}
        <h3>{title}</h3>
      </div>
      <div className="card-footer">
      
        {priority && <div className="card-border" style={{marginRight:"10px"}}><div className="card-icon"><GetPriorityIcon label={priority} /></div></div>}
        
        <div className="card-border">
        <span className="card-dot"></span>
        <span className="card-type">{type}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
