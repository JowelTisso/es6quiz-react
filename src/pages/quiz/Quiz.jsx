import "./Quiz.css";
import React, { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { GET } from "../../utils/axiosHelper";
import * as Constant from "../../utils/Constants";

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [activeMcq, setActiveMcq] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await GET(Constant.ALL_QUIZ_API);
        if (status === 200 || status || 201) {
          setQuiz(data.quizzes);

          console.log(data);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    })();
  }, []);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <div>
      <h1 className="h3 txt-center mg-top-2x pri-color">Arrow functions</h1>
      <main className="quiz-container">
        <div className="quiz-header">
          <p className="t4 question-count">Question: 1/5</p>
          <p className="t4">Score : 0</p>
        </div>
        <p className="t4 mg-top-2x">What will be the output?</p>
        {/* <div className="blank-space"></div> */}
        <div className="mg-top-2x code-snippet">
          <iframe
            src={`https://carbon.now.sh/embed?bg=rgba%2847%2C53%2C58%2C1%29&t=one-dark&wt=none&l=auto&width=300&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=159%25&si=false&es=2x&wm=false&code=let%2520a%2520%253D%252042%250A%257B%250A%2520%2520let%2520a%2520%253D%2520100%250A%257D%250Aconsole.log%28a%29`}
            className="code-frame"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <div className="option-container mg-top-3x">
          <button className="btn btn-primary-quiz t4">42</button>
          <button className="btn btn-primary-quiz t4">100</button>
          <button className="btn btn-primary-quiz t4">undefined</button>
          <button className="btn btn-primary-quiz t4">reference error</button>
        </div>
        <div className="quiz-footer-nav flex-center mg-top-2x">
          <div className="flex-center">
            <IoChevronBack />
            <Link to={"/category"} className="t4 no-deco">
              Back
            </Link>
          </div>
          <div className="flex-center">
            <Link to={"/result"} className="t4 no-deco">
              Submit
            </Link>
          </div>
          <div className="flex-center">
            <Link to={"/"} className="t4 no-deco">
              Next
            </Link>
            <IoChevronForward />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
