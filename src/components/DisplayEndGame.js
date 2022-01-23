import React from "react";
import PercentageCircle from "./PercentageCircle";
import Confetti from "react-confetti";
import Hand from "./../img/11.svg";

const height = window.innerHeight;
const width = window.innerWidth;

export default function DisplayEndGame({ setIsEndGame, user }) {
  const gameHistory = JSON.parse(localStorage.getItem("gameHistory"));
  const acumulatedScore = gameHistory[user].reduce((a, b) => a + b, 0);
  const maxScore = Math.max(...gameHistory[user]);
  const averageScore = acumulatedScore / gameHistory[user].length;
  const percent = gameHistory[user].slice(-1);
  return (
    <>
      <div className="flex w-screen items-center">
        <Confetti width={width} height={height} recycle={false} />

        <div
          className="flex w-full bg-white pl-36 pb-4 mt-12"
          style={{
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            minWidth: "56vh",
          }}
        >
          <div className="flex flex-col items-center w-full px-20">
            <PercentageCircle percent={percent} />
            <div className="flex w-full justify-center mb-4">
              <div className="flex flex-col items-center mr-12">
                <span className="nowrap">Acumulated score</span>
                <span className="text-xl font-bold">{acumulatedScore}</span>
              </div>
              <div className="flex flex-col items-center mr-12">
                <span className="nowrap">Highest score</span>
                <span className="text-xl font-bold">{maxScore}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="nowrap">Average score</span>
                <span className="text-xl font-bold">
                  {averageScore.toFixed(2)}%
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsEndGame(false);
              }}
              className="nowrap bg-femhoot-red rounded-full text-femhoot-light px-6 py-2 uppercase font-semibold my-3"
              style={{ letterSpacing: "3px" }}
            >
              Play again
            </button>
          </div>
        </div>
        <img
          src={Hand}
          className="w-80 h-80 mx-36"
          alt="ok-hand"
          style={{ transform: "rotate(20deg)" }}
        />
      </div>
    </>
  );
}
