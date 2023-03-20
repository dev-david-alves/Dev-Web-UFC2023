import React from "react";

const MeusDados02 = ({ nome, curso, universidade }) => {
    return (
        <div className="p-5 rounded-md shadow-md max-w-[500px]">
            <span className="text-lg uppercase font-bold mb-3">
                Arrow function com passagem de parâmetros
            </span>
            <h1 className="text-sm font-normal">
                Nome:{" "}
                <span className="text-orange-400 font-medium">{nome}</span>
            </h1>
            <h1 className="text-sm font-normal">
                Curso:{" "}
                <span className="text-orange-400 font-medium">{curso}</span>
            </h1>
            <h1 className="text-sm font-normal">
                Universidade:{" "}
                <span className="text-orange-400 font-medium">
                    {universidade}
                </span>
            </h1>
        </div>
    );
};

export default MeusDados02;
