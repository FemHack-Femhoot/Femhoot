import React, { useState, useEffect } from "react";

export default function DisplayResponse({
  responses,
  rightAnswer,
  setIsRightAnswer,
}) {
  const [randomResponses, setRandomResponses] = useState([]);
  const [chosenAnswer, setChosenAnswer] = useState("");

  useEffect(() => {
    console.log({ chosenAnswer, rightAnswer });
    if (chosenAnswer === rightAnswer) {
      setIsRightAnswer(true);
    } else {
      setIsRightAnswer(false);
    }
  }, [chosenAnswer]);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  useEffect(() => {
    setRandomResponses(shuffleArray(responses));
  }, [responses]);

  return (
    <div className="w-4/5 flex flex-col">
      {randomResponses.map((item) => (
        <button
          className="text-white rounded-md my-1 w-full"
          style={{ background: "#7b3bec" }}
          key={item}
          onClick={() => {
            setChosenAnswer(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
