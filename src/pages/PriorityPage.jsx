import React from "react";
import TicketCard from "../components/TicketCard";
import GetPriorityIcon from "../components/GetPriorityIcon";

function PriorityPage({ data, order }) {
  // Define priority levels
  const priorityLevels = [
    { level: 0, label: "No priority" },
    { level: 4, label: "Urgent" },
    { level: 3, label: "High" },
    { level: 2, label: "Medium" },
    { level: 1, label: "Low" },
  ];

  // Group tickets by priority
  const priorityTicketsMap = priorityLevels.reduce((acc, { level }) => {
    acc[level] = data.tickets.filter((ticket) => ticket.priority === level);
    return acc;
  }, {});

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
    >
      {priorityLevels.map(({ level, label }) => {
        // Get tickets for the current priority level
        const tickets = priorityTicketsMap[level] || [];

        // Sort tickets
        const sortedTickets = [...tickets].sort((a, b) => {
          if (order === "Priority") {
            return b.priority - a.priority; // Redundant for this page but added for consistency
          } else if (order === "Title") {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });

        return (
          <div
            key={level}
            style={{
              flex: 1,
              width:"21%",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
                      <div
            style={{ margin: "10px", display: "flex", marginBottom: "10px",justifyContent:"space-between" }}
          ><div style={{display:"flex"}}>
            <GetPriorityIcon label={label} />

            <h3 style={{ margin: "0", marginLeft: "5px", marginTop: "-5px" }}>
              {label}
            </h3></div>
            <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z" fill="#5C5C5E"/>
</svg>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6.5C3.39782 6.5 3.77936 6.65804 4.06066 6.93934C4.34196 7.22064 4.5 7.60218 4.5 8C4.5 8.39782 4.34196 8.77936 4.06066 9.06066C3.77936 9.34196 3.39782 9.5 3 9.5C2.60218 9.5 2.22064 9.34196 1.93934 9.06066C1.65804 8.77936 1.5 8.39782 1.5 8C1.5 7.60218 1.65804 7.22064 1.93934 6.93934C2.22064 6.65804 2.60218 6.5 3 6.5ZM8 6.5C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8C9.5 8.39782 9.34196 8.77936 9.06066 9.06066C8.77936 9.34196 8.39782 9.5 8 9.5C7.60218 9.5 7.22064 9.34196 6.93934 9.06066C6.65804 8.77936 6.5 8.39782 6.5 8C6.5 7.60218 6.65804 7.22064 6.93934 6.93934C7.22064 6.65804 7.60218 6.5 8 6.5ZM13 6.5C13.3978 6.5 13.7794 6.65804 14.0607 6.93934C14.342 7.22064 14.5 7.60218 14.5 8C14.5 8.39782 14.342 8.77936 14.0607 9.06066C13.7794 9.34196 13.3978 9.5 13 9.5C12.6022 9.5 12.2206 9.34196 11.9393 9.06066C11.658 8.77936 11.5 8.39782 11.5 8C11.5 7.60218 11.658 7.22064 11.9393 6.93934C12.2206 6.65804 12.6022 6.5 13 6.5Z" fill="#5C5C5E"/>
</svg>

</div>
          </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {sortedTickets.length > 0 ? (
                sortedTickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    type={ticket.tag[0]}
                    todo={ticket.status}
                  />
                ))
              ) : (
                <p style={{ textAlign: "center", color: "#888" }}>No Tickets</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PriorityPage;

