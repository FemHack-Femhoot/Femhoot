import React, { useState, useEffect } from "react";
import DisplayResponse from "./DisplayResponse";
import results from "./../questions.json";

const data = results.results;
const getRandomIndex = () => Math.floor(Math.random() * results.results.length);

export default function DisplayQuiz({ isEndGame, setIsEndGame, user }) {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(getRandomIndex());
  const [questionCounter, setQuestionCounter] = useState(1);
  const [isRightAnswer, setIsRightAnswer] = useState(undefined);

  useEffect(() => {
    if (questionCounter > 10) {
      let gameHistory = JSON.parse(localStorage.getItem("gameHistory")) || {};
      if (Object.keys(gameHistory).includes(user)) {
        console.log("aqui");
        gameHistory[user] = [...gameHistory[user], score];
        console.log("rompe");
      } else {
        gameHistory[user] = [score];
      }
      localStorage.setItem("gameHistory", JSON.stringify(gameHistory));
      setIsEndGame(true);
    }
  }, [questionCounter]);

  useEffect(() => {
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
    <div
      className="flex w-full items-center bg-white p-8 pl-36"
      style={{ borderTopRightRadius: 100, borderBottomRightRadius: 100 }}
    >
      <div className="flex flex-col w-4/5">
        <span className="font-bold text-femhoot-green text-xl">
          {questionCounter} / 10
        </span>
        <span className="text-3xl font-semibold text-femhoot-dark mt-1 mb-6">
          {data[questionNumber]?.question}
        </span>
        <DisplayResponse
          responses={[
            data[questionNumber]?.correct_answer,
            ...data[questionNumber]?.incorrect_answers,
          ]}
          rightAnswer={data[questionNumber]?.correct_answer}
          setIsRightAnswer={setIsRightAnswer}
        />
      </div>
      <div
        className="flex flex-col justify-center items-center bg-femhoot-orange text-white rounded-full"
        style={{ width: 180, height: 280 }}
      >
        <span className=" my-2 text-xl">SCORE</span>
        <span className="text-7xl mb-4 font-semibold">{score}</span>
        <span className="text-3xl">/{(questionCounter - 1) * 10}</span>
      </div>
    </div>
  );
}
