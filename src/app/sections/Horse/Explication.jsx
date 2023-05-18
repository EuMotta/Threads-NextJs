'use client';

import React, { useEffect, useState } from 'react';

const Explication = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/HistoryHorse');
      const data = await result.json();
      setResults(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="min-w-full divide-y  divide-gray-200 rounded-lg shadow overflow-hidden">
        <div className="bg-gray-50 mb-5">
          <div className="grid grid-cols-3">
            <div className="py-3  px-6  text-xs font-medium text-gray-500 uppercase tracking-wider">
              <h5 className="text-center">Horse 1</h5>
            </div>
            <div className="py-3 px-6  text-xs font-medium text-gray-500 uppercase tracking-wider">
              <h5 className="text-center">Horse 2</h5>
            </div>
            <div className="py-3 px-6  text-xs font-medium text-gray-500 uppercase tracking-wider">
              <h5 className="text-center">Race</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-scroll h-96 gap-5">
          {results.map((result, index) => (
            <div
              key={index}
              className="grid rounded-xl bg-slate-100 hover:bg-indigo-100 duration-200 hover:shadow-md hover:shadow-slate-500 hover:-translate-y-1 grid-cols-3"
            >
              <div className="  p-2">
                <div className="text-sm mb-2 text-gray-700">
                  <h4>
                    <strong>Nome:</strong> {result.horse1.name}
                  </h4>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="!text-sm"> Atraso: {result.horse1.delay}</p>
                  </div>
                  <div>
                    <p className="!text-sm">
                      Media Atraso: {result.horse1.mediaDelay}
                    </p>
                  </div>
                  <div>
                    <p className="!text-sm">
                      Eficiência: {result.horse1.efficiency}
                    </p>
                  </div>
                  <div>
                    <p className="!text-sm">
                      Media Eficiência: {result.horse1.mediaEfficiency}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border p-2">
                <div className="text-sm mb-2 text-gray-700">
                  <h4>
                    <strong>Nome:</strong> {result.horse2.name}
                  </h4>
                </div>
                <div className="grid grid-cols-2">
                  <di>
                    <p className="!text-sm">Atraso: {result.horse2.delay}</p>
                  </di>
                  <div>
                    <p className="!text-sm">
                      Media Atraso: {result.horse2.mediaDelay}
                    </p>
                  </div>
                  <div>
                    <p className="!text-sm">
                      Eficiência: {result.horse2.efficiency}
                    </p>
                  </div>
                  <div>
                    <p className="!text-sm">
                      Media Eficiência: {result.horse2.mediaEfficiency}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" p-2">
                <div className="font-medium mb-2">
                  <h4>
                    <strong>Corrida: {result.race.raceNumber}</strong>
                  </h4>
                </div>
                <div className="text-sm text-gray-700">
                  <h5 className="">Ganhador: {result.race.raceResult}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-center">Resultados</h1>
        <div className="grid grid-cols-2">
          <table className="card_2 font-semibold rounded-md shadow-sm shadow-slate-300 p-5 text-xl">
            <tbody className="text-center">
              <tr>
                <td>
                  <h5>Atrasos do cavalo 1:</h5>
                </td>
                <td>
                  {results.length > 0 && (
                    <h5 className="">
                      {results[results.length - 1].horse1.delay}
                    </h5>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Atrasos do cavalo 2:</h5>
                </td>
                <td>
                  {results.length > 0 && (
                    <h5 className="">
                      {results[results.length - 1].horse2.delay}
                    </h5>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Média do cavalo 1:</h5>
                </td>
                <td>
                  {results.length > 0 && (
                    <h5 className="">
                      {Math.floor(
                        results[results.length - 1].horse1.mediaDelay,
                      )}
                    </h5>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Média do cavalo 2:</h5>
                </td>
                <td>
                  {results.length > 0 && (
                    <h5 className="">
                      {Math.floor(
                        results[results.length - 1].horse2.mediaDelay,
                      )}
                    </h5>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Eficiência do cavalo 1:</h5>
                </td>
                <td>
                  {results.length > 0 && (
                    <h5 className="">
                      {results[results.length - 1].horse1.efficiency}
                    </h5>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Eficiência do cavalo 2:</h5>
                </td>
                <td>
                  {results.length > 0 && (
                    <h5 className="">
                      {results[results.length - 1].horse2.efficiency}
                    </h5>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Média de eficiência do cavalo 1:</h5>
                </td>
                <td>
                  {results.length > 0 && (
                    <h5 className="">
                      {Math.floor(
                        results[results.length - 1].horse1.mediaEfficiency,
                      )}
                    </h5>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Média de eficiência do cavalo 2:</h5>
                </td>
                <td>
                  {results.length > 0 && (
                    <h5 className="">
                      {Math.floor(
                        results[results.length - 1].horse2.mediaEfficiency,
                      )}
                    </h5>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center">Quem é mais eficiente?</h2>
            {results.length > 0 && (
              <div className="">
                {results[results.length - 1].horse1.mediaEfficiency
                > results[results.length - 1].horse2.mediaEfficiency ? (
                  <div className="text-center">
                    <h2>
                      {Math.floor(
                        results[results.length - 1].horse1.mediaEfficiency,
                      )}
                    </h2>
                    <h3>O primeiro cavalo é mais eficiente!</h3>
                  </div>
                  ) : (
                    <div className="text-center">
                      <h2>
                        {Math.floor(
                          results[results.length - 1].horse2.mediaEfficiency,
                        )}
                      </h2>
                      <h3>O segundo cavalo é mais eficiente!</h3>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explication;
