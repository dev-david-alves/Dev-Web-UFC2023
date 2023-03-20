import React from "react";

export const MeusDadosArrowReturn = () => {
    return (
        <div className="p-5 rounded-md shadow-md">
            <span className="text-lg uppercase font-bold mb-3">
                Arrow function e return
            </span>
            <h1 className="text-sm font-normal">
                Nome:{" "}
                <span className="text-orange-400 font-medium">
                    David Alves Soares
                </span>
            </h1>
            <h1 className="text-sm font-normal">
                Curso:{" "}
                <span className="text-orange-400 font-medium">
                    Ciência da Computação
                </span>
            </h1>
            <h1 className="text-sm font-normal">
                Universidade:{" "}
                <span className="text-orange-400 font-medium">
                    Universidade Federal do Ceará - Campus Quixadá
                </span>
            </h1>
        </div>
    );
};

export const MeusDadosArrowSemReturn = () => (
    <div className="p-5 rounded-md shadow-md">
        <span className="text-lg uppercase font-bold mb-3">
            Arrow function sem return
        </span>
        <h1 className="text-sm font-normal">
            Nome:{" "}
            <span className="text-orange-400 font-medium">
                David Alves Soares
            </span>
        </h1>
        <h1 className="text-sm font-normal">
            Curso:{" "}
            <span className="text-orange-400 font-medium">
                Ciência da Computação
            </span>
        </h1>
        <h1 className="text-sm font-normal">
            Universidade:{" "}
            <span className="text-orange-400 font-medium">
                Universidade Federal do Ceará - Campus Quixadá
            </span>
        </h1>
    </div>
);

export function MeusDadosFunction() {
    return (
        <div className="p-5 rounded-md shadow-md">
            <span className="text-lg uppercase font-bold mb-3">
                Function padrão
            </span>
            <h1 className="text-sm font-normal">
                Nome:{" "}
                <span className="text-orange-400 font-medium">
                    David Alves Soares
                </span>
            </h1>
            <h1 className="text-sm font-normal">
                Curso:{" "}
                <span className="text-orange-400 font-medium">
                    Ciência da Computação
                </span>
            </h1>
            <h1 className="text-sm font-normal">
                Universidade:{" "}
                <span className="text-orange-400 font-medium">
                    Universidade Federal do Ceará - Campus Quixadá
                </span>
            </h1>
        </div>
    );
}

export class MeusDadosClass extends React.Component {
    render() {
        return (
            <div className="p-5 rounded-md shadow-md">
                <span className="text-lg uppercase font-bold mb-3">
                    Class padrão
                </span>
                <h1 className="text-sm font-normal">
                    Nome:{" "}
                    <span className="text-orange-400 font-medium">
                        David Alves Soares
                    </span>
                </h1>
                <h1 className="text-sm font-normal">
                    Curso:{" "}
                    <span className="text-orange-400 font-medium">
                        Ciência da Computação
                    </span>
                </h1>
                <h1 className="text-sm font-normal">
                    Universidade:{" "}
                    <span className="text-orange-400 font-medium">
                        Universidade Federal do Ceará - Campus Quixadá
                    </span>
                </h1>
            </div>
        );
    }
}
