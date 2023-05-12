import { Graph1CallCenter } from '../../components/Charts';
import React, { useState } from 'react';

const CallCenter = () => {
  const [attendant, setAttendant] = useState(10);
  const [client, setClient] = useState(23);
  const [attendantStats, setAttendantStats] = useState([]);
  const [attendantSpeed, setAttendantSpeed] = useState(20);
  const [isRunning, setIsRunning] = useState(false);
  const [day, setDay] = useState([]);
  const [time, setTime] = useState(0);
  const [remainingClients, setRemainingClients] = useState(0);
  const testProgram = () => {
    console.log('Quantidade de dias: ' + JSON.stringify(day));
    console.log('Quantidade de clientes agora: ' + client);
    console.log('Quantidade de atendentes agora: ' + attendant);
  };

  const startProgram2 = () => {
    startProgram();

    console.log(day);
  };

  const startProgram = async () => {
    if (isRunning) return;
    setAttendant(attendant);
    let remainingClients = client;
    let stats = new Array(attendant).fill(0);
    let promises = [];
    let totalTime = 0;
    /* Promise */
    for (let i = 0; i < attendant; i++) {
      promises.push(
        new Promise(async resolve => {
          while (remainingClients > 0) {
            stats[i]++;
            remainingClients--;
            console.log(remainingClients);
            setRemainingClients(remainingClients);
            setAttendantStats([...stats]);
            let time =
              (Math.random() * (attendantSpeed - 10) + attendantSpeed) * 1000;

            await new Promise(resolve =>
              setTimeout(
                resolve,
                time,
                (totalTime += time),
                setTime(totalTime),
              ),
            );
          }
          resolve();
        }),
      );
    }
    await Promise.all(promises);
    setDay(prevDay => [
      ...prevDay,
      { clients: client, attendants: attendant, time: Math.floor(totalTime) },
    ]);
    setAttendantStats(stats);
    setClient(remainingClients > 0 ? remainingClients : 0);
  };

  const resetProgram = () => {
    setAttendantStats([]);
    setDay([]);
    setIsRunning(true);
  };

  return (
    <div className="p-4 font-mono container mx-auto">
      <div className="grid grid-cols-5">
        <div className="card_1">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Atendentes:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={+attendant}
              onChange={e => setAttendant(+e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Clientes:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={+client}
              max={100}
              min={1}
              onChange={e => setClient(+e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Velocidade:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={attendantSpeed}
              max={100}
              min={10}
              onChange={e => setAttendantSpeed(+e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={startProgram2}
            >
              Iniciar
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={resetProgram}
            >
              Resetar
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={testProgram}
            >
              Test
            </button>
          </div>
          <div className="overflow-x-auto h-96">
            <table className="table-auto mt-4">
              <thead>
                <tr>
                  <th className="px-4 border bg-slate-200 border-slate-900 py-2">
                    Atendente
                  </th>
                  <th className="px-4 border bg-slate-200 border-slate-900 py-2">
                    Clientes
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendantStats.map((stat, index) => (
                  <tr key={index}>
                    <td className="border border-slate-900 text-center px-4 py-2">
                      Atendente {index + 1}
                    </td>
                    <td className="border border-slate-900 text-center px-4 py-2">
                      {stat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-3  gap-4 p-4">
            <div className="col-span-3 card_1 ">
              <Graph1CallCenter attendantStats={attendantStats} />
            </div>
            <div className="col-span-3 text-center text-3xl font-mono card_1">
              Restam ainda {remainingClients} clientes
            </div>
            <table className="col-span-3 card_1">
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Clientes</th>
                  <th>Atendentes</th>
                  <th>tempo (minutos)</th>
                </tr>
              </thead>
              <tbody>
                {day.map((result, index) => (
                  <tr
                    key={index}
                    className="text-center border-2 border-slate-700"
                  >
                    <td>{index + 1}</td>
                    <td className="border-2  border-slate-700">
                      {result.clients}
                    </td>
                    <td>{result.attendants}</td>
                    <td>{result.time / result.clients / 1000}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenter;
