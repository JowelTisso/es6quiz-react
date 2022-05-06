export const setSelectedCategory = (catergoryName, allQuiz) => {
  return allQuiz?.find((quiz) => quiz.catergoryName === catergoryName);
};
