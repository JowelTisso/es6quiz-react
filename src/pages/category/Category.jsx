import React from "react";
import "./Category.css";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <h1 className="h2 txt-center mg-top-2x pri-color">CATEGORY</h1>
      <div className="category-container flex-center mg-top-3x">
        <a
          href="/screen/quiz/quiz.html"
          className="category-card flex-center pointer no-deco"
        >
          <div className="category-logo flex-center">
            <p className="t4">{`() => {}`}</p>
          </div>
          <p className="t4">Arrow function</p>
        </a>

        <a
          href="/screen/quiz/quiz.html"
          className="category-card flex-center pointer no-deco"
        >
          <div className="category-logo flex-center">
            <p className="t4">{`(name, className)`}</p>
          </div>
          <p className="t4">Destructuring</p>
        </a>

        <a
          href="/screen/quiz/quiz.html"
          className="category-card flex-center pointer no-deco"
        >
          <div className="category-logo flex-center">
            <p className="t4">let/const/var</p>
          </div>
          <p className="t4">Variables</p>
        </a>

        <a
          href="/screen/quiz/quiz.html"
          className="category-card flex-center pointer no-deco"
        >
          <div className="category-logo flex-center">
            <p className="t4">...rest</p>
          </div>
          <p className="t4">Rest parameters</p>
        </a>

        <a
          href="/screen/quiz/quiz.html"
          className="category-card flex-center pointer no-deco"
        >
          <div className="category-logo flex-center">
            <p className="t4">{"${name}"}</p>
          </div>
          <p className="t4">Template literals</p>
        </a>

        <a
          href="/screen/quiz/quiz.html"
          className="category-card flex-center pointer no-deco"
        >
          <div className="category-logo flex-center">
            <p className="t4">TDZ</p>
          </div>
          <p className="t4">Temporal Dead Zone</p>
        </a>

        <div className="footer-nav flex-center mg-top-2x">
          <IoChevronBack />
          <Link to={"/"} className="t4 no-deco">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
