import React from "react";

import Tile from "../Tile/Tile";
import "./TileList.css";

function TileList({ list }) {
  return (
    <div className="Tile-list">
      {list.map((item, index) => (
        <Tile key={index} item={item} />
      ))}
    </div>
  );
}

export default TileList;
