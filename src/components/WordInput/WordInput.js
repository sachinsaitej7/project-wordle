import React from "react";

function WordInput({ onSubmit, gameEnd }) {
  const [value, setValue] = React.useState("");

  const handleFinish = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleFinish} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        disabled={gameEnd}
      />
    </form>
  );
}

export default WordInput;
