import React from 'react';
import { explication } from '../constants';
import Graph1 from '../components/Charts';

const Explication = () => {
  return (
    <div className="col-span-3">
      <div className="p-5 mt-5 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Threads em uma corrida de cavalos
        </h1>
        <div>
          <h2 className="text-xl font-semibold mb-2">O que são threads?</h2>
          <p className="mb-4">
            Threads são uma maneira de dividir um programa em duas ou mais
            tarefas simultâneas que podem ser executadas independentemente. Isso
            significa que cada thread pode executar uma parte diferente do
            código ao mesmo tempo que outras threads. Isso pode ser útil quando
            você tem várias tarefas que precisam ser executadas ao mesmo tempo,
            mas não dependem uma da outra para serem concluídas.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Como usar threads em uma corrida de cavalos?
          </h2>
          <p className="mb-4">
            Em uma simulação de corrida de cavalos com dois cavalos, você pode
            usar threads para controlar o movimento de cada cavalo de forma
            independente. Cada thread pode ser responsável por atualizar a
            posição do cavalo na pista e verificar se ele cruzou a linha de
            chegada.
            <br /> Os cavalos precisam de uma margem de variação em sua
            velocidade, se a velocidade máxima for 50, varia entre 40 a 50.
          </p>
        </div>
        <div className="p-5 mt-5 bg-gray-100 rounded-lg shadow-md shadow-slate-500">
          <h1 className="text-2xl font-bold mb-4">
            Exemplos de variação do cálculo
          </h1>
          <table className="table-auto w-full mb-4 text-center">
            <thead>
              <tr className="text-center">
                <th className="px-4 py-2 ">Speed</th>
                <th className="px-4 py-2 ">Calculo</th>
                <th className="px-4 py-2 ">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {explication.textExample.map(item => (
                <tr>
                  <td>{item.value}</td>
                  <td>{item.formula}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Explication;
