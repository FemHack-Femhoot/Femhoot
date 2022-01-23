import React from "react";

export default function DisplayEndGame({ setIsEndGame }) {
  return (
    <div className="flex flex-col">
      <span>Final score</span>
      <button
        onClick={() => {
          setIsEndGame(false);
        }}
      >
        Play again
      </button>
    </div>
  );
}
