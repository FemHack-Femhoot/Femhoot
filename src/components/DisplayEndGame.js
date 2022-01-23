import React, { useEffect } from "react";
import PercentageCircle from "./PercentageCircle";
import Confetti from "react-confetti";
import Hand from "./../img/11.svg";
import audio from "./../assets/sound.mp3";

const height = window.innerHeight;
const width = window.innerWidth;

export default function DisplayEndGame({ setIsEndGame, user }) {
  const gameHistory = JSON.parse(localStorage.getItem("gameHistory"));
  const percent = gameHistory[user].slice(-1);
  const stats = [
    {
      title: "Acumulated score",
      value: gameHistory[user].reduce((a, b) => a + b, 0) || 0,
    },
    { title: "Highest score", value: Math.max(...gameHistory[user]) || 0 },
    {
      title: "Average score",
      value:
        gameHistory[user].length > 1
          ? gameHistory[user].reduce((a, b) => a + b, 0) /
              gameHistory[user].length -
            1
          : 0,
    },
  ];

  useEffect(() => {
    new Audio(audio).play();
  }, []);

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
              {stats.map((item) => (
                <div
                  className="flex flex-col items-center mr-12"
                  key={item?.title}
                >
                  <span className="nowrap">{item?.title}</span>
                  <span className="text-xl font-bold">{item?.value}</span>
                </div>
              ))}
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
