import { useEffect, useState } from "react";
import Badge from "./Badge";

const CardListing = ({ ticketData, handleClose, handleDelete }) => {
  return (
    <ul className="ticketing_list">
      {ticketData.map((item) => {
        return (
          <li key={item.id}>
            <div className="ticketing_card">
              <h5>{item.title}</h5>
              <Badge badge={item.priority} />
              <p>{item.desc}</p>
              <div className="btn_group">
              <button
                className={`btn ${item.status == "close" ? "close" : "open"}`}
                onClick={() => handleClose(item.id)}
                disabled={item.status === "close"}   
              >
                {item.status == "close" ? "Ticket closed" : "Ticket open"}
              </button>
              <button className="btn btn_delete" onClick={() =>  handleDelete(item.id)}>Delete Ticket</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CardListing;
