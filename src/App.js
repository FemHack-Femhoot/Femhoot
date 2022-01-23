import React, { useState } from "react";
import results from "./questions.json";
import DisplayResponse from "./components/DisplayResponse";

function App() {
  const data = results.results;
  const getRandomIndex = () => Math.floor(Math.random() * data.length);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(getRandomIndex());
  const [questionCounter, setQuestionCounter] = useState(1);

  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
      {questionCounter <= 10 ? (
        <>
          <span>{data[questionNumber]?.question}</span>
          <DisplayResponse
            responses={[
              data[questionNumber]?.correct_answer,
              ...data[questionNumber]?.incorrect_answers,
            ]}
          />
          <button
            onClick={() => {
              setQuestionCounter(questionCounter + 1);
              setQuestionNumber(getRandomIndex());
            }}
          >
            Next Question
          </button>
          <button
            onClick={() => {
              setScore(score + 10);
            }}
          >
            Right Answer
          </button>
          <span>Score: {score}</span>
          <span>Question: {questionCounter} / 10</span>
        </>
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
    </div>
  );
}

export default App;
