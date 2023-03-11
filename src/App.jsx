import { Routes, Route } from "react-router-dom"
import CYL from './components/ChooseYourLearning';
import BugHuntLang from './components/BugHuntLang';

export default function App() {

  return (
    <Routes>
        <Route path="/chooseyourlearning" element={ <CYL/> } />
        <Route path="/bughunt/lang" element={ <BugHuntLang/> } />
    </Routes>
  )
}

