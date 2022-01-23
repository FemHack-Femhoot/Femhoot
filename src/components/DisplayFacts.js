import React, { useState } from "react";
import women from "./../women-in-tech.json";

export default function DisplayFacts() {
  const [woman, setWoman] = useState(
    women[Math.floor(Math.random() * women.length)]
  );

  return (
    <div className="flex flex-col justify-center items-center bg-white bg-opacity-50 rounded-xl p-8 w-4/5">
      <div className="flex">
        <img
          className="rounded-full w-40 h-40 mr-4"
          src={woman?.image_path}
          alt={woman?.name}
          style={{ minWidth: "10rem" }}
        />
        <div className="flex flex-col justify-around m-1">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">{woman?.name}</h1>
          </div>
          <p className="block-with-text">{woman?.details}</p>
        </div>
      </div>
      <button
        onClick={() => {
          setWoman(women[Math.floor(Math.random() * women?.length)]);
        }}
        className="w-3/12 p-2 rounded-full px-6 py-2 text-white mt-4"
        style={{ background: "#7b3bec" }}
      >
        Shuffle
      </button>
    </div>
  );
}
