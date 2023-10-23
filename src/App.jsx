import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Board from './components/Board/Board';

function App() {
  const [count, setCount] = useState(0);

  // Aca en la App (Objeto principal que ya viene en Vite, importamos el Board y lo retornamos)
  return <Board />;
}

export default App;
