import logo from "./logo.svg";
import { useState, useEffect, createRef, useRef } from "react";
import "./App.css";

const player1KeyMap = { w: -20, s: 20 };
const player2Keymap = { u: -20, j: 20 };

function App() {
  const [playerLocation, setPlayerLocation] = useState(100);
  const [player2Location, setPlayer2Location] = useState(100);

  const player = useRef();
  const player2 = useRef();

  useEffect(() => {
    player.current.focus();
    player2.current.focus();
  }, []);

  //* in the case of 2 player who move first the next one cant move and game will broke
  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => handleMove(e), { once: true });
  // }, [playerLocation, player2Location]);

  const handlePlayer1Move = ({ key }) => {
    setPlayerLocation(playerLocation + player1KeyMap[key]);
  };

  const handlePlayer2Move = ({ key }) => {
    setPlayer2Location(player2Location + player2Keymap[key]);
  };
  console.log(player2Location);

  // const locationStyle = {
  //   posotion : 'fixed',
  //   top : `${location}px`
  // }
  // const prop = {
  //   ref : player,
  //   onkeydown : handleMove,
  //   tabIndex : 0,t
  //   style : locationStyle
  // }

  //! problem is when you change the direction player bounce

  //^ make restriction for player to dont move out of screen
  return (
    <div className="App">
      <div
        ref={player}
        onKeyDown={({ key }) => {
          handlePlayer1Move(key);
          console.log();
        }}
        className="player1"
        style={{
          top: `${playerLocation}px`,
        }}
      ></div>
      <div
        ref={player2}
        onKeyDown={({ key }) => {
          handlePlayer2Move(key);
        }}
        className="player2"
        style={{
          top: `${player2Location}px`,
        }}
      ></div>
    </div>
  );
}

export default App;
