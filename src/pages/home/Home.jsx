import React from "react";
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
        <a
          href="/screen/rules/rules.html"
          className="btn btn-secondary no-deco txt-center"
        >
          RULES
        </a>
        <a
          href="/screen/category/category.html"
          className="btn btn-primary no-deco txt-center"
        >
          START
        </a>
      </div>
    </div>
  );
};

export default Home;
