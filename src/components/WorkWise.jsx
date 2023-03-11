import React from "react";
import ModalButton from "./ModalButton";

const WorkWise = ({ scenarioText }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card p-5 bg-white">
        <h2 className="card-title text-3xl pb-3">Scenario</h2>
        <div className="card-body bg-primary rounded-2xl w-80 mb-10 text-white">
          <p>{scenarioText}</p>
        </div>
        <div className="form-control">
          <h1 className="card-title text-3xl pb-3">Your Response</h1>
          <textarea
            className="textarea h-24 textarea-bordered textarea-primary"
            placeholder="Enter your response here"
          ></textarea>
        </div>
      </div>
      {/* Modal */}
      <div className="justify-center card-actions mt-10">
        <ModalButton/>
        </div>
    </div>
  );
}

export default WorkWise;