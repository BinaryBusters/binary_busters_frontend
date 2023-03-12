import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GameOver = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const level = location.state.level;
  const score = location.state.score;
  const language = location.state.language;
  const question = location.state.question;

  return (
    <div className="flex flex-col justify-center items-center absolute top-30">
      <iframe
        src="https://giphy.com/embed/26u4cqiYI30juCOGY"
        allowFullScreen
        className="mb-20"
      ></iframe>
      <h1 className="text-5xl font-bold mb-10">Game Over</h1>
      <p className="text-2xl mb-4">Congratulations!</p>
      {language &&
        <p className="text-xl mb-10">
          You have scored {score} on {language} level {level}!
        </p>
      }
      {question && <p className="text-xl mb-10">
        You have passed {question} question{question !== 1 && "s"}.
      </p>}
      {language ? <button className="btn btn-wide w-80 btn-primary mt-10 text-lg text-white" onClick={() => navigate(`/bughunt/${language}/level/${level + 1}`)}>Next level</button> : <button className="btn btn-wide w-80 btn-primary mt-10 text-lg text-white" onClick={() => navigate("/workwise")}>Start over</button>}
      <button className="btn btn-wide w-80 btn-neutral mt-10 text-lg" onClick={() => navigate("/")}>Return to home</button>
    </div>
  );
};

export default GameOver;
