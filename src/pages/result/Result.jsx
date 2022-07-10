import "./Result.css";
import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/provider/QuizProvider";
import { resetQuiz } from "../quiz/helper/quizHelper";

const Result = () => {
  const { quizState } = useQuiz();

  const [activeMcq, setActiveMcq] = useState(quizState.answeredQuiz[0]);

  const noOfQuestion = quizState?.answeredQuiz?.length;
  const totalScore = quizState?.selectedCategoryQuiz?.totalScore;
  const currentQuestionNo = quizState?.answeredQuiz?.findIndex(
    (question) => question === activeMcq
  );

  const nextHandler = () => {
    const index = quizState.answeredQuiz?.findIndex((mcq) => mcq === activeMcq);
    if (index > -1 && index < quizState.answeredQuiz.length - 1) {
      setActiveMcq(quizState.answeredQuiz[index + 1]);
    }
  };

  const prevHandler = () => {
    const index = quizState.answeredQuiz?.findIndex((mcq) => mcq === activeMcq);
    if (index > -1 && index > 0) {
      setActiveMcq(quizState.answeredQuiz[index - 1]);
    }
  };

  const checkCorrectAnswers = () => {
    return quizState.answeredQuiz?.reduce((acc, curr) => {
      if (curr.submittedAnswer === curr.answer) {
        acc += 1;
      }
      return acc;
    }, 0);
  };

  let wrongAnswer = false;
  const optionColor = (option) => {
    let optionStyle = "";
    if (activeMcq?.submittedAnswer === option) {
      if (option === activeMcq?.answer) {
        optionStyle += "option-correct" + " ";
        wrongAnswer = false;
      } else {
        optionStyle += "option-wrong" + " ";
        wrongAnswer = true;
      }
    }
    if (activeMcq?.answer === option) {
      optionStyle += "option-correct" + " ";
    }
    return optionStyle;
  };

  return (
    <div>
      <Link
        to={"/category"}
        className="btn-link btn-link-secondary no-deco t4"
        onClick={resetQuiz}
      >
        Quit
      </Link>
      <h1 className="h3 txt-center mg-top-2x pri-color">Result</h1>
      <main className="quiz-container">
        <div className="quiz-header">
          <p className="t4 question-count">
            Question: {currentQuestionNo + 1}/{noOfQuestion}
          </p>
          <p className="t4">
            Final Score : {checkCorrectAnswers()}/{totalScore}
          </p>
        </div>
        <p className="t4 mg-top-2x">What will be the output?</p>
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
              className={`btn btn-primary-result t4  ${optionColor(option)}`}
              key={option}
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
          <div>
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

export default Result;
