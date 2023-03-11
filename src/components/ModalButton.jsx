import React from "react";

const ModalButton = ({correct}) => {
  if (correct) {
    const title = "Correct";
    const answer = "Why the answer is incorrect/correct";

    return (
      <div className="">
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-none border-t-4 border-primary bg-secondary">
          <h3 className="font-bold text-4xl text-primary">
            {title}
          </h3>
          <p className="py-4 text-lg text-primary">
            {answer}
          </p>
          <div className="modal-action justify-center">
            <label htmlFor="my-modal-6" className="btn btn-wide text-xl btn-primary text-white">
              Continue
            </label>
          </div>
        </div>
      </div>
    </div>
    )
  }
  else {
    const title = "Incorrect";
    const answer = "Why the answer is incorrect/correct";

    return (
      <div className="">
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-none border-t-4 border-error bg-accent">
          <h3 className="font-bold text-4xl text-red-600">
            {title}
          </h3>
          <p className="py-4 text-lg text-red-600">
            {answer}
          </p>
          <div className="modal-action justify-center">
            <label htmlFor="my-modal-6" className="btn btn-wide text-xl bg-accent-focus border-rose-400 hover:bg-error">
              Continue
            </label>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  return (
    <div className="">
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-none border-t-4 border-primary bg-secondary">
          <h3 className="font-bold text-4xl text-primary">
            {title}
          </h3>
          <p className="py-4 text-lg text-primary">
            {answer}
          </p>
          <div className="modal-action justify-center">
            <label htmlFor="my-modal-6" className="btn btn-wide text-xl btn-primary">
              Continue
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalButton;
