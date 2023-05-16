import React, { useEffect, useState } from 'react';

const Semaphore = () => {
  const [color, setColor] = useState('red');
  const [timeLeft, setTimeLeft] = useState(10);
  const [color2, setColor2] = useState('green');
  const [timeLeft2, setTimeLeft2] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((time) => time - 1);
      setTimeLeft2((time) => time - 1);
    }, 1000);

    if (timeLeft === 0) {
      if (color === 'red') {
        setColor('green');
        setColor2('red');
        setTimeLeft(10);
      } else if (color === 'green') {
        setColor('yellow');
        setColor2('red');
        setTimeLeft(3);
      } else {
        setColor('red');
        setColor2('green');
        setTimeLeft(10);
      }
    }

    if (timeLeft === 3 && color === 'red') {
      setColor2('yellow');
    }
    if (timeLeft2 === 3 && color2 === 'red') {
      setColor('yellow');
    }

    if (timeLeft2 === 0) {
      if (color2 === 'red') {
        setColor2('green');
        setTimeLeft2(10);
      } else if (color2 === 'green') {
        setColor2('yellow');
        setTimeLeft2(3);
      } else {
        setColor2('red');
        setTimeLeft2(10);
      }
    }

    return () => clearInterval(interval);
  }, [timeLeft, timeLeft2]);

  return (
    <div className=" gap-10 grid grid-cols-2 justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <div className="bg-slate-900 p-2 rounded-lg flex flex-col gap-3 shadow-md shadow-slate-800">
          <div
            style={{
              backgroundColor: color === 'red' ? 'red' : 'gray',
              width: 50,
              height: 50,
            }}
            className="rounded-full shadow-md shadow-slate-600"
          />
          <div
            style={{
              backgroundColor: color === 'yellow' ? 'yellow' : 'gray',
              width: 50,
              height: 50,
            }}
            className="rounded-full shadow-md shadow-slate-600"
          />
          <div
            style={{
              backgroundColor: color === 'green' ? 'green' : 'gray',
              width: 50,
              height: 50,
            }}
            className="rounded-full shadow-md shadow-slate-600"
          />
        </div>
        <p className="text-center">Tempo restante: {timeLeft}</p>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div className="bg-slate-900 p-2 rounded-lg flex flex-col gap-3 shadow-md shadow-slate-800">
          <div
            style={{
              backgroundColor: color2 === 'red' ? 'red' : 'gray',
              width: 50,
              height: 50,
            }}
            className="rounded-full shadow-md shadow-slate-600"
          />
          <div
            style={{
              backgroundColor: color2 === 'yellow' ? 'yellow' : 'gray',
              width: 50,
              height: 50,
            }}
            className="rounded-full shadow-md shadow-slate-600"
          />
          <div
            style={{
              backgroundColor: color2 === 'green' ? 'green' : 'gray',
              width: 50,
              height: 50,
            }}
            className="rounded-full shadow-md shadow-slate-600"
          />
        </div>{' '}
        <p className="text-center">Tempo restante: {timeLeft2}</p>
      </div>
    </div>
  );
};

export default Semaphore;
