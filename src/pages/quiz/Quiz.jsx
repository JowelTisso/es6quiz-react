import "./Quiz.css";
import React, { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/provider/QuizProvider";
import { addAnswer, nextQuestion, prevQuestion } from "./helper/quizHelper";

const Quiz = () => {
  const { quizState, quizDispatch } = useQuiz();
  const { activeMcq } = quizState;

  const noOfQuestion = quizState?.selectedCategoryQuiz?.mcqs?.length;
  const totalScore = quizState?.selectedCategoryQuiz?.totalScore;

  const currentQuestionNo = quizState?.selectedCategoryQuiz?.mcqs?.findIndex(
    (question) => question === activeMcq
  );

  const nextHandler = () =>
    nextQuestion(quizState.selectedCategoryQuiz.mcqs, activeMcq, quizDispatch);

  const prevHandler = () =>
    prevQuestion(quizState.selectedCategoryQuiz.mcqs, activeMcq, quizDispatch);

  const selectHandler = (option) => {
    activeMcq.submittedAnswer = option;
    addAnswer(activeMcq, quizState, quizDispatch);
  };

  return (
    <div>
      <Link to={"/category"} className="btn-link btn-link-secondary no-deco">
        Quit
      </Link>

      <h1 className="h3 txt-center mg-top-2x pri-color">Arrow functions</h1>
      <main className="quiz-container">
        <div className="quiz-header">
          <p className="t4 question-count">
            Question: {currentQuestionNo + 1}/{noOfQuestion}
          </p>
          <p className="t4">Total Score : {totalScore}</p>
        </div>
        <p className="t4 mg-top-2x">{activeMcq?.question}</p>
        {activeMcq?.code_snippet && (
          <div className="mg-top-2x code-snippet">
            <iframe
              src={activeMcq?.code_snippet}
              className="code-frame"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        )}
        <div className="option-container mg-top-3x">
          {activeMcq?.options?.map((option) => (
            <button
              className={`btn btn-primary-quiz t4   ${
                activeMcq?.submittedAnswer === option && "selectedAnswer"
              }`}
              key={option}
              onClick={() => selectHandler(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="quiz-footer-nav flex-center mg-top-2x">
          <div className="flex-center">
            <IoChevronBack />
            <button className="t4 no-deco btn-link" onClick={prevHandler}>
              Prev
            </button>
          </div>
          <div className="flex-center">
            <Link to={"/result"} className="t4 no-deco btn-link">
              Submit
            </Link>
          </div>
          <div className="flex-center">
            <button className="t4 no-deco btn-link" onClick={nextHandler}>
              Next
            </button>
            <IoChevronForward />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
