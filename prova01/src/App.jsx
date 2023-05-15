import React, { createContext, useContext, useState } from "react";
import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

// Criando um objeto de contexto
const CountContext = createContext();

const CounterContext = ({ count, setCount, children }) => {
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// Componente que envolve a aplicação com o provedor do contexto
function App() {
  const [count, setCount] = useState(0);
  // Usando Local Storage
  localStorage.setItem("chave", "valor");
  console.log(localStorage.getItem("chave"));

  // Usando Session Storage
  sessionStorage.setItem("chave", "valor");
  console.log(sessionStorage.getItem("chave"));

  return (
    <CounterContext count={count} setCount={setCount}>
      <h1>Contador</h1>
      <Counter />
    </CounterContext>
  );
}

// Componente que consome o contexto para exibir e atualizar o contador
function Counter() {
  const { count, setCount } = useContext(CountContext);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default App;
