import { useContext } from "react";
import { QuizContext } from "../helper/Context";

const ScorePage = () => {
  const { score, setQuizState, userName } = useContext(QuizContext);

  return (
    <div className=" h-[80dvh] w-[80%] bg-[#004643]/70 flex justify-center items-center flex-col pb-24 pt-24 rounded-xl">
      <div className=" text-white text-center flex flex-col gap-5">
        <p className=" font-medium text-2xl">Hi {userName} Your Score Is</p>
        <p
          className={`font-extrabold text-8xl ${
            score < 5 ? "text-red-400" : "text-green-400"
          }`}
        >
          {score}/10
        </p>
      </div>

      <button
        className=" w-[40%] bg-[#f8c660] p-2 rounded-xl mt-8"
        onClick={() => {
          setQuizState("Start");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default ScorePage;
