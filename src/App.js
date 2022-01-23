import React, { useState, useEffect } from "react";
import results from "./questions.json";
import DisplayResponse from "./components/DisplayResponse";
import DisplayFacts from "./components/DisplayFacts";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

function App() {
  const data = results.results;
  const getRandomIndex = () => Math.floor(Math.random() * data.length);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(getRandomIndex());
  const [questionCounter, setQuestionCounter] = useState(1);
  const [isRightAnswer, setIsRightAnswer] = useState(undefined);

  useEffect(() => {
    console.log("is right ans", isRightAnswer);
    if (isRightAnswer === true) {
      setScore(score + 10);
      setQuestionCounter(questionCounter + 1);
    } else if (isRightAnswer === false) {
      setQuestionCounter(questionCounter + 1);
    }
    setIsRightAnswer(undefined);
  }, [isRightAnswer]);

  useEffect(() => {
    setQuestionNumber(getRandomIndex());
  }, [questionCounter]);

  return (
    <div className="h-full w-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex flex-col items-center">
      <Topbar />
      {/* Main */}
      <div className="flex w-3/4 flex-col h-full items-center justify-center  text-gray-700">
        {questionCounter <= 10 ? (
          <div className="flex w-full items-center bg-white rounded-xl p-8">
            <div className="flex flex-col w-4/5">
              <span>{data[questionNumber]?.question}</span>
              <span>Question: {questionCounter} / 10</span>
              <DisplayResponse
                responses={[
                  data[questionNumber]?.correct_answer,
                  ...data[questionNumber]?.incorrect_answers,
                ]}
                rightAnswer={data[questionNumber]?.correct_answer}
                setIsRightAnswer={setIsRightAnswer}
              />
            </div>
            <div className="w-1/5 flex flex-col items-center">
              <span className="my-2 text-xl">Score</span>
              <span className="text-6xl">
                {score}/{(questionCounter - 1) * 10}
              </span>
            </div>
          </div>
        ) : (
          <>
            <span>final score: {score}</span>
            <button
              onClick={() => {
                setScore(0);
                setQuestionCounter(1);
              }}
            >
              Play again
            </button>
          </>
        )}
        <div className="mt-8">
          <DisplayFacts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
