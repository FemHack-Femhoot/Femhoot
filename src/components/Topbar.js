import React from "react";

export default function Topbar({
  user,
  setUser,
  setIsEndGame,
  setIsProfileOpen,
}) {
  return (
    <div className="font-extrabold w-full text-white flex justify-between p-8 bg-femhoot-red">
      <div className="flex items-end">
        <h1 className="font-display text-4xl mr-4">FemHoot</h1>
        <h2 className="text-xl font-light">Play. Learn. Get inspired.</h2>
      </div>
      <div>
        {user && (
          <span
            className="font-bold rounded-full bg-white border-2 border-white text-femhoot-red py-2 px-6 mx-3 cursor-pointer"
            onClick={() => setIsProfileOpen(true)}
          >
            {user}
          </span>
        )}
        <button
          onClick={() => {
            setIsEndGame(false);
            setUser("");
          }}
          className="rounded-full font-semibold text-white border-white border-2 py-2 px-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
