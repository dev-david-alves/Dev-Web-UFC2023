import React, { useState } from "react";

// Importando as duas imagens que irei utilizar
import ImgFront from "../assets/PikachuFront.png";
import ImgBack from "../assets/PikachuBack.png";

const Questao02 = () => {
  // State que guarda o estado da imagem
  const [virado, setVirado] = useState(false);
  return (
    <>
      <div>Questao02</div>
      {/* Printa a imagem de acordo com o State "virado" */}
      <img src={!virado ? ImgFront : ImgBack} alt="Pikachu" />
      <button
        className="px-5 py-2 bg-blue-500 rounded-md"
        // Seta sempre o virado para o oposto do que ele é Ex: True->False, False->True
        onClick={() => setVirado(!virado)}
      >
        {/* Printa o texto de acordo com o State "virado" */}
        {!virado ? "Virar" : "Desvirar"}
      </button>
    </>
  );
};

export default Questao02;
