import "./hangmancomp.css";

function HangManComp({ lost, hangman, newArr }) {
  return (
    <div className="body-hangmancomp">
      <div className="pole-hangman">
        <div className="side-pole"></div>
        <div className="top-pole"></div>
        <div className="stright-pole"></div>
        <div className="bottom-pole"></div>
      </div>
      <FullHangmanDiv lost = {lost} hangman={hangman} newArr={newArr}/>
    </div>
  );
}

export default HangManComp;

export const FullHangmanDiv = ({lost, hangman, newArr}) => {
  return (
    <div className="full-hangman">
      {lost > 0 ? hangman[hangman.length - 1] : ""}
      {newArr.map((item) => item)}
    </div>
  );
};
