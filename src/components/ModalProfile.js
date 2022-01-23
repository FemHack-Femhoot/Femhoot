import React from "react";
import CloseIcon from "./../assets/closeIcon";

export default function ModalProfile({ user, setIsProfileOpen }) {
  const gameHistory = JSON.parse(localStorage.getItem("gameHistory"));
  console.log({ gameHistory });
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
  return (
    <div className="fixed w-screen h-screen z-40">
      <div
        className="opacity-20 bg-femhoot-red w-full h-screen"
        onClick={() => setIsProfileOpen(false)}
      />
      <div
        className="inset-1/2 bg-femhoot-blue text-white w-2/5 absolute m-auto rounded-lg bg-orange-700 shadow-xl flex flex-col justify-around"
        style={{
          marginLeft: "-20%",
          marginTop: "-20%",
        }}
      >
        <div
          className="absolute right-0 top-0 -mr-10 -mt-10"
          onClick={() => setIsProfileOpen(false)}
        >
          <CloseIcon />
        </div>
        <span className="text-3xl text-center font-semibold capitalize">
          {user}
        </span>
        <div className="flex ">
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
        </div>
      </div>
    </div>
  );
}
