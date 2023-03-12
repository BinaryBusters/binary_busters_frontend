import React, { useState } from "react";
import ModalButton from "./ModalButton";
import Header from "./Header";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const WorkWise = ({scenarioNumber = 1 }) => {
  const [response, setResponse] = useState("");
  const [answer, setAnswer] = useState("");
  const [lives, setLives] = useState(5);
  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://binarybusterbackend.onrender.com/getOpenAIResponse', {
        questionId: 1,
        userResponse: response
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setAnswer(res.data);
      
      // update lives
      if (res.data === "correct") {
        setLives(lives);
      } else {
        setLives(lives - 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchScenarios = async () => {
    try {
      const res = await axios.get(
        "https://binarybusterbackend.onrender.com/getQuestion?limit=10"
      );
      return res.data;
    } catch (error) {
      throw new Error(error.res.data);
    }
  };

  const { data, isLoading, isError } = useQuery("scenarios", fetchScenarios);

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Header lives={lives} />
      <div className="card p-5 bg-white">
        <h2 className="card-title text-3xl pb-5">Scenario #{scenarioNumber}</h2>

        <div className="card-body bg-primary rounded-2xl w-80 mb-20 text-white">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error</div>
          ) : (
            <div>
              {Object.values(data).find((scenario) => (
                <div key={scenario.id}>
                  <p>{scenario}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="form-control">
          <h1 className="card-title text-3xl pb-5">Your Response</h1>
          <textarea
            className="textarea h-20 textarea-bordered textarea-primary"
            placeholder="Enter your response here"
            onChange={(e) => setResponse(e.target.value)}
          ></textarea>
        </div>
      </div>
      {/* Modal */}
      <div className="justify-center card-actions mt-10">
        <ModalButton onClick={handleSubmit} correct={answer}/>
      </div>
    </div>
  );
};

export default WorkWise;
