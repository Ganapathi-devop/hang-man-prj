import "./hangmancomp.css";

function HangManComp({lost, arr,newArr}) {
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
          newArr.map(item=>item)
        }
      </div>
    </div>
  );
}

export default HangManComp;
