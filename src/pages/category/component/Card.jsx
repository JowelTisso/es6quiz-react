import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../../context/provider/QuizProvider";
import { setSelectedCategory } from "../helper/categoryHelper";
import * as Constants from "../../../utils/Constants";

const Card = ({ categoryName, description }) => {
  const { quizState, quizDispatch } = useQuiz();

  const clickHandler = () => {
    try {
      const selectedCategoryQuiz = setSelectedCategory(
        categoryName,
        quizState.allQuiz
      );
      if (selectedCategoryQuiz) {
        quizDispatch({
          type: Constants.SELECTED_CATEGORY,
          payload: { selectedCategoryQuiz },
        });
        quizDispatch({
          type: Constants.ACTIVE_MCQ,
          payload: { activeMcq: selectedCategoryQuiz.mcqs[0] },
        });
      } else {
        console.log("quiz not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
