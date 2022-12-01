import { useMemo, useRef, useState } from "react";
import "./App.css";
import HangManComp from "./components/HangManComp";
import QuizComp from "./components/QuizComp";
import Data from "./data/Questions.json";

function App() {
  const [getScore, setScore] = useState(0);
  const [lose, setLose] = useState([]);
  const lost = useRef(0);
  var newArr = [];

  const hangman = [
    <div className="head-hangman"></div>,
    <div className="body-hangman"></div>,
    <div className="lefthand-hangman"></div>,
    <div className="righthand-hangman"></div>,
    <div className="leftleg-hangman"></div>,
    <div className="rightleg-hangman"></div>,
    <div className="strightpole-hangman"></div>,
  ];
  const loseChange = (p) => {
    if (p) {
      lost.current = lost.current + 1;
      for (let i = 0; i < lost.current; i++) {
        newArr.push(hangman[i]);
      }
      if (newArr.length <= 7) {
        setLose(newArr);
      }
    }
  };
  const ansChecker = (props) => {
    let qus = Data.quiz[props[1] - 1];
    let ans = props[0];
    if (qus.ans === ans) {
      setScore(getScore + 1);
    } else {
      loseChange(true);
    }
  };
  return (
    <div className="App">
      <div className="game">
        <HangManComp lost={lost.current} hangman={hangman} newArr={lose} />
        <QuizComp quiz={Data.quiz} score={getScore} ansChecker={ansChecker} />
      </div>
      <RetryDiv />
    </div>
  );
}

export default App;

export const RetryDiv = () => {
  return <div></div>;
};
