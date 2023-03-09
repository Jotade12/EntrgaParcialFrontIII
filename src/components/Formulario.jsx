import React, { useState } from "react";
import Card from "./Card";

function Formulario() {
  const [campo1, setCampo1] = useState("");
  const [campo2, setCampo2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar campo No. 1
    if (campo1.trim().length < 3 || campo1.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    // Validar campo No. 2
    if (campo2.trim().length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    // Si pasa las validaciones, renderizamos el componente Card
    // con los valores de los campos
    setError("");
    const cardData = { campo1, campo2 };
    return <Card data={cardData} />;
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label htmlFor="campo1">Ingresa un animal:</label>
      <input
        type="text"
        id="campo1"
        value={campo1}
        onChange={(e) => setCampo1(e.target.value)}
      />
      <br />

      <label htmlFor="campo2">Ingresa otro animal:</label>
      <input
        type="text"
        id="campo2"
        value={campo2}
        onChange={(e) => setCampo2(e.target.value)}
      />
      <br />

      <button type="submit">Enviar</button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default Formulario;
