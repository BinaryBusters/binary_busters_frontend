import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import CYL from './components/ChooseYourLearning';
import BugHuntLang from './components/BugHuntLang';
import WorkWise from "./components/WorkWise";
import BugHuntLevel from "./components/BugHuntLevel";
import BugHuntQuiz from "./components/BugHuntQuiz";
import axios from "axios";
import GameOver from "./components/GameOver";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<CYL />} />
      <Route path="/bughunt/lang" element={<BugHuntLang />} />
      <Route path="/bughunt/:language/level" element={<BugHuntLevel />} />
      <Route path="/bughunt/:language/level/:level"
        loader={({ params }) => axios.get(`https://binarybusterbackend.onrender.com/getCodeQuestion`).then(res => res.data)}
        element={<BugHuntQuiz />} />
      {/* <Route path="/workwise" element={<QueryClientProvider client={queryClient}><WorkWise /></QueryClientProvider>}
      /> */}
            <Route path="/workwise" loader={({ params }) => axios.get(`https://binarybusterbackend.onrender.com/getQuestion`).then(res => res.data)} element={<WorkWise />}
      />
      <Route path="/gameover" element={<GameOver />}
      />
    </Route>
  )
);

export default () => {
  return <RouterProvider router={router} />;
};