import React, { useState, useEffect } from "react";
import DisplayQuiz from "./components/DisplayQuiz";
import DisplayFacts from "./components/DisplayFacts";
import DisplayEndGame from "./components/DisplayEndGame";
import ModalBlocker from "./components/ModalBlocker";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Image from "./img/fem.svg";

function App() {
  const [isEndGame, setIsEndGame] = useState(false);
  const [user, setUser] = useState("hola");

  return (
    <>
      {!user && <ModalBlocker user={user} setUser={setUser} />}
      <div className="h-full w-screen bg-femhoot-light flex flex-col items-center">
        <Topbar setUser={setUser} />
        <div className="flex flex-col h-full items-center justify-center text-gray-700">
          {!isEndGame ? (
            <DisplayEndGame setIsEndGame={setIsEndGame} user={user} />
          ) : (
            <div className="w-full flex justify-between">
              <DisplayQuiz
                isEndGame={isEndGame}
                setIsEndGame={setIsEndGame}
                user={user}
              />
              <img src={Image} alt={"FemHoot"} className="mx-24" />
            </div>
          )}
          <div className="mt-8 w-screen flex justify-between">
            <DisplayFacts />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
