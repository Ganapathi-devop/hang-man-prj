import "./hangmancomp.css";

function HangManComp({ lost,  hangmanArr }) {
  return (
    <div className="body-hangmancomp">
      <div className="pole-hangman">
        <div className="side-pole"></div>
        <div className="top-pole"></div>
        <div className="stright-pole"></div>
        <div className="bottom-pole"></div>
      </div>
      <FullHangmanDiv lost = {lost} hangmanArr={hangmanArr}/>
    </div>
  );
}

export default HangManComp;

export const FullHangmanDiv = ({lost, hangmanArr}) => {
  return (
    <div className="full-hangman">
      {lost > 0 ? <div className="strightpole-hangman"></div> : ""}
      {hangmanArr?.map((item) => item)}
    </div>
  );
};
