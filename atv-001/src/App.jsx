import React from "react";

import {
    MeusDadosArrowReturn,
    MeusDadosArrowSemReturn,
    MeusDadosFunction,
    MeusDadosClass,
} from "./components/atividade00/01MeusDados";
import MeusDadosComParamentros from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatura";

const App = () => {
    return (
        <div>
            <div className="flex items-center p-5 flex-wrap justify-evenly gap-y-2">
                <MeusDadosArrowReturn />
                <MeusDadosArrowSemReturn />
                <MeusDadosFunction />
                <MeusDadosClass />
            </div>
            <div className="w-full flex item-center justify-center">
                <MeusDadosComParamentros
                    nome="Maria José"
                    curso="Arquitetura"
                    universidade="IFCE"
                />
            </div>
            <div className="w-full px-20">
                <Temperatura Tc={34} Tf={34} Tk={273.15} />
            </div>
        </div>
    );
};

export default App;
