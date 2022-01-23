import React, { useState, useEffect } from "react";

export default function DisplayResponse({ responses }) {
  const [randomResponses, setRandomResponses] = useState([]);
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
    <div className="w-1/2 flex flex-col">
      {randomResponses.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
