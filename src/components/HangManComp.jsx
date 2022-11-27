import { useEffect, useMemo, useState } from "react";
import "./hangmancomp.css";

function HangManComp({lost, lostHandler}) {
  console.log(lost)
  const [getlose, setlose] = useState(lost)
  const hangman = [
    <div className="head-hangman"></div>,
    <div className="body-hangman"></div>,
    <div className="lefthand-hangman"></div>,
    <div className="righthand-hangman"></div>,
    <div className="leftleg-hangman"></div>,
    <div className="rightleg-hangman"></div>,
    <div className="strightpole-hangman"></div>,
  ];
  // useEffect(lostHandler(hangman), [lost])
  // const lostHandler = ()=>{
  //   for(let i =0 ; i<getlose; i++){
  //     console.log(getlose + "lost handler")
  //     console.log(i + "losthandler i")
  //     return hangman[i]
  //   }
  // }
  
  return (
    <div className="body-hangmancomp">
      <div className="pole-hangman">
        <div className="side-pole"></div>
        <div className="top-pole"></div>
        <div className="stright-pole"></div>
        <div className="bottom-pole"></div>
      </div>
      <div className="full-hangman">
        {lost > 0 ? hangman[hangman.length-1] : ''}
        {
          lostHandler(hangman)
        }
      </div>
      {/* hello
      <div className="head-hangman"></div>
      <div className="body-hangman"></div>
      <div className="lefthand-hangman"></div>
      <div className="righthand-hangman"></div>
      <div className="leftleg-hangman"></div>
      <div className="rightleg-hangman"></div> */}
    </div>
  );
}

export default HangManComp;
