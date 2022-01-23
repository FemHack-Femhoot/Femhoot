import React, { useState } from "react";

export default function ModalBlocker({ user, setUser }) {
  const [userHelper, setUserHelper] = useState("");
  return (
    <div className="fixed w-screen h-screen z-40">
      <div className="opacity-20 bg-yellow-700 w-full h-screen" />
      <div
        className="inset-1/2 bg-white w-2/5 h-2/5 absolute m-auto rounded-lg bg-orange-700"
        style={{
          marginLeft: "-20%",
          marginTop: "-20%",
        }}
      >
        <form className="flex flex-col h-full justify-around items-center bg-femhoot-light rounded-lg">
          <label className="text-xl">Username:</label>
          <input
            type="text"
            className="bg-femhoot-red rounded-lg"
            value={userHelper}
            onChange={(e) => {
              setUserHelper(e.target.value);
            }}
          />
          <button
            className="border-2 p-2 rounded-md border-femhoot-red"
            onClick={() => setUser(userHelper)}
          >
            Log in
          </button>
        </form>
        <span>{userHelper}</span>
      </div>
    </div>
  );
}
