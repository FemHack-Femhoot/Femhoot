import React from "react";
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
          className="flex w-full bg-white pl-36"
          style={{ borderTopRightRadius: 100, borderBottomRightRadius: 100 }}
        >
          <div className="container">
            <div
              x-data="scrollProgress"
              className="inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
            >
              <svg className="w-80 h-80">
                <circle
                  stroke-width="20"
                  fill="transparent"
                  r="120"
                  cx="160"
                  cy="160"
                  style={{
                    stroke: "#FFB433",
                  }}
                />
                <circle
                  fill="none"
                  r="120"
                  cx="160"
                  cy="160"
                  style={{
                    stroke: "#EB7159",
                    strokeWidth: "20",
                    transition: "all 0.3s",
                    strokeDasharray: 120 * 2 * Math.PI,
                    strokeDashoffset:
                      120 * 2 * Math.PI - (percent / 100) * 120 * 2 * Math.PI,
                    strokeLinecap: "round",
                  }}
                />
              </svg>
              <span className="absolute text-7xl font-semibold text-femhoot-blue">{`${percent}%`}</span>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center">
                <span className="mr-12 nowrap">Acumulated score</span>
                <span className="mr-12">{acumulatedScore}</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="mr-12 nowrap">Highest score</span>
                <span className="mr-12">{maxScore}</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="mr-12 nowrap">Average score</span>
                <span className="mr-12">{averageScore.toFixed(2)}%</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsEndGame(false);
              }}
              className="bg-femhoot-red rounded-full text-femhoot-light px-6 py-2 uppercase font-semibold my-3"
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
