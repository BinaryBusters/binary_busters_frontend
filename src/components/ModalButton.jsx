import React from "react";
import { useNavigate } from "react-router-dom";

const goodTitles = [
  "Good answer!",
  "Great job!",
  "You got it!",
  "Correct!",
  "Nice!",
  "Awesome!",
  "Well done!",
  "POGGERS?!?!",
];

const badTitles = [
  "Not quite...",
  "Incorrect!",
  "Wrong!",
  "Nope!",
  "Not quite!",
  "Nice try!",
  "NOT POGGERS >:(",
];

const ModalButton = ({ correct, onClick }) => {
  const navigate = useNavigate();

  

  if (correct.response_quality === true) {
    const title = goodTitles[Math.floor(Math.random() * goodTitles.length)];
    const answer = correct.response_content;

    return (
      <div className="">
        {/* The button to open modal */}
        <label
          htmlFor="my-modal-6"
          className="btn btn-wide text-lg"
          onClick={onClick}
        >
          Submit
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />

        {!answer || (
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box rounded-none border-t-4 border-primary bg-secondary">
              <h3 className="font-bold text-4xl text-primary">{title}</h3>
              <p className="py-4 text-lg text-primary">{answer}</p>
              <div className="modal-action justify-center">
                <label
                  htmlFor="my-modal-6"
                  className="btn btn-wide text-xl btn-primary text-white"
                  onClick={() => navigate("/gameover")}
                >
                  Continue
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    const title = badTitles[Math.floor(Math.random() * badTitles.length)]
    const answer = correct.response_content;

    return (
      <div className="">
        {/* The button to open modal */}
        <label
          htmlFor="my-modal-6"
          className="btn btn-wide text-2xl w-80"
          onClick={onClick}
        >
          Submit
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        {!answer || (
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box rounded-none border-t-4 border-error bg-accent">
              <h3 className="font-bold text-4xl text-red-600">{title}</h3>
              <p className="py-4 text-lg text-red-600">{answer}</p>
              <div className="modal-action justify-center">
                <label
                  htmlFor="my-modal-6"
                  className="btn btn-wide text-xl bg-accent-focus border-rose-400 hover:bg-error"
                  onClick={() => navigate("/gameover")}
                >
                  Continue
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default ModalButton;
