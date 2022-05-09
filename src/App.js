import "./App.css";
import { useEffect } from "react";
import AllRoutes from "./routes/AllRoutes";
import * as Constants from "./utils/Constants";
import { useQuiz } from "./context/provider/QuizProvider";
import { GET } from "./utils/axiosHelper";
import { toastOption } from "./utils/toastHelper";
import { Toaster } from "react-hot-toast";

function App() {
  const { quizState, quizDispatch } = useQuiz();

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await GET(Constants.ALL_QUIZ_API);
        if (status === 200 || status || 201) {
          quizDispatch({
            type: Constants.ALL_QUIZ,
            payload: { allQuiz: data.quizzes },
          });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <Toaster position="bottom-left" toastOptions={toastOption} />
      <AllRoutes />
    </div>
  );
}

export default App;
