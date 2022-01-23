import React from "react";

export default function Topbar({ user, setUser, setIsEndGame }) {
  return (
    <div className="font-extrabold w-full text-white flex justify-between p-8 bg-femhoot-red">
      <div className="flex items-end">
        <h1 className="font-display text-4xl mr-4">FemHoot</h1>
        <h2 className="text-xl font-light">Play. Learn. Get inspired.</h2>
      </div>
      <div>
        <span className="font-bold rounded-full text-white border border-white py-2 px-6 mx-3">
          {user}
        </span>
        <button
          onClick={() => {
            setIsEndGame(false);
            setUser("");
          }}
          className="bg-white rounded-full font-semibold text-femhoot-red py-2 px-6"
        >
          Change user
        </button>
      </div>
    </div>
  );
}
