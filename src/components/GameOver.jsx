import React from "react";
import { useNavigate } from "react-router-dom";

const GameOver = ({ levelsCompleted = 2 }) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center absolute top-20">
        <iframe
          src="https://giphy.com/embed/26u4cqiYI30juCOGY"
          allowFullScreen
          className= "mb-10"
        ></iframe>
 
      <h1 className="text-5xl font-bold mb-8">Game Over</h1>
      <p className="text-2xl mb-4">Nice!</p>
      <p className="text-xl">
        You have completed {levelsCompleted} level{levelsCompleted !== 1 && "s"}
        .
      </p>
      <button className="btn btn-wide btn-primary mt-10 text-lg text-white" onClick={()=>navigate("/workwise")}>Start over</button>
      <button className="btn btn-wide btn-neutral mt-10 text-lg" onClick={()=>navigate("/chooseyourlearning")}>Home
      </button>
    </div>
  );
};

export default GameOver;
