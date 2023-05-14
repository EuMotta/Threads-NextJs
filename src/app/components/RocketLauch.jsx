import React, { useEffect, useState } from 'react';
import { AiTwotoneRocket } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa';

const RocketLaunch = () => {
  const [speed, setSpeed] = useState(0);
  const [isThread1Active, setIsThread1Active] = useState(false);
  const [isThread2Active, setIsThread2Active] = useState(false);
  const maxSpeed = 200;
  const minSpeed = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(currentSpeed => {
        let newSpeed = currentSpeed;

        if (isThread1Active) {
          newSpeed += Math.random() * 10;
        }

        if (isThread2Active) {
          newSpeed += Math.random() * 20;
        }

        if (!isThread1Active && !isThread2Active) {
          newSpeed -= Math.random() * 5;
        }

        if (newSpeed >= maxSpeed) {
          clearInterval(interval);
          return maxSpeed;
        }

        if (newSpeed < 0) {
          return 0;
        }

        return newSpeed;
      });
    }, 300);

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
          className="relative flex justify-center items-center  text-5xl"
        >
          <AiTwotoneRocket />
        </div>
        <div className="card_2 ">
          <p className="text-center">Distância atual: {Math.floor(speed)}Km</p>
          {speed === maxSpeed && <p className='text-center'>Atingiu o espaço!</p>}
          <div className="flex gap-5 justify-center items-center">
            <button onClick={() => setIsThread1Active(isActive => !isActive)}>
              {isThread1Active ? (
                <FaStopCircle className="text-red-600 text-3xl hover:text-red-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />
              ) : (
                <FaPlayCircle className='text-green-600 text-3xl hover:text-green-800 rounded-full hover:scale-105 hover:shadow-md transition-all active:text-red-600" />' />
              )}
            </button>
            <button onClick={() => setIsThread2Active(isActive => !isActive)}>
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

export default RocketLaunch;
