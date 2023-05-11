import { Graph1CallCenter } from '../../components/Charts';
import React, { useState } from 'react';

const CallCenter = () => {
  const [attendant, setAttendant] = useState(10);
  const [client, setClient] = useState(23);
  const [attendantStats, setAttendantStats] = useState([]);
  const [attendantSpeed, setAttendantSpeed] = useState(20);
  const [isRunning, setIsRunning] = useState(false);
  
  const startProgram = async () => {
    setIsRunning(true);
    setAttendant(attendant);
    let remainingClients = client;
    let stats = new Array(attendant).fill(0);
    let promises = [];

    /* Promise */
    for (let i = 0; i < attendant; i++) {
      if (!isRunning) return;
      promises.push(
        new Promise(async resolve => {
          while (remainingClients > 0) {
            stats[i]++;
            remainingClients--;
            console.log(remainingClients);
            setAttendantStats([...stats]);
            await new Promise(resolve =>
              setTimeout(resolve, (Math.random() * (attendantSpeed - 10) + attendantSpeed) * 1000),
            );
          }

          resolve();
        }),
      );
    }
    await Promise.all(promises);

    setAttendantStats(stats);
    setClient(remainingClients > 0 ? remainingClients : 0);
  };

  const resetProgram = () => {
    setAttendantStats([]);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-5">
        <div className="">
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
              min={15}
              onChange={e => setAttendantSpeed(+e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={startProgram}
          >
            Iniciar
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={resetProgram}
          >
            Resetar
          </button>
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
          <Graph1CallCenter attendantStats={attendantStats} />
        </div>
      </div>
    </div>
  );
};

export default CallCenter;
