import React from "react";
import "./charCard.css";

const charCard = props => (
  <div className="card" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <p>{props.name}</p>
    </div>
  </div>
);

export default charCard;
