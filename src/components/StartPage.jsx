import { useContext } from "react";
import { QuizContext } from "../helper/Context";

const StartPage = () => {
  const { setQuizState, setUserName } = useContext(QuizContext);
  return (
    <div className=" h-[80dvh] w-[80%] bg-[#004643]/70 flex justify-between items-center flex-col pb-24 pt-24 rounded-xl">
      <div className=" flex flex-col justify-center items-center w-[100px] h-[100px] bg-white rounded-full">
        <p className=" font-bold text-4xl m-0 text-[#004643] ">Quiz</p>
        <span className=" ml-[30px] mt-[-13px]  text-[#F8C660]">Mania</span>
      </div>

      <div className="flex flex-col w-[90%] mb-10">
        <label htmlFor="#inputbox" className="text-white text-sm mb-3">
          Enter Your Name
        </label>
        <input
          type="text"
          id="inputbox"
          className=" w-[100%] p-2 bg-[#004643]/0 border rounded-xl placeholder:text-white placeholder:text-sm focus:outline-none text-white "
          placeholder="John Doe"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <button
        className=" w-[90%] bg-[#f8c660] p-2 rounded-xl"
        onClick={() => {
          setQuizState("Select");
        }}
      >
        Start
      </button>
    </div>
  );
};

export default StartPage;
