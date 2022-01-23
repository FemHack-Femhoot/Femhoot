import React from "react";
import CloseIcon from "./../assets/closeIcon";
import Avatar from "./../img/Avatar.png";

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
          ? (
              gameHistory[user].reduce((a, b) => a + b, 0) /
                gameHistory[user].length -
              1
            ).toLocaleString(2)
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
        className="inset-1/2 bg-femhoot-blue text-white w-3/5 h-4/5 absolute m-auto rounded-lg bg-orange-700 shadow-xl flex flex-col justify-around p-12"
        style={{
          marginLeft: "-30%",
          marginTop: "-20%",
        }}
      >
        <div
          className="absolute right-0 top-0 mr-6 mt-6"
          style={{ width: 10, height: 10 }}
          onClick={() => setIsProfileOpen(false)}
        >
          <CloseIcon />
        </div>
        <div className="w-full flex px-6 items-center justify-center mb-12">
          <img src={Avatar} alt="" className="w-40 h-40 mr-12" />
          <span className="text-3xl text-center font-semibold capitalize">
            {user}
          </span>
        </div>

        <div className="flex ">
          <div className="flex w-full justify-center mb-4">
            {stats.map((item) => (
              <div
                className="flex flex-col items-center mr-12"
                key={item?.title}
              >
                <span className="nowrap">{item?.title}</span>
                <span className="text-3xl font-bold">{item?.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
