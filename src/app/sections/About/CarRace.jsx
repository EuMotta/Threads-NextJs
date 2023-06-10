'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TypingText } from '../../components/CustomTexts';
import { developingList } from '../../constants';
import Car from '../../../images/CarRace/car-svgrepo-com.svg';

const Barber = () => {
  const [carCount, setCarCount] = useState(0);
  const [positions, setPositions] = useState([]);
  const [position1, setPosition1] = useState(100);
  const [position2, setPosition2] = useState(200);
  const [newMaxPosition, setNewMaxPosition] = useState(100);
  const [speed, setSpeed] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  const handleAddCar = () => {
    if (carCount < 4) {
      setCarCount(carCount + 1);
    }
    setPositions([...positions, 0]);
  };

  let maxPosition;
  const handleAdvance = () => {
    if (gameOver) return;
    const allCarsAtPosition1 = positions.every(
      (position) => position >= position1,
    );
    const allCarsAtPosition2 = positions.every(
      (position) => position >= position2,
    );

    if (allCarsAtPosition1) {
      maxPosition = position2;
    } else {
      maxPosition = position1;
    }
    if (allCarsAtPosition2) {
      setGameOver(true);
    }
    setNewMaxPosition(maxPosition);

    const updatedPositions = positions.map((position) => {
      const newPosition = position + Math.floor(Math.random() * speed);
      return newPosition >= maxPosition ? maxPosition : newPosition;
    });
    setPositions(updatedPositions);
  };
  const handleReset = () => {
    setCarCount(0);
    setPositions([]);
    setPosition1(100);
    setPosition2(200);
    setNewMaxPosition(100);
    setGameOver(false);
  };

  return (
    <section className="container mx-auto">
      <div className="text-center">
        {developingList.CarRace.map((barber) => (
          <div key={barber.title}>
            <TypingText
              title={barber.title}
              textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
            />
            {barber.description}
          </div>
        ))}
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h3>Exemplo</h3>
          </div>
          <div className=" flex yPaddings">
            <div className="">
              <div className="flex gap-5">
                <div className="flex flex-col gap-5">
                  <div className="card_1">
                    <div className="flex flex-col">
                      <h3 className="text-center">Posições</h3>
                      <label className="flex flex-row items-center space-x-2">
                        <p>Velocidade:</p>
                        <input
                          type="number"
                          value={speed}
                          max={100}
                          onChange={(event) => setSpeed(Number(event.target.value))}
                          className="border border-gray-300 rounded px-2 py-1 w-20"
                        />
                      </label>
                    </div>
                    <div className="flex mt-5 flex-wrap gap-3">
                      <button
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={handleAddCar}
                      >
                        Adicionar
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={handleAdvance}
                        disabled={carCount === 0}
                      >
                        Avançar
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={handleReset}
                      >
                        Resetar
                      </button>
                    </div>
                    <p>Quantidade: {carCount}</p>
                  </div>
                </div>

                <div className="card_1 w-96 flex flex-col justify-center">
                  {[...Array(carCount)].map((_, index) => (
                    <div className="raceRoad flex">
                      <div
                        className="w-1 h-5 relative"
                        style={{
                          left: `${newMaxPosition + 80}px`,
                        }}
                      >
                        <p>{newMaxPosition}</p>
                      </div>
                      <div
                        className="w-1 h-5 relative bg-red-600"
                        style={{
                          left: `${newMaxPosition + 70}px`,
                        }}
                      />
                      <div
                        key={index}
                        className="transition-transform  flex justify-center items-center duration-500 transform hover:translate-x-4"
                        style={{
                          transform: `translateX(${positions[index]}px)`,
                        }}
                      >
                        <p>{positions[index]}m</p>
                        <Image src={Car} width={30} height={30} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Barber;
