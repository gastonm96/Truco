import { useState } from 'react';
import Player from '../Player/Player';

// Board es el "tablero", aca van a estar los jugadores
function Board() {
  // Este estado lo usamos para definir "a cuanto se esta jugando" (en el truco es habitual 15 o 30)
  const [maxScore, setMaxScore] = useState(0);
  // Este estado lo usamos para saber quien es el ganador, empieza sin ganador
  const [winner, setWinner] = useState('');
  // Este estado lo usamos para saber si el juego ya empezo o aun no, empieza en false porque aun no empezo
  const [gameRun, setGameRun] = useState(false);

  return (
    <div>
      {/* aca el !gamerun && ...  significa que si se cumple la primera condicion, osea !gameRun (lo que quiere decir que el juego NO EMPEZO
        entonces en ese caso se evalua lo sigueinte, osea el input, buton, etc*/}
      {!gameRun && (
        <>
          {/* Aca usamos este input para que pueda escribir "a cuanto se juega" */}
          <input
            placeholder='Maximo'
            onChange={() => {
              // Aca seteamos el score maximo, osea a cuanto se juega, al ser un input el valor escrito en pantalla esta en event.target.value
              setMaxScore(event.target.value);
            }}
          />
          <p>{maxScore}</p>
          <button
            onClick={() => {
              // Cuando se le da click al boton "Empezar" empieza el juego, y cambiamos el estado de gameRun a true
              setGameRun(true);
            }}
          >
            Empezar
          </button>
        </>
      )}

      {/* Esta es la condicion exactamente contraria a la anterior, osea si el juego ya empezo (luego de tocar el boton) se evalua lo que sigue.
      Aca se "renderizan" dos componentes "Player", y le pasamos por parametros el nombre del jugador, el maxScore (el "a cuanto jugamos") y 
      la funcion para actualizar el estado del ganador, ya que seran los componentes los encargador de actualizar este valor*/}
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
          {/* Si ya tenemos un ganador, osea winner es distinto de vacio, entonces renderizamos el h1 con el ganador */}
          {winner && <h1>Ganador: {winner}</h1>}
        </>
      )}
    </div>
  );
}

export default Board;
