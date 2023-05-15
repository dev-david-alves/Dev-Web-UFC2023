import React from "react";
import Questao01 from "./components/Questao01";
import Questao02 from "./components/Questao02";
import Questao03 from "./components/Questao03";

const App = () => {
  return (
    <>
      <Questao01 />
      <hr className="my-5" />
      <Questao02 />
      <hr className="my-5" />
      <Questao03 />
    </>
  );
};

export default App;
