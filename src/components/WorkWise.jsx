import React, { useState } from "react";
import ModalButton from "./ModalButton";
import Header from "./Header";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WorkWise = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [answer, setAnswer] = useState("");
  const [lives, setLives] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [scenarioNumber, setScenarioNumber] = useState(1);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://binarybusterbackend.onrender.com/getOpenAIResponse",
        {
          questionId: scenarioNumber,
          userResponse: response,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAnswer(res.data);
      // update lives
      if (res.data.response_quality == true) {
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
      setQuestions(Object.values(res.data));
      return res.data;
    } catch (error) {
      throw new Error(error.res.data);
    }
  };

  const handleContinue = () => {
    if (lives === 0 || questions.length == 0) {
      navigate("/gameover");
    } else {
      setQuestions((questions) => questions.slice(1));
      setScenarioNumber(scenarioNumber + 1);
      setResponse("");
    }
  };

  const { data, isLoading, isError } = useQuery("scenarios", fetchScenarios);

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Header lives={lives} backPath="/chooseyourlearning" />
      <div className="card p-5 bg-white">
        <h2 className="card-title text-3xl pb-5">Scenario #{scenarioNumber}</h2>

        <div className="card-body bg-primary rounded-2xl w-80 mb-20 text-white">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error</div>
          ) : (
            <div>
                  <p>{questions[0]}</p>
            </div>
          )}
        </div>
        <div className="form-control">
          <h1 className="card-title text-3xl pb-5">Your Response</h1>
          <textarea
            className="textarea h-20 textarea-bordered textarea-primary"
            placeholder="Enter your response here"
            onChange={(e) => setResponse(e.target.value)
            }
            value={response}
          ></textarea>
        </div>
      </div>
      {/* Modal */}
      
        <div className="justify-center card-actions mt-10">
        <ModalButton onClick={handleSubmit} correct={answer} onContinue={handleContinue} />
      </div>
      
    </div>
  );
};

export default WorkWise;
