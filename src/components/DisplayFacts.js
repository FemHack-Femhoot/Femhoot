import React, { useState } from "react";
import women from "./../women-in-tech.json";

export default function DisplayFacts() {
  const [woman, setWoman] = useState(
    women[Math.floor(Math.random() * women.length)]
  );

  return (
    <div className="flex justify-center bg-gray-400 w-4/5">
      <img
        className="rounded-full w-40 h-40"
        src={woman?.image_path}
        alt={woman?.name}
        style={{ minWidth: "10rem" }}
      />
      <div className="flex flex-col justify-around m-1">
        <div className="flex justify-between">
          <h1>{woman?.name}</h1>
          <button
            onClick={() => {
              setWoman(women[Math.floor(Math.random() * women?.length)]);
            }}
            className="bg-white p-2 rounded-md"
          >
            Shuffle
          </button>
        </div>
        <p className="block-with-text">{woman?.details}</p>
      </div>
    </div>
  );
}
