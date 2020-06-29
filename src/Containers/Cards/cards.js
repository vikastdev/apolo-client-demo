import React from "react";
import "./cards.css";

const Card = (props) => {
  const { onClick } = props;
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="container">{props.children}</div>
      </div>
    </>
  );
};

export default Card;
