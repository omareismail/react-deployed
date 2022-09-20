import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.click(props.index)}>
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="content">
        <div className="header">{props.title}</div>
        <div className="meta">
          <span className="date">Coworker</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
