import React from "react";

export const Card = (props: any) => (
  <div className="card">
    <a href={props.navigateTo} id="link">
      <img src={props.image} alt={props.title} />
    </a>
    <div className="category">
      <div className="field-label">{props.title}</div>
    </div>
    <h3>
      <a href={props.navigateTo} id="link">
        <div className="field-text">{props.cardText}</div>
      </a>
    </h3>
  </div>
);

export default Card;
