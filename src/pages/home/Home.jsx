import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="hero-logo">ES6</h1>
        <p className="t3 intro-txt txt-center mg-top-1x">
          Do you know ES6+ concepts well? <br />
          Let's find out.
        </p>
      </div>
      <div className="btn-container">
        <Link to={"/rules"} className="btn btn-secondary no-deco txt-center">
          RULES
        </Link>
        <Link to={"/rules"} className="btn btn-primary no-deco txt-center">
          START
        </Link>
      </div>
    </div>
  );
};

export default Home;
