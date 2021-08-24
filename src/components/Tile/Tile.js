import React from "react";

import "./Tile.css";

function Tile({ item }) {
  return (
    <div className="Tile">
      <h2>{item.name ? item.name : item.title}</h2>
      <h2>{item.email ? item.email : item.date}</h2>
      <h2>{item.tel ? item.tel : item.time}</h2>
      {item.contact && <h2>{item.contact}</h2>}
    </div>
  );
}

export default Tile;
