import React, { useState, useEffect } from "react";
import DisplayResponse from "./DisplayResponse";
import results from "./../questions.json";

const data = results.results;
const getRandomIndex = () => Math.floor(Math.random() * results.results.length);

export default function DisplayQuiz({ isEndGame, setIsEndGame }) {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(getRandomIndex());
  const [questionCounter, setQuestionCounter] = useState(1);
  const [isRightAnswer, setIsRightAnswer] = useState(undefined);

  useEffect(() => {
    if (!isEndGame) {
      setQuestionCounter(1);
      setQuestionNumber(getRandomIndex());
      setScore(0);
    }
  }, [isEndGame]);

  useEffect(() => {
    if (questionCounter > 10) {
      setIsEndGame(true);
    }
  }, [questionCounter]);

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
  );
}
