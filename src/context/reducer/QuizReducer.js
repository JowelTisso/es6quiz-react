import * as Constants from "../../utils/Constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case Constants.ALL_QUIZ:
      return {
        ...state,
        allQuiz: action.payload.allQuiz,
      };
    case Constants.SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategoryQuiz: action.payload.selectedCategoryQuiz,
      };
    case Constants.ACTIVE_MCQ:
      return {
        ...state,
        activeMcq: action.payload.activeMcq,
      };
    case Constants.ANSWERED_QUIZ:
      return {
        ...state,
        answeredQuiz: action.payload.answeredQuiz,
      };
    default:
      return state;
  }
};
