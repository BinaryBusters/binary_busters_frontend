import { Routes, Route } from "react-router-dom"
import CYL from './components/ChooseYourLearning';
import BugHuntLang from './components/BugHuntLang';
import WorkWise from "./components/WorkWise";
import BugHuntLevel from "./components/BugHuntLevel";
import BugHuntQuiz from "./components/BugHuntQuiz";
import axios from "axios";

export default function App() {
  const text =
    "You are a manager at a company and you have a new employee. You are in a meeting and you need to take a call from the new employee. What do you do?";
  return (
    <Routes>
      <Route path="/chooseyourlearning" element={<CYL />} />
      <Route path="/bughunt/lang" element={<BugHuntLang />} />
      <Route path="/bughunt/:language/level" element={<BugHuntLevel />} />
      <Route path="/bughunt/:language/level/:level"
        // loader={({params}) => axios.get(`https://binarybusterbackend.onrender.com/getQuestion`) }
        element={<BugHuntQuiz />} />
      <Route path="/workwise" element={<WorkWise scenarioText={text} />} />
    </Routes>
  )
}
