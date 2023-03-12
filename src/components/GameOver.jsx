import React from "react";

const GameOver = ({ levelsCompleted }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold mb-8">Game Over</h1>
      <p className="text-2xl mb-4">Congratulations!</p>
      <p className="text-xl">
        You have completed {levelsCompleted} level{levelsCompleted !== 1 && "s"}.
      </p>
    </div>
  );
};

export default GameOver;
