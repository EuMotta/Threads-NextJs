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
              (Math.random() * (attendantSpeed - 1) + attendantSpeed) * 1000;

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
      <div className="grid grid-cols-4">
        <div className="card_1">
          <div className="mb-4">
            <label className="block  font-bold mb-2">
            <h4>  Atendentes:</h4>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              max={100}
              min={1}
              value={+attendant}
              onChange={e => setAttendant(+e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
            <h4>  Clientes: </h4>
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
            <h4>  Velocidade: </h4>
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
          <div className="overflow-x-auto w-full h-96">
            <table className="table-auto mt-4">
              <thead>
                <tr>
                  <th className="px-2 border card_2 !shadow-none !py-2 border-slate-900 ">
                  <h5>  Atendente  </h5>
                  </th>
                  <th className="px-2 border card_2 !shadow-none !py-2 border-slate-900 ">
                  <h5>  Clientes  </h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendantStats.map((stat, index) => (
                  <tr key={index}>
                    <td className="border border-slate-900 text-center px-2 py-2">
                    <h5 className=' !text-sm '>  Atendente {index + 1}</h5>
                    </td>
                    <td className="border border-slate-900 text-center px-2 py-2">
                    <h5 className=' !text-sm '> {stat}</h5> 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3  gap-4 p-4">
            <div className="col-span-3 card_1 ">
              <Graph1CallCenter attendantStats={attendantStats} />
            </div>
            <div className="col-span-3 text-center text-3xl font-mono card_1">
            <h3> Restam ainda {remainingClients} clientes</h3> 
            </div>
            <table className="col-span-3 card_1">
              <thead>
                <tr>
                  <th><p className='text-center'>Dia</p></th>
                  <th><p className='text-center'>Clientes</p></th>
                  <th><p className='text-center'>Atendentes</p></th>
                  <th><p className='text-center'>tempo (minutos)</p></th>
                </tr>
              </thead>
              <tbody>
                {day.map((result, index) => (
                  <tr
                    key={index}
                    className="text-center border-2 border-slate-700"
                  >
                    <td><p className='text-center'>{index + 1}</p></td>
                    <td className="border-2  border-slate-700">
                    <p className='text-center'>{result.clients}</p>
                    </td>
                    <td><p className='text-center'>{result.attendants}</p></td>
                    <td><p className='text-center'>{result.time / result.clients / 1000}</p></td>
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
