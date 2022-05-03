import React from "react";
import { Link } from "react-router-dom";

const Card = ({ categoryName, description }) => {
  return (
    <Link to={"/quiz"} className="category-card flex-center pointer no-deco">
      <div className="category-logo flex-center">
        <p className="card-txt">{description}</p>
      </div>
      <p className="card-txt">{categoryName}</p>
    </Link>
  );
};

export default Card;
