import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({progress}) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full mb-10 w-96 absolute top-20">
      <div className="w-96 justify-between navbar bg-base-100">
        <img
          src="../arrowback.png"
          className="cursor-pointer"
          onClick={() => navigate("/chooseyourlearning")}
        ></img>
        <div className="">
          <img src="../heart.png" className="cursor-pointer"></img>
          <img src="../heart.png" className="cursor-pointer"></img>
          <img src="../heart.png" className="cursor-pointer"></img>
          <img src="../heart.png" className="cursor-pointer"></img>
          <img src="../heart.png" className="cursor-pointer"></img>
        </div>
      </div>
      {progress && <div className="self-center w-80">
        <progress
          className="progress progress-primary h-5 mt-5 bg-white w-80"
          value="60"
          max="100"
        ></progress>
      </div>}
      
    </div>
  );
};

export default Header;
