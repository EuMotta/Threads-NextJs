import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [dateTime, setDateTime] = useState({
    hours: '',
    minutes: '',
    seconds: '',
  });

  useEffect(() => {
    setDateTime({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    });
    const timer = setInterval(() => {
      setDateTime({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <table className="table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-slate-600 px-4 py-2 text-center">
            <p>Hora: Thread 1</p>
          </th>
          <th className="border border-slate-600 px-4 py-2 text-center">
            <p>Minuto: Thread 2</p>
          </th>
          <th className="border border-slate-600 px-4 py-2 text-center">
            <p>Segundo: Thread 3</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-5xl">
          <td className="border border-slate-600 px-4 py-2 text-center">
            <h1>{dateTime.hours}</h1>
          </td>
          <td className="border border-slate-600 px-4 py-2 text-center">
            <h1>{dateTime.minutes}</h1>
          </td>
          <td className="border border-slate-600 px-4 py-2 text-center">
            <h1>{dateTime.seconds}</h1>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Clock;
