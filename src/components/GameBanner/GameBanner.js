import React from "react";

function GameBanner({ gameResult, guesses, restart }) {
  let bannerContent = null;

  if (gameResult === "Winner")
    bannerContent = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    );
  else if (gameResult === "Loser")
    bannerContent = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
    );

  return (
    <div>
      {bannerContent}
      {bannerContent && <button onClick={restart} className="restart-button">Restart</button>}
    </div>
  );
}

export default GameBanner;
