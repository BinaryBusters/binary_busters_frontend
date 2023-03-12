import { useState } from "react";

const ModalButton = ({ result, onClick, onContinue }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    setIsLoading(true);
    await onClick(); // assuming onClick returns a promise that resolves when the submission is complete
    setIsLoading(false);
  };

  return (
    <div>
      <label
        htmlFor="my-modal-6"
        className="btn btn-wide text-lg"
        onClick={handleOnClick}
      >
        {isLoading ? "Loading..." : "Submit"}
      </label>
      <div
        className={`modal modal-bottom sm:modal-middle ${result && "modal-open"
          }`}
      >
        <div
          className={`modal-box rounded-none border-t-4 ${result.response_quality
            ? "border-primary bg-secondary"
            : "border-error bg-accent"
            }`}
        >
          <h3
            className={`font-bold text-4xl ${result.response_quality
              ? "text-primary"
              : "text-red-600"
              }`}
          >
            {result.response_quality ? "Good answer!" : "Nice try, but..."}
          </h3>
          <p
            className={`py-4 text-lg ${result.response_quality
              ? "text-primary"
              : "text-red-600"
              }`}
          >
            {result.response_content}
          </p>
          <div className="modal-action justify-center">
            <label
              htmlFor="my-modal-6"
              className={`btn btn-wide text-xl ${result.response_quality
                ? "btn-primary text-white"
                : "bg-accent-focus border-rose-400 hover:bg-error"
                }`}
              onClick={onContinue}
            >
              Continue
            </label>
          </div>
        </div>
      </div>
    </div>
  );


};

export default ModalButton;
