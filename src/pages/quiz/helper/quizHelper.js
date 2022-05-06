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
