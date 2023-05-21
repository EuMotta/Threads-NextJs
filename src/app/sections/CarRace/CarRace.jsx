'use client';

import { useState } from 'react';
import '../../../styles/CarRace.css';
import Image from 'next/image';
import Car from '../../../images/CarRace/car-svgrepo-com.svg';

const CarRace = () => {
  const [carCount, setCarCount] = useState(0);
  const [positions, setPositions] = useState([]);
  const [position1, setPosition1] = useState(100);
  const [position2, setPosition2] = useState(200);
  const [position3, setPosition3] = useState(400);
  const [position4, setPosition4] = useState(600);
  const [position5, setPosition5] = useState(800);
  const [newMaxPosition, setNewMaxPosition] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const handleAddCar = () => {
    setCarCount(carCount + 1);
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
    const allCarsAtPosition3 = positions.every(
      (position) => position >= position3,
    );
    const allCarsAtPosition4 = positions.every(
      (position) => position >= position4,
    );
    const allCarsAtPosition5 = positions.every(
      (position) => position >= position5,
    );

    if (allCarsAtPosition5) {
      maxPosition = position5;
    } else if (allCarsAtPosition4) {
      maxPosition = position5;
    } else if (allCarsAtPosition3) {
      maxPosition = position4;
    } else if (allCarsAtPosition2) {
      maxPosition = position3;
    } else if (allCarsAtPosition1) {
      maxPosition = position2;
    } else {
      maxPosition = position1;
    }
    if (allCarsAtPosition5) {
      setGameOver(true);
    }
    setNewMaxPosition(maxPosition);

    const updatedPositions = positions.map((position) => {
      const newPosition = position + Math.floor(Math.random() * 60);
      return newPosition >= maxPosition ? maxPosition : newPosition;
    });
    setPositions(updatedPositions);
  };
  const handleReset = () => {
    setCarCount(0);
    setPositions([]);
    setPosition1(100);
    setPosition2(200);
    setPosition3(400);
    setPosition4(600);
    setPosition5(800);
    setNewMaxPosition(100);
    setGameOver(false);
  };

  return (
    <div className="container yPaddings mx-auto">
      <div className="">
        <div className="grid grid-cols-8 gap-5">
          <div className="col-span-2 flex flex-col gap-5">
            <div className="card_1">
              <div className="flex flex-col">
                <h3 className="text-center">Posições</h3>
                <div className="grid grid-cols-2 gap-5">
                  <label className="flex flex-row items-center space-x-2">
                    <p>P1:</p>
                    <input
                      type="number"
                      value={position1}
                      onChange={(event) => setPosition1(Number(event.target.value))}
                      className="border border-gray-300 rounded px-2 py-1 w-20"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <p>P2:</p>
                    <input
                      type="number"
                      value={position2}
                      onChange={(event) => setPosition2(Number(event.target.value))}
                      className="border border-gray-300 rounded px-2 py-1 w-20"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <p>P3:</p>
                    <input
                      type="number"
                      value={position3}
                      onChange={(event) => setPosition3(Number(event.target.value))}
                      className="border border-gray-300 rounded px-2 py-1 w-20"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <p>P4:</p>
                    <input
                      type="number"
                      value={position4}
                      onChange={(event) => setPosition4(Number(event.target.value))}
                      className="border border-gray-300 rounded px-2 py-1 w-20"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <p>P5:</p>
                    <input
                      type="number"
                      value={position5}
                      max={1000}
                      onChange={(event) => setPosition5(Number(event.target.value))}
                      className="border border-gray-300 rounded px-2 py-1 w-20"
                    />
                  </label>
                </div>
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
            <div className="card_1">
              <h3 className="text-center">Explicação</h3>
              <p className="!text-left">
                &nbsp; Os carros só avançam se estiverem na posição definida, no
                momento só vão avançar se estiverem na posição{' '}
                <strong>
                  <u>
                    {gameOver
                      ? carCount === 0
                        ? '( Não há carros, adicione um carro para visualizar )'
                        : '(Corrida finalizada)'
                      : carCount > 0
                        ? newMaxPosition
                        : '( Não há carros, adicione um carro para visualizar )'}
                  </u>
                </strong>
                .
              </p>
              <p className="!text-left">
                &nbsp; O sistema de barreira diz que, os threads precisam estar
                na mesma posição para continuarem seu processo, até o proximo
                ponto definido.
              </p>
            </div>
          </div>

          <div className="col-span-6 h-[40rem] card_1 overflow-scroll">
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
  );
};

export default CarRace;
