import leftArrow from "../assets/leftArrow.png";
import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../helper/Context";

const QuizPage = () => {
  const { quizQues, setQuizState, score, setScore } = useContext(QuizContext);
  const [currQues, setCurrQues] = useState(0);
  const [selAns, setSelAns] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const dataa = quizQues.map((dta) => {
      let answer = [...dta.incorrect_answers];
      let n = 4;
      let randomIndex = Math.floor(Math.random() * (n + 1));
      answer.splice(randomIndex, 0, dta.correct_answer);
      let newData = {
        prompt: dta.question,
        answer: answer,
        correctAns: dta.correct_answer,
      };
      return newData;
    });
    setData(dataa);
  }, []);

  const handleNext = () => {
    if (data[currQues].correctAns === selAns) {
      setScore(score + 1);
      setCurrQues(currQues < 10 ? currQues + 1 : 0);
    } else {
      setCurrQues(currQues < 10 ? currQues + 1 : 0);
    }
  };

  const handleEnd = () => {
    console.log("QuizEnded");
    setQuizState("Score");
  };

  const handleScore = (e) => {
    setSelAns(e.target.value);
  };

  return (
    <div className=" h-[80dvh] w-[80%] bg-gray-100 flex items-center justify-between flex-col  rounded-xl py-7">
      <div className=" flex border w-[100%]">
        <div className="flex text-[#004643] font-medium text-sm justify-start items-center flex-1">
          <img src={leftArrow} alt="" />
          <p>Previous</p>
        </div>
        <div className=" flex-1 mr-6">
          <p className=" font-medium">{currQues + 1}/10</p>
        </div>
      </div>
      <div className=" w-[80%] bg-white h-[150px] shadow-xl flex justify-center items-center px-5 rounded-xl">
        <p className=" font-medium">{data && data[currQues].prompt}</p>
      </div>

      <div className="flex flex-col w-[80%] gap-5">
        {data &&
          data[currQues].answer.map((ans) => (
            <button
              className=" bg-white rounded-xl py-2 px-4 flex justify-center hover:bg-[#ABD1C6] focus:bg-green-400"
              value={ans}
              onClick={handleScore}
            >
              {ans}
            </button>
          ))}
      </div>

      <button
        className=" bg-[#004643] rounded-xl py-2 px-4 w-[80%] text-white"
        onClick={currQues < 9 ? handleNext : handleEnd}
      >
        <p>{currQues < 9 ? "Next" : "End Quiz"}</p>
      </button>
    </div>
  );
};

export default QuizPage;
