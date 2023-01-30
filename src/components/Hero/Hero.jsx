import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="bg-primary-1 main">
      <div className="hero-container">
        <div className="col-40">
          <h1 className="primary-2">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            we are a family owned we are a family ownedwe are a family ownedwe
            are a family ownedwe are a family owned
          </p>
          <button className="btn rounded">
            <h3>Reserve a Table</h3>
          </button>
        </div>
        <div className="col-40">
          <img
            className="rouded"
            src={require("../../assests/restauranfood.jpg")}
            alt="Liitle Lemon Resturant"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
