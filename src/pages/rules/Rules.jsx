import "./Rules.css";
import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
const Rules = () => {
  return (
    <div>
      <h1 className="h2 txt-center mg-top-2x pri-color">RULES</h1>
      <div className="rules-container">
        <div className="rules">
          <p className="t4">
            <span className="pri-color">1.</span> Choose any one correct answer
            from the given option.
          </p>
          <p className="t4 mg-top-2x">
            <span className="pri-color">2.</span> Complete the quiz in the given
            time.
          </p>
          <p className="t4 mg-top-2x">
            <span className="pri-color">3.</span> 1 point will be awarded for
            each correct answer.
          </p>
          <p className="t4 mg-top-2x">
            <span className="pri-color">4.</span> 1 point will be deducted for
            two wrong answer.
          </p>
        </div>
        <div className="footer-nav flex-center mg-top-4x">
          <IoChevronBack />
          <Link className="t4" to={"/"}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rules;
