import React from "react";

import "./Tile.css";

function Tile({ item }) {
  return (
    <div className="Tile">
      <h2 data-testid="name-title">{item.name ? item.name : item.title}</h2>
      <h2 data-testid="email-date">{item.email ? item.email : item.date}</h2>
      <h2 data-testid="tel-time">{item.tel ? item.tel : item.time}</h2>
      {item.contact && <h2 data-testid="contact">{item.contact}</h2>}
    </div>
  );
}

export default Tile;
