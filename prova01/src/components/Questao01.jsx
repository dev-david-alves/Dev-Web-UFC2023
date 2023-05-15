import React, { useState, useEffect } from "react";

export default function Questao01X() {
  // Inicializa o vetor de alunos
  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
  ];

  const [media, setMedia] = useState([]);

  return (
    <div>
      <h1>Questão 01</h1>
      <Questão01Y alunos={alunos} setMedia={setMedia} />
      {/* Mapeia as médias recebidas de Questão01Y e retorna "printando" apenas aquelas >= 7 */}
      {media.map((item, key) => {
        if (item[1] >= 7)
          return (
            <span key={key}>
              {item[0]}: {item[1]}
            </span>
          );
      })}
    </div>
  );
}

const Questão01Y = ({ alunos, setMedia }) => {
  // Use effect utilizado para calcular as médias ao renderizar o componente
  // Basicamente é um map que pega cada aluno, salva seu nome e sua média calculada, e retorna um
  // vetor com [nome, media], ou seja, teremos um vetor de vetores que guarda o nome e a média de cada aluno.

  useEffect(() => {
    let calMedias = alunos.map((aluno) => {
      let nome = aluno.nome;
      let media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
      return [nome, media];
    });

    // Como setMedia vem do pai, ao setar, o pai recebera essas modificações.
    setMedia(calMedias);
  }, []);
};
