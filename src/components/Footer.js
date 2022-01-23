import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex items-end p-8 bottom-0 bg-femhoot-light">
      <p>Made with love by</p>
      <a href="https://github.com/carobatata" className="pl-2">
        Carolina
      </a>
      <span className="ml-2">|</span>
      <a href="https://github.com/crisouteda" className="pl-2">
        Cristina
      </a>
      <span className="ml-2">|</span>
      <a href="https://github.com/MariviEscudero" className="pl-2">
        Marivi
      </a>
      <span className="ml-2">|</span>
      <a href="https://github.com/agustinaoh" className="pl-2">
        Agustina
      </a>{" "}
      <span className="ml-3">♥</span>
    </footer>
  );
}
