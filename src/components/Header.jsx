import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ progress, lives }) => {
  const navigate = useNavigate();

  const maxHearts = 5;

  // Create an array of heart images based on the number of lives remaining
  const hearts = Array.from({ length: maxHearts }, (_, index) => (
    <img
      key={index}
      src="../heart.png"
      className={`cursor-pointer ${
        index < lives ? "" : "opacity-50"
      }`}
    ></img>
  ));

  return (
    <div className="flex flex-col mb-10 w-96 absolute top-20">
      <div className="w-96 justify-between navbar bg-base-100">
        <img
          src="../arrowback.png"
          className="cursor-pointer"
          onClick={() => navigate("/chooseyourlearning")}
        ></img>
        <div className="flex">
          {hearts}
        </div>
      </div>
      {progress && (
        <div className="self-center w-80">
          <progress
            className="progress progress-primary h-5 mt-5 bg-white w-80"
            value="60"
            max="100"
          ></progress>
        </div>
      )}
    </div>
  );
};

export default Header;
