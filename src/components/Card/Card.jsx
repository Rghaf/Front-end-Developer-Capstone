import React from "react";
import ICON from "../../assests/basket .svg";

const Card = () => {
  return (
    <>
      <div className="bg-secondary-3 col-30 card">
        <img
          className="image-h"
          src={require("../../assests/lemon dessert.jpg")}
        />
        <div className="row-j-a">
          <h2>title</h2>
          <h2 className="secondary-1">price</h2>
        </div>
        <p className="description secondary-4">
          asdad asd asdasdasda sdad adasdad asd asd asdasdas dasdasdasdasd
          adadaas asdasd asd aad a a asdasd dasd asdalkdsjlak jaj laskdkjdiaud
          kjakjshdjber bhrh j
        </p>
        <p>
          Order a delivery
          <span>
            <img className="icon" src={ICON} />
          </span>
        </p>
      </div>
      <div className="bg-secondary-3 col-30 card">
        <img
          className="image-h"
          src={require("../../assests/greek salad.jpg")}
        />
      </div>
      <div className="bg-secondary-3 col-30 card">
        <img
          className="image-h"
          src={require("../../assests/lemon dessert.jpg")}
        />
      </div>
    </>
  );
};

export default Card;
