import React from "react";

const Description = (props) => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
          <img src={props.image} />
        </a>
        <div className="content">
          <a className="author">{props.title}</a>
          <div className="metadata">
            <div className="date">2 days ago</div>
            <div className="rating">
              <i className="star icon"></i>5 Faves
            </div>
          </div>
          <div className="text">{props.des}</div>
        </div>
      </div>
    </div>
  );
};

export default Description;
