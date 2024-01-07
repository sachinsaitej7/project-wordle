import React from "react";
import { range } from "../../utils";

function PrevGuesses({ guesses }) {
  if (!guesses.length) return null;

  return (
    <div className="guess-results">
      {guesses.map((g, index) => (
        <p key={index} className="guess">
          {range(5).map((ind) => {
            const { status = "", letter = "" } = g[ind] || {};
            return (
              <span key={ind} className={`cell ${status}`}>
                {letter}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default PrevGuesses;
