import React from "react";
import Card from "../Card/Card";
import "./Highlights.css";

export const Highlights = () => {
  return (
    <div className="highlight">
      <div className="row-j">
        <h1 className="col-40">This weak specials!</h1>
        <button className="col-40">Online Menu</button>
      </div>
      <div className="row">
        <Card />
      </div>
    </div>
  );
};
