import React from "react";
import { useNavigate } from "react-router-dom";

const GameOver = ({ levelsCompleted }) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center absolute top-30">
        <iframe
          src="https://giphy.com/embed/26u4cqiYI30juCOGY"
          allowFullScreen
          className= "mb-20"
        ></iframe>
 
      <h1 className="text-5xl font-bold mb-10">Game Over</h1>
      <p className="text-2xl mb-4">Nice!</p>
      <p className="text-xl mb-10">
        You have completed {levelsCompleted} level{levelsCompleted !== 1 && "s"}
        .
      </p>
      <button className="btn btn-wide w-80 btn-primary mt-10 text-lg text-white" onClick={()=>navigate("/workwise")}>Start over</button>
      <button className="btn btn-wide w-80 btn-neutral mt-10 text-lg" onClick={()=>navigate("/chooseyourlearning")}>Home
      </button>
    </div>
  );
};

export default GameOver;
