import { useState } from "react";
import "./App.css";

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(0);

  function sumar() {
    setResultado(Number(numero1) + Number(numero2));
  }

  return (
    <div className="container">
      <div className="calculadora">
        <h1>Calculadora Basica</h1>

        <input
          type="number"
          placeholder="Numero 1"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Numero 2"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />

        <button onClick={sumar}>Sumar</button>

        <h2>Resultado: {resultado}</h2>
      </div>
    </div>
  );
}

export default App;