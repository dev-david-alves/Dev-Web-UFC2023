import React from "react";

const Temperatura = ({ Tc, Tf, Tk }) => {
    const celsiusParaFahrenheit = (c) => (9 * c) / 5 + 32;

    const fahrenheitParaCelsius = (f) => ((f - 32) / 9) * 5;

    const kelvin = (k) => {
        return {
            celsius: k - 273.15,
            fahrenheit: ((k - 273.15) * 9) / 5 + 32,
        };
    };

    return (
        <div className="p-5 rounded-md shadow-md w-full">
            <h1 className="text-lg uppercase font-bold mb-3">
                Conversões de temperatura
            </h1>
            <div className="w-full px-5 flex items-centerl justify-between px-10">
                <h2 className="text-sm font-normal">
                    Celsius para Fahrenheit:{" "}
                    <span className="text-orange-400 font-medium">
                        {celsiusParaFahrenheit(Tc).toFixed(2)}
                    </span>
                </h2>
                <h2 className="text-sm font-normal">
                    Fahrenheit para Celsius:{" "}
                    <span className="text-orange-400 font-medium">
                        {fahrenheitParaCelsius(Tf).toFixed(2)}
                    </span>
                </h2>
                <h2 className="text-sm font-normal">
                    Kelvin para Celsius:{" "}
                    <span className="text-orange-400 font-medium">
                        {kelvin(Tk).celsius.toFixed(2)}
                    </span>
                </h2>
                <h2 className="text-sm font-normal">
                    Kelvin para Fahrenheit:{" "}
                    <span className="text-orange-400 font-medium">
                        {kelvin(Tk).fahrenheit.toFixed(2)}
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default Temperatura;
