import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../../context/provider/QuizProvider";
import { setSelectedCategory } from "../helper/categoryHelper";

const Card = ({ categoryName, description }) => {
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
        <p className="card-txt">{description}</p>
      </div>
      <p className="card-txt">{categoryName}</p>
    </Link>
  );
};

export default Card;
