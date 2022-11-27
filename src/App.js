import "./App.css";
import Data from "./data/Questions.json";
import HangManComp from "./components/HangManComp";
import QuizComp from "./components/QuizComp";
import { useEffect, useMemo, useRef, useState } from "react";

function App() {
  const [getScore, setScore] = useState(0);
  // const[lost, setLost] = useState(0);
  const lost = useRef(0);

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
      // setLost(lost+1)
      lost.current = lost.current + 1;
    }
  };
  const lostMemo = useMemo(loseChange, lost);
  const ansChecker = (props) => {
    let qus = Data.quiz[props[1] - 1];
    let ans = props[0];
    if (qus.ans === ans) {
      setScore(getScore + 1);
    } else {
      // setLost(lost+1)
      // loseChange(true)
      lost.current = lost.current + 1;
    }
  };
  const lostHandler = () => {
    for (let i = 0; i < lostMemo; i++) {
      console.log(lostMemo);
      console.log(i);
      return hangman[i];
    }
  };
  useEffect(() => {
    lostHandler();
  }, [lost.current]);
  return (
    <div className="App">
      <div className="game">
        <HangManComp lost={lost} lostHandler={lostHandler} />
        <QuizComp quiz={Data.quiz} score={getScore} ansChecker={ansChecker} />
      </div>
    </div>
  );
}

export default App;
