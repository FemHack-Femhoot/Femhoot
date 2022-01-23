import React, { useState } from "react";
// import women from "./../women-in-tech.json";
import women from "./../women-in-tech-new.json";
import Image from "./../img/quotes.svg";

// console.log(women);

export default function DisplayFacts() {
  const [woman, setWoman] = useState(
    women[Math.floor(Math.random() * women.length)]
  );

  return (
    <div className="flex justify-between items-center px-24 w-full">
      <div className="flex items-center flex-1">
        <div className="relative mr-8">
          <img src={Image} alt="quotes" className="absolute z-10 right-0" />
          <img
            className="rounded-full w-40 h-40 mr-4 filter grayscale"
            src={woman?.image_path}
            alt={woman?.title}
            style={{ minWidth: "10rem", objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1
              className="text-xl font-semibold text-femhoot-blue uppercase underline mb-2"
              style={{ letterSpacing: "4px" }}
            >
              {woman?.title}
            </h1>
          </div>
          <p className="text-xl leading-relaxed ml-8">{woman?.fact}</p>
        </div>
      </div>
      <button
        onClick={() => {
          setWoman(women[Math.floor(Math.random() * women?.length)]);
        }}
        className="p-2 rounded-full px-6 py-2 mt-4 border-2 border-femhoot-green text-femhoot-green uppercase font-semibold ml-8 hover:bg-femhoot-green hover:border-none hover:text-femhoot-light"
        style={{ whiteSpace: "nowrap" }}
      >
        get new fact
      </button>
    </div>
  );
}
