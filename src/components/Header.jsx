import React from "react";
import { useNavigate } from "react-router-dom";
import arrowBackIcon from "../assets/arrowback.png";
import heartIcon from "../assets/heart.png";

const Header = ({ progress, lives, backPath }) => {
  const navigate = useNavigate();

  const maxHearts = 5;

  // Create an array of heart images based on the number of lives remaining
  const hearts = Array.from({ length: maxHearts }, (_, index) => (
    <img
      key={index}
      src={heartIcon}
      className={`cursor-pointer ${
        index < lives ? "" : "opacity-50"
      }`}
    ></img>
  ));

  return (
    <div className="flex flex-col mb-10 w-96 absolute top-20 self-center">
      <div className="w-96 justify-between navbar bg-base-100">
        <img
          src={arrowBackIcon}
          className="cursor-pointer"
          onClick={() => navigate(backPath)}
        ></img>
        <div className="flex">
          {hearts}
        </div>
      </div>
      {progress !== undefined && (
        <div className="self-center w-80">
          <progress
            className="progress progress-primary h-5 mt-5 bg-white w-80"
            value={progress.toString()}
            max="100"
          ></progress>
        </div>
      )}
    </div>
  );
};

export default Header;
