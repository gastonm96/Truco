import { useState } from 'react';
import Player from '../Player/Player';

function Board() {
  const [maxScore, setMaxScore] = useState(0);
  const [winner, setWinner] = useState('');
  const [gameRun, setGameRun] = useState(false);

  console.log({ winner });

  return (
    <div>
      {!gameRun && (
        <>
          <input
            placeholder='Maximo'
            onChange={() => {
              setMaxScore(event.target.value);
            }}
          />
          <p>{maxScore}</p>
          <button
            onClick={() => {
              setGameRun(true);
            }}
          >
            Empezar
          </button>
        </>
      )}

      {gameRun && (
        <>
          <Player
            playerName='Jugador 1'
            maxScore={maxScore}
            setWinner={setWinner}
          ></Player>
          <Player
            playerName='Jugador 2'
            maxScore={maxScore}
            setWinner={setWinner}
          ></Player>
          {winner && <h1>Ganador: {winner}</h1>}
        </>
      )}
    </div>
  );
}

export default Board;
