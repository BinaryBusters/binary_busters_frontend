import { Routes, Route } from "react-router-dom"
import CYL from './components/ChooseYourLearning';
import BugHuntLang from './components/BugHuntLang';
import WorkWise from "./components/WorkWise";
import GameOver from "./components/GameOver";

export default function App() {
  const text =
  "You are a manager at a company and you have a new employee. You are in a meeting and you need to take a call from the new employee. What do you do?";
  return (
    <Routes>
        <Route path="/chooseyourlearning" element={ <CYL/> } />
        <Route path="/bughunt/lang" element={ <BugHuntLang/> } />
        <Route path="/workwise" element={ <WorkWise scenarioText={text} /> }
         />
         <Route path="/gameover" element={ <GameOver/> }
         />
    </Routes>
  )
}
