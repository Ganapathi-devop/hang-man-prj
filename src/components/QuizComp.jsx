import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import "./quizcomp.css";

function QuizComp(props) {
  const [questionGetter, questionSetter] = useState(props.quiz[1]);
  var preQusId = useRef();
  useEffect(() => {
    preQusId.current = questionGetter.id;
    questionSetter(props.quiz[Math.floor(Math.random() * props.quiz.length)]);
  }, []);
  useEffect(() => {
    preQusId.current = questionGetter.id;
    questionSetter(props.quiz[Math.floor(Math.random() * props.quiz.length)]);
    setInterval(() => {
      document.querySelector(".ans-txt").innerHTML = "";
    }, 800);
  }, [props.score]);
  // var question = Data.quiz;
  // console.log(question[Math.floor(Math.random() * question.length)]);
  const ansHandle = (e) => {
    var userInput = e.target.innerText;
    document.querySelector(".ans-txt").innerHTML = userInput;
    let props_for_parent = [userInput, questionGetter.id];
    props.ansChecker(props_for_parent);
  };
  return (
    <div className="body-quizcomp">
      <div className="score-bar">
        <h4>Score:</h4> <h4 id="score">{props.score}</h4>
      </div>
      <div className="question-quizcomp">
        <h4 className="question-h4">{questionGetter.qus}</h4>
        <div className="question-img">
          <ImgDiv src={questionGetter.src} />
        </div>
        <h4>{questionGetter.op.map((item) => item + ", ")}</h4>
      </div>
      <AnsDiv ans={questionGetter.ans} />

      <div className="inputkeys">
        <InputKeys op={questionGetter.op} ansHandle={ansHandle} />
      </div>
      <div className="question-swap">
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            questionSetter(props.quiz[preQusId.current - 1]);
          }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            preQusId.current = questionGetter.id;
            questionSetter(
              props.quiz[Math.floor(Math.random() * props.quiz.length)]
            );
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default QuizComp;

export const InputKeys = ({ op, ansHandle }) => {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "f",
    "g",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <>
      {op.map((item, index) => {
        return (
          <Button
            variant="contained"
            onClick={(e) => {
              ansHandle(e);
            }}
          >
            {alphabet[index]}
          </Button>
        );
      })}
    </>
  );
};

export const AnsDiv = ({ ans }) => {
  let ansArr = ans.split("");
  return (
    <div className="ans-divbody">
      {ansArr.map((item) => {
        return (
          <div className="ans-divs">
            <h1 className="ans-txt"></h1>
          </div>
        );
      })}
    </div>
  );
};

// if (Array.isArray(props.src)) {
//   props.src.map((item) => {
//     console.log(item);
//     return <img src={item} alt="img" />;
//   });
// } else {
//   return <img src={props.src} alt="img" />;
// }

export const ImgDiv = (props) => {
  return (
    <>
      {props.src === undefined ? (
        ""
      ) : Array.isArray(props.src) ? (
        props.src.map((item) => {
          return <img src={item} alt="img" />;
        })
      ) : (
        <img src={props.src} alt="img" />
      )}
    </>
  );
};
