import * as Constants from "../../../utils/Constants";

/**
 *
 * @param {Array} mcqs The currect category mcqs
 * @param {Object} activeMcq The active question
 * @param {function} quizDispatch the dispatch function for updating quiz
 */
export const nextQuestion = (mcqs, activeMcq, quizDispatch) => {
  const index = mcqs?.findIndex((mcq) => mcq === activeMcq);
  if (index > -1 && index < mcqs.length - 1) {
    quizDispatch({
      type: Constants.ACTIVE_MCQ,
      payload: { activeMcq: mcqs[index + 1] },
    });
  }
};

/**
 *
 * @param {Array} mcqs The currect category mcqs
 * @param {Object} activeMcq The active question
 * @param {function} quizDispatch the dispatch function for updating quiz
 */
export const prevQuestion = (mcqs, activeMcq, quizDispatch) => {
  const index = mcqs?.findIndex((mcq) => mcq === activeMcq);
  if (index > -1 && index > 0) {
    quizDispatch({
      type: Constants.ACTIVE_MCQ,
      payload: { activeMcq: mcqs[index - 1] },
    });
  }
};

/**
 *
 * @param {Array} mcqs The currect category mcqs
 * @param {Object} activeMcq The active question
 * @param {function} quizDispatch the dispatch function for updating quiz
 */
export const addAnswer = (activeMcq, quizState, quizDispatch) => {
  const quizIndex = quizState.answeredQuiz.findIndex(
    (mcq) => mcq._id === activeMcq._id
  );
  if (quizIndex > -1) {
    const filteredQuiz = quizState.answeredQuiz.filter(
      (mcq) => mcq._id !== activeMcq._id
    );
    quizDispatch({
      type: Constants.ANSWERED_QUIZ,
      payload: { answeredQuiz: [...filteredQuiz, activeMcq] },
    });
  } else {
    quizDispatch({
      type: Constants.ANSWERED_QUIZ,
      payload: { answeredQuiz: [...quizState.answeredQuiz, activeMcq] },
    });
  }
};
