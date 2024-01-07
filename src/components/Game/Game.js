import React from "react";

import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";
import WordInput from "../WordInput/WordInput";
import PrevGuesses from "../PrevGuesses/PrevGuesses";
import GameBanner from "../GameBanner/GameBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState("playing");

  const handleSubmit = (value) => {
    if (guesses.length >= 6) return;
    const result = checkGuess(value, answer);
    const newGuesses = [...guesses, result];
    if (result.every((value) => value.status === "correct"))
      setGameResult("Winner");
    else if (newGuesses.length === 6) setGameResult("Loser");
    setGuesses(newGuesses);
  };

  const restart = () => {
    setGuesses([]);
    setGameResult("playing");
  };

  return (
    <div>
      <PrevGuesses guesses={guesses} />
      <WordInput onSubmit={handleSubmit} gameEnd={gameResult !== "playing"} />
      <GameBanner gameResult={gameResult} guesses={guesses} restart={restart} />
    </div>
  );
}

export default Game;
