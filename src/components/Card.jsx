import React from "react";

function Card({ data }) {
  return (
    <div>
      <p>Campo 1: {data.campo1}</p>
      <p>Campo 2: {data.campo2}</p>
    </div>
  );
}

export default Card;