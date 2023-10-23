import { useState } from 'react';

function Player({ playerName, maxScore, setWinner }) {
  const [score, setScore] = useState(0);

  console.log({ score, maxScore });
  if (score == maxScore) {
    console.log({ playerName });
    setWinner(playerName);
  }

  return (
    <div>
      <h1>{playerName}</h1>
      <h2>score {score}</h2>
      <button
        onClick={() => {
          if (score !== 0) {
            setScore((prevScore) => {
              return prevScore - 1;
            });
          }
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setScore((prevScore) => {
            return prevScore + 1;
          });
        }}
      >
        +
      </button>
    </div>
  );
}

export default Player;
