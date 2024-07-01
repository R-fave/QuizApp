import leftArrow from "../assets/leftArrow.png";
import { useContext } from "react";
import { QuizContext } from "../helper/Context";
import axios from "axios";

const SelectPage = () => {
  const {
    category,
    setCategory,
    difficulty,
    setDifficulty,
    setQuizQues,
    setQuizState,
  } = useContext(QuizContext);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDiffuclty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let resp = [];
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${
          category.length > 1 && category
        }&difficulty=${difficulty.length > 1 && difficulty}&type=multiple`
      )
      .then((res) => {
        setQuizQues(res.data.results);
      })
      .catch((err) => {
        console.log("fetch failed");
      });

    setQuizState("Quiz");
  };

  return (
    <div className=" h-[80dvh] w-[80%] bg-[#004643]/70 flex justify-center gap-16 items-center flex-col rounded-xl">
      <div className=" flex flex-col justify-center items-center w-[100px] h-[100px] bg-white rounded-full">
        <p className=" font-bold text-4xl m-0 text-[#004643] ">Quiz</p>
        <span className=" ml-[30px] mt-[-13px]  text-[#F8C660]">Mania</span>
      </div>

      <div>
        <form className=" flex flex-col gap-3 ">
          <label
            htmlFor="category"
            className=" font-medium text-xl text-white mb-[-8px] "
          >
            Select a category
          </label>
          <select
            name="Category"
            id="category"
            onChange={(e) => {
              handleCategory(e);
            }}
            className=" py-3 px-8"
          >
            <option value="">Select An Option</option>
            <option value="27">Animal</option>
            <option value="9">General Knowledge</option>
            <option value="12">Music</option>
            <option value="23">History</option>
            <option value="17">Science</option>
            <option value="21">Sports</option>
          </select>

          <label
            htmlFor="select-dificulty"
            className=" font-medium text-xl text-white mb-[-8px] "
          >
            Select Dificulty{" "}
          </label>
          <select
            name="Dificulty"
            id="select-dificulty"
            className=" py-3 px-8"
            onChange={(e) => {
              handleDiffuclty(e);
            }}
          >
            <option value="">Select A Dificulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <input
            type="submit"
            className=" w-[90%] bg-[#f8c660] p-2 rounded-xl mx-auto mt-5"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default SelectPage;
