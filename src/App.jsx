import { useState } from "react";
import "./App.css";
import WorkWise from "./components/WorkWise";

function App() {
  const text =
    "You are a manager at a company and you have a new employee. You are in a meeting and you need to take a call from the new employee. What do you do?";

  return (
    <div className="flex flex-col justify-center items-center">
      <WorkWise scenarioText={text} />
    </div>
  );
}

export default App;
