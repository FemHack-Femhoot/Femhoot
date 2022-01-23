import React, { useState } from "react";

export default function ModalBlocker({ user, setUser }) {
  const [userHelper, setUserHelper] = useState("");

  const setUserInLocalStorage = () => {
    const gameHistory = JSON.parse(localStorage.getItem("gameHistory")) || {};
    if (!Object.keys(gameHistory).includes(userHelper)) {
      localStorage.setItem(
        "gameHistory",
        JSON.stringify({
          ...gameHistory,
          [userHelper]: [0],
        })
      );
    }
  };

  return (
    <div className="fixed w-screen h-screen z-40">
      <div className="opacity-20 bg-femhoot-red w-full h-screen" />
      <div
        className="inset-1/2 bg-white w-2/5 absolute m-auto rounded-lg bg-orange-700"
        style={{
          marginLeft: "-20%",
          marginTop: "-20%",
        }}
      >
        <div className="flex flex-col h-full justify-around items-center bg-white rounded-xl shadow-xl">
          <label className="text-xl mt-12 font-semibold text-femhoot-blue">
            Type your username and start playing
          </label>
          <input
            type="text"
            className="bg-femhoot-red text-lg font-semibold rounded-lg focus:outline-none text-white py-4 w-2/3 text-center"
            value={userHelper}
            onChange={(e) => {
              setUserHelper(e.target.value);
            }}
          />
          <button
            className="border-2 py-2 px-6 rounded-full uppercase text-femhoot-red border-femhoot-red font-bold text-lg"
            style={{ letterSpacing: "3px" }}
            onClick={() => {
              setUser(userHelper);
              setUserInLocalStorage();
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
