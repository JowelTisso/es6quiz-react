import * as Constants from "../../../utils/Constants";

export const setSelectedCategory = (categoryName, allQuiz, quizDispatch) => {
  try {
    const selectedCategoryQuiz = allQuiz?.find(
      (quiz) => quiz.categoryName === categoryName
    );

    // Cloning the quiz
    const copyOfselectedCategoryQuiz = JSON.parse(
      JSON.stringify(selectedCategoryQuiz)
    );

    if (copyOfselectedCategoryQuiz) {
      quizDispatch({
        type: Constants.SELECTED_CATEGORY,
        payload: { selectedCategoryQuiz: copyOfselectedCategoryQuiz },
      });
      quizDispatch({
        type: Constants.ACTIVE_MCQ,
        payload: { activeMcq: copyOfselectedCategoryQuiz.mcqs[0] },
      });
    } else {
      console.log("quiz not found");
    }
  } catch (error) {
    console.log(error);
  }
};
