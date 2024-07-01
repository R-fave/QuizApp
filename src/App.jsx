import { useContext, useState } from "react";
import QuizPage from "./components/QuizPage";
import StartPage from "./components/StartPage";
import SelectPage from "./components/SelectPage";
import ScorePage from "./components/ScorePage";
import { QuizContext } from "./helper/Context";

function App() {
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [quizQues, setQuizQues] = useState();
  const [quizState, setQuizState] = useState("Start");
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");

  return (
    <QuizContext.Provider
      value={{
        count,
        setCount,
        category,
        setCategory,
        difficulty,
        setDifficulty,
        quizQues,
        setQuizQues,
        quizState,
        setQuizState,
        score,
        setScore,
        userName,
        setUserName,
      }}
    >
      <div className=" flex justify-center items-center h-screen md:px-64">
        {quizState === "Start" && <StartPage />}
        {quizState === "Select" && <SelectPage />}
        {quizState === "Quiz" && quizQues && <QuizPage />}
        {quizState === "Score" && <ScorePage />}
        {quizState === "test" && <Test />}
      </div>
    </QuizContext.Provider>
  );
}

export default App;
