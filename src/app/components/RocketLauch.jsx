import React, { useEffect, useState } from 'react';
import { AiTwotoneRocket } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa';

const RocketLaunch = () => {
  const [speed, setSpeed] = useState(0);
  const [isThread1Active, setIsThread1Active] = useState(false);
  const [isThread2Active, setIsThread2Active] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const maxSpeed = 200;
  const minSpeed = 0;

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setSpeed(currentSpeed => {
        let newSpeed = currentSpeed;

        if (isThread1Active) {
          newSpeed += 10;
        }

        if (isThread2Active) {
          newSpeed += 10;
        }

        if (!isThread1Active && !isThread2Active) {
          newSpeed -= 20;
        }

        if (newSpeed >= maxSpeed) {
          clearInterval(interval);
          setGameOver(true);
          return maxSpeed;
        }

        if (newSpeed < 0) {
          return 0;
        }

        return newSpeed;
      });
    }, 700);

    return () => clearInterval(interval);
  }, [isThread1Active, isThread2Active]);

  return (
    <div className="h-96 flex justify-center items-end">
      <div className="w-96">
        <div className="flex gap-1 justify-center items-center w-full">
          <p
            className="relative"
            style={{
              bottom: 80,
            }}
          >
            150km
          </p>
          <span
            style={{
              bottom: 80,
            }}
            className="bg-red-600 relative h-1 w-96"
          />
        </div>
        <div className="flex gap-1 justify-center items-center w-full">
          <p
            className="relative"
            style={{
              bottom: 50,
            }}
          >
            100km
          </p>
          <span
            style={{
              bottom: 50,
            }}
            className="bg-red-600 relative h-1 w-96"
          />
        </div>
        <div className="flex gap-1 justify-center items-center w-full">
          <p
            className="relative"
            style={{
              bottom: 14.5,
            }}
          >
            30km
          </p>
          <span
            style={{
              bottom: 14.5,
            }}
            className="bg-red-600 relative h-1 w-96"
          />
        </div>
        <div
          style={{
            bottom: speed,
          }}
          className="relative flex justify-center duration-700 items-center  text-5xl"
        >
          <AiTwotoneRocket />
        </div>
        <div className="card_2 flex flex-col justify-center items-center">
          <p className="text-center">Distância atual: {Math.floor(speed)}Km</p>
          <div className="border border-slate-600 rounded-xl">
            {speed === maxSpeed ? (
              <div className="flex">
                <p className="text-center shadow-md rounded-s-xl shadow-slate-500 bg-green-200">
                  Atingiu o espaço!
                </p>
                <button
                  onClick={() => {
                    setSpeed(0);
                    setGameOver(false);
                    setIsThread1Active(false);
                    setIsThread2Active(false);
                  }}
                  className="border px-1 bg-green-300 rounded-e-xl border-slate-800 shadow-md shadow-slate-500"
                >
                  Reiniciar
                </button>
              </div>
            ) : (
              <p className="text-center shadow-md rounded-xl shadow-slate-500 bg-red-200">
                Ainda não atingiu o espaço.
              </p>
            )}
          </div>
          <div className="flex gap-5 justify-center items-center">
            <button onClick={() => setIsThread1Active(isActive => !isActive)}>
              <p className="text-center">T1</p>
              {isThread1Active ? (
                <FaStopCircle className="text-red-600 text-3xl hover:text-red-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />
              ) : (
                <FaPlayCircle className='text-green-600 text-3xl hover:text-green-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />' />
              )}
            </button>
            <button onClick={() => setIsThread2Active(isActive => !isActive)}>
              <p className="text-center">T2</p>
              {isThread2Active ? (
                <FaStopCircle className="text-red-600 text-3xl hover:text-red-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />
              ) : (
                <FaPlayCircle className='text-green-600 text-3xl hover:text-green-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />' />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const RocketLaunch2 = () => {
  const [speed, setSpeed] = useState(0);
  const [isThread1Active, setIsThread1Active] = useState(false);
  const [isThread2Active, setIsThread2Active] = useState(false);
  const [isDirectionActive, setIsDirectionActive] = useState(false);
  const [direction, setDirection] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const maxSpeed = 200;
  const maxDirection = 200;

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      let directionChange = Math.random() < 0.5 ? -50 : 50;
      if (isDirectionActive) {
        setDirection(currentDirection => {
          let newDirection = currentDirection + directionChange;
          if (newDirection >= maxDirection) {
            clearInterval(interval);
            setGameOver(true);
            return maxDirection;
          }
          return newDirection;
        });
      } else {
        setDirection(0);
      }
      setSpeed(currentSpeed => {
        let newSpeed = currentSpeed;

        if (isThread1Active) {
          newSpeed += 10;
        }

        if (isThread2Active) {
          newSpeed += 10;
        }

        if (!isThread1Active && !isThread2Active) {
          newSpeed -= 20;
        }

        if (newSpeed >= maxSpeed) {
          clearInterval(interval);
          setGameOver(true);
          return maxSpeed;
        }

        if (newSpeed < 0) {
          return 0;
        }

        return newSpeed;
      });
    }, 700);

    return () => clearInterval(interval);
  }, [isThread1Active, isThread2Active, isDirectionActive]);

  return (
    <div className="h-[28rem] flex justify-center items-end">
      <div className="w-96">
        <div className="flex gap-1 justify-center items-center w-full">
          <p
            className="relative"
            style={{
              bottom: 80,
            }}
          >
            150km
          </p>
          <span
            style={{
              bottom: 80,
            }}
            className="bg-red-600 relative h-1 w-96"
          />
        </div>
        <div className="flex gap-1 justify-center items-center w-full">
          <p
            className="relative"
            style={{
              bottom: 50,
            }}
          >
            100km
          </p>
          <span
            style={{
              bottom: 50,
            }}
            className="bg-red-600 relative h-1 w-96"
          />
        </div>
        <div className="flex gap-1 justify-center items-center w-full">
          <p
            className="relative"
            style={{
              bottom: 14.5,
            }}
          >
            30km
          </p>
          <span
            style={{
              bottom: 14.5,
            }}
            className="bg-red-600 relative h-1 w-96"
          />
        </div>
        <div
          style={{
            bottom: speed,
            left: direction,
          }}
          className="relative flex justify-center duration-700 items-center  text-5xl"
        >
          <AiTwotoneRocket />
        </div>
        <div className="card_2 flex flex-col justify-center items-center">
          <p className="text-center">Distância atual: {Math.floor(speed)}Km</p>
          <div className="border border-slate-600 rounded-xl">
            {speed === maxSpeed ? (
              <div className="flex">
                <p className="text-center shadow-md rounded-s-xl shadow-slate-500 bg-green-200">
                  Atingiu o espaço!
                </p>
                <button
                  onClick={() => {
                    setSpeed(0);
                    setDirection(0);
                    setGameOver(false);
                    setIsThread1Active(false);
                    setIsThread2Active(false);
                    setIsDirectionActive(false);
                  }}
                  className="border px-1 bg-green-300 rounded-e-xl border-slate-800 shadow-md shadow-slate-500"
                >
                  Reiniciar
                </button>
              </div>
            ) : (
              <p className="text-center shadow-md rounded-xl shadow-slate-500 bg-red-200">
                Ainda não atingiu o espaço.
              </p>
            )}
            {direction >= maxDirection || direction <= -maxDirection ? (
              <div className="flex">
                <p className="text-center shadow-md rounded-s-xl shadow-slate-500 bg-green-200">
                  Caiu!
                </p>
                <button
                  onClick={() => {
                    setSpeed(0);
                    setDirection(0);
                    setGameOver(false);
                    setIsThread1Active(false);
                    setIsThread2Active(false);
                    setIsDirectionActive(false);
                  }}
                  className="border px-1 bg-green-300 rounded-e-xl border-slate-800 shadow-md shadow-slate-500"
                >
                  Reiniciar
                </button>
              </div>
            ) : null}
          </div>
          <div className="flex gap-5 justify-center items-center">
            <button onClick={() => setIsThread1Active(isActive => !isActive)}>
              <p className="text-center">T1</p>
              {isThread1Active ? (
                <FaStopCircle className="text-red-600 text-3xl hover:text-red-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />
              ) : (
                <FaPlayCircle className='text-green-600 text-3xl hover:text-green-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />' />
              )}
            </button>
            <button onClick={() => setIsDirectionActive(isActive => !isActive)}>
              <p className="text-center">D</p>
              {isDirectionActive ? (
                <FaStopCircle className="text-red-600 text-3xl hover:text-red-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />
              ) : (
                <FaPlayCircle className='text-green-600 text-3xl hover:text-green-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />' />
              )}
            </button>
            <button onClick={() => setIsThread2Active(isActive => !isActive)}>
              <p className="text-center">T2</p>
              {isThread2Active ? (
                <FaStopCircle className="text-red-600 text-3xl hover:text-red-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />
              ) : (
                <FaPlayCircle className='text-green-600 text-3xl hover:text-green-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />' />
              )}
            </button>
          </div>
          <button
            onClick={() => {
              setSpeed(0);
              setDirection(0);
              setGameOver(false);
              setIsThread1Active(false);
              setIsThread2Active(false);
              setIsDirectionActive(false);
            }}
            className="border px-1 bg-green-300 rounded-xl mt-2 border-slate-800 shadow-md shadow-slate-500"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export { RocketLaunch, RocketLaunch2 };
