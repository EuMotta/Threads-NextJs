'use client';

import React, { useEffect, useState } from 'react';
import { TypingText } from '../../components/CustomTexts';
import { developingList } from '../../constants';

const CallCenter = () => {
  const [attendant, setAttendant] = useState(5);
  const [attendantStats, setAttendantStats] = useState([]);
  const [attendantSpeed] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState(0);
  const [remainingClients, setRemainingClients] = useState(0);

  const startProgram = async () => {
    setAttendant(attendant);
    let remainingClients2 = 100;
    const stats = new Array(attendant).fill(0);
    const promises = [];
    let totalTime = 0;
    /* Promise */
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < attendant; i++) {
      if (remainingClients2 <= 17) {
        remainingClients2 = 100;
      }
      promises.push(
        // eslint-disable-next-line no-async-promise-executor, no-loop-func
        new Promise(async (resolve) => {
          while (remainingClients2 > 0) {
            // eslint-disable-next-line no-plusplus
            stats[i]++;
            // eslint-disable-next-line no-plusplus
            remainingClients2--;
            console.log(remainingClients2);
            setRemainingClients(remainingClients2);
            setAttendantStats([...stats]);
            // eslint-disable-next-line no-shadow
            const time = (Math.random() * (attendantSpeed - 1) + attendantSpeed) * 1000;
            // eslint-disable-next-line no-await-in-loop, no-loop-func, no-return-assign, no-shadow, no-promise-executor-return
            await new Promise((resolve) => setTimeout(
              resolve,
              time,
              (totalTime += time),
              setTime(totalTime),
            ));
          }
          resolve();
        }),
      );
    }
    await Promise.all(promises);
    setAttendantStats(stats);
  };
  useEffect(() => {
    startProgram();
  }, []);
  return (
    <section className="container yPaddings mx-auto">
      <div className="text-center">
        {developingList.CallCenter.map((cs) => (
          <div key={cs.title}>
            <TypingText
              title={cs.title}
              textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
            />
            {cs.description}
          </div>
        ))}
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h3>Exemplo</h3>
          </div>
          {attendantStats.map((stat, index) => (
            <tr key={index}>
              <td className="border border-slate-900 text-center px-2 py-2">
                <h5 className=""> Atendente {index + 1}</h5>
              </td>
              <td className="border border-slate-900 text-center px-2 py-2">
                <h5 className=""> {stat}</h5>
              </td>
            </tr>
          ))}
          Clientes restantes: {remainingClients}
        </div>
      </div>
    </section>
  );
};

export default CallCenter;
