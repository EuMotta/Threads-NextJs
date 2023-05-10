import React, { useState } from 'react';

const CallCenter = () => {
  const [attendant, setAttendant] = useState(10);
  const [client, setClient] = useState(23);
  const [attendantStats, setAttendantStats] = useState([]);

  const startProgram = async () => {
    setAttendant(attendant);
    let remainingClients = client;
    let stats = new Array(attendant).fill(0);
    let promises = [];

    /* Promise */
    for (let i = 0; i < attendant; i++) {
      promises.push(
        new Promise(async resolve => {
          while (remainingClients > 0) {
            stats[i]++;
            remainingClients--;
            console.log(remainingClients);
            setAttendantStats([...stats]);
            await new Promise(resolve =>
              setTimeout(resolve, (Math.random() * (5 - 1) + 5) * 1000),
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

  return (
    <div className="p-4">
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
        <label className="block text-gray-700 font-bold mb-2">Clientes:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={+client}
          onChange={e => setClient(+e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={startProgram}
      >
        Iniciar
      </button>
      <div className="overflow-x-auto h-96">
        <table className="table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 border bg-slate-200 border-slate-900 py-2">
                Atendente
              </th>
              <th className="px-4 border bg-slate-200 border-slate-900 py-2">
                Stat
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
  );
};

export default CallCenter;
