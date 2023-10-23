import { useState } from 'react';

// Player sera el jugador
function Player({ playerName, maxScore, setWinner }) {
  // Este estado lo usamos para llevar la cuenta de los puntos del jugador (empieza en 0)
  const [score, setScore] = useState(0);

  // En este if preguntamos si el puntaje del jugador es igual al puntaje maximo (que vino por parametros que le envio el Board)
  if (score == maxScore) {
    // En caso de que haya llegado al puntaje maximo, cambiamos el ganador, y el ponemos el nombre del jugador que vino tambien por parametros
    setWinner(playerName);
  }

  return (
    <div>
      {/* Nombre del jugador */}
      <h1>{playerName}</h1>
      {/* Puntaje del jugador */}
      <h2>score {score}</h2>
      {/* Dos botones, de mas y menos, para actualizar el puntaje */}
      <button
        onClick={() => {
          // Al hacer click en el boton - se intenta actualizar el puntaje (solo puede restar si NO tiene 0, ya que no puede tener puntaje negativo)
          if (score !== 0) {
            // Aca se setea el puntaje, una forma mas simple seria setScore(score + 1) pero no es del todo correcto (pero para este caso funcionaria)
            // En cambio, lo mas correcto es pasale al "seteador" una funcion, esta funcion recibe por parametro el "puntaje previo", y debe
            // retornar el nuevo puntaje, osea si el puntaje previo es 5, el nuevo puntaje sera "puntaje previo" - 1, osea seria 4
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
          // Misma logica que el -, pero en este caso se suma 1 (sin restricciones)
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
