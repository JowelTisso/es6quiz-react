import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/QuizReducer";

const QuizContext = createContext({ state: {}, dispatch: () => {} });

const QuizProvider = ({ children }) => {
  const defaultData = {
    allQuiz: [],
    selectedCategoryQuiz: {},
    activeMcq: {},
    answeredQuiz: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultData);

  return (
    <QuizContext.Provider value={{ quizState: state, quizDispatch: dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
