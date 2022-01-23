import React, { useState } from "react";
import DisplayQuiz from "./components/DisplayQuiz";
import DisplayFacts from "./components/DisplayFacts";
import DisplayEndGame from "./components/DisplayEndGame";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

function App() {
  const [isEndGame, setIsEndGame] = useState(false);
  return (
    <div className="h-full w-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex flex-col items-center">
      <Topbar />
      <div className="flex w-3/4 flex-col h-full items-center justify-center  text-gray-700">
        {isEndGame ? (
          <DisplayEndGame setIsEndGame={setIsEndGame} />
        ) : (
          <DisplayQuiz isEndGame={isEndGame} setIsEndGame={setIsEndGame} />
        )}
        <div className="mt-8">
          <DisplayFacts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
