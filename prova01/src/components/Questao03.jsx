import React, { useState, useEffect } from "react";
import axios from "axios";

const Questao03 = () => {
  const [dados, setDados] = useState([]);
  const [maxMin, setMaxMin] = useState({ max: 0, min: 0 });

  // função que pega os dados utilizando axios e coloca no State "dados"
  const getDados = () => {
    axios
      .get(
        "https://restcountries.com/v3.1/region/europe?fields=capital,population"
      )
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (dados.length == 0) return;
    // Mapeia os dados e pega o Máximo baseado na população
    const max = dados.reduce(function (prev, current) {
      return prev.population > current.population ? prev : current;
    });

    // Mapeia os dados e pega o Mínimo baseado na população
    const min = dados.reduce(function (prev, current) {
      return prev.population < current.population ? prev : current;
    });

    // Seta o máximo e o mínimo em forma de objeto no State "maxMin"
    setMaxMin({ max: max, min: min });
  }, [dados]);

  useEffect(() => {
    // Chama a função ao carregar o componente
    getDados();
  }, []);

  return (
    <>
      <div>Questao03</div>
      <div className="mb-3">
        Maior população: {maxMin.max.capital} <br /> Quantidade:{" "}
        {maxMin.max.population}
      </div>
      <div>
        Menor população: {maxMin.min.capital} <br /> Quantidade:{" "}
        {maxMin.min.population}
      </div>
    </>
  );
};

export default Questao03;
