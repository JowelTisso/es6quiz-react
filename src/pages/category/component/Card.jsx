import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../../context/provider/QuizProvider";
import { setSelectedCategory } from "../helper/categoryHelper";

const Card = ({ categoryName, description, img }) => {
  const { quizState, quizDispatch } = useQuiz();

  const clickHandler = () =>
    setSelectedCategory(categoryName, quizState.allQuiz, quizDispatch);
  return (
    <Link
      to={"/quiz"}
      className="category-card flex-center pointer no-deco"
      onClick={clickHandler}
    >
      <div className="category-logo flex-center">
        <img className="category-logo category-img" src={img} alt="category" />
      </div>
      <p className="card-txt mg-top-1x">
        {categoryName.split(" ")[0] +
          " " +
          categoryName.split(" ")[1] +
          " " +
          categoryName.split(" ")[2]}
      </p>

      <p className="card-txt">
        {categoryName.split(" ")[3] + " " + categoryName.split(" ")[4]}
      </p>
    </Link>
  );
};

export default Card;
