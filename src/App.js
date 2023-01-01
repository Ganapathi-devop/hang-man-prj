import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import HangManComp from "./components/HangManComp";
import QuizComp from "./components/QuizComp";
import Data from "./data/Questions.json";

function App() {
  const [getScore, setScore] = useState(0);
  const [lose, setLose] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [newHighScore, setNewHighScore] = useState("");
  const lost = useRef(0);
  const hangman = [
    <div className="head-hangman"></div>,
    <div className="body-hangman"></div>,
    <div className="lefthand-hangman"></div>,
    <div className="righthand-hangman"></div>,
    <div className="leftleg-hangman"></div>,
    <div className="rightleg-hangman"></div>,
  ];
  const newHighScoreHandle = (p) => {
    if (p) {
      var appDiv = document.querySelector(".App");
      appDiv.classList.add("highscore-animation");
      setTimeout(() => {
        setNewHighScore(
          <NewHighScoreDiv newHighScoreHandle={newHighScoreHandle} />
        );
      }, 1000);
    } else {
      document.querySelector(".App").classList.remove("highscore-animation");
      setNewHighScore("");
    }
  };
  const gameOverHandle = (p) => {
    if (p) {
      setLose([]);
      setScore(0);
      setGameOver(false);
      lost.current = 0;
    }
  };
  const loseChange = (p) => {
    var newArr = [];
    if (p) {
      lost.current = lost.current + 1;
      for (let i = 0; i < lost.current; i++) {
        newArr.push(hangman[i]);
      }
      if (lost.current <= 6) {
        setLose(newArr);
      } else {
        setGameOver(true);
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
    <div className="background-img-div">
      <div className="App">
        <HangManComp lost={lost.current} hangmanArr={lose} />
        <QuizComp quiz={Data.quiz} score={getScore} ansChecker={ansChecker} />
        <RetryDiv
          gameOver={gameOver}
          score={getScore}
          gameOverHandle={gameOverHandle}
          newHighScoreHandle={newHighScoreHandle}
        />
        {newHighScore}
      </div>
    </div>
  );
}

export default App;

export const RetryDiv = ({
  gameOver,
  score,
  gameOverHandle,
  newHighScoreHandle,
}) => {
  useEffect(() => {
    if (gameOver === true && localStorage.getItem("highScore") === undefined) {
      localStorage.setItem("highScore", `${score}`);
    }
  }, [gameOver, score]);
  useEffect(() => {
    if (
      localStorage.getItem("highScore") === undefined ||
      localStorage.getItem("highScore") < score
    ) {
      newHighScoreHandle(true);

      localStorage.setItem("highScore", `${score}`);
    }
  }, [score]);

  return (
    <div className={gameOver ? "pop-div-bg" : "pop-div-bg display-none"}>
      <div className="pop-div">
        <h4 className="game-over">Game Over</h4>
        <div className="txt-pop-div">
          <h4>Your Score: {score}</h4>
          <h4>High Score: {localStorage.getItem("highScore")}</h4>
        </div>
        <div className="btn-pop-div">
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              gameOverHandle(true);
            }}
          >
            Restart
          </Button>
        </div>
        <img
          className="img-pop-div"
          src="img/evolution_of_the_stickman.jpg"
          alt="evolution of stickman"
        />
      </div>
    </div>
  );
};

export const NewHighScoreDiv = ({ newHighScoreHandle }) => {
  var letter = "New High Score";
  var letterArr = letter.split("");
  console.log(letterArr);
  return (
    <div className="new-highscore-div">
      <div className="popup-new-highscore-div">
        <div>
          {letterArr.map((i, index) => {
            return (
              <h4 className="jump-animation" style={{ "--item": `${index}` }}>
                {i}
              </h4>
            );
          })}
        </div>
        <h4 className="glow">{localStorage.getItem("highScore")}</h4>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            newHighScoreHandle(false);
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
