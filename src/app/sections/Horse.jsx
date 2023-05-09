import Image from 'next/image';
import { useState } from 'react';
import '../../styles/Horse.css';
import horse1 from '../../images/horse1.svg';
import { explication, horses } from '../constants';
import { AiOutlineBorderRight } from 'react-icons/ai';
import { MdSocialDistance } from 'react-icons/md';
import { GiStarsStack } from 'react-icons/gi';
import { FaFlagCheckered } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

export default function Horse() {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [leftPosition1, setLeftPosition1] = useState(0);
  const [leftPosition2, setLeftPosition2] = useState(0);
  const [history, setHistory] = useState([]);
  const [displayText, setDisplayText] = useState('Empate');
  const [gameOver, setGameOver] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [showStar, setShowStar] = useState(false);
  const [speed, setSpeed] = useState(30);
  const [speedInterval, setSpeedInterval] = useState(400);
  const maxPosition = 1200;
  const handleShowBorder = () => {
    setShowBorder(prevShowBorder => !prevShowBorder);
  };
  const handleShowDistance = () => {
    setShowDistance(prevShowDistance => !prevShowDistance);
  };

  const handleUndo = () => {
    if (gameOver) return;
    if (history.length > 1) {
      const prevPosition2 = history.pop();
      const prevPosition1 = history.pop();
      setPosition1(prevPosition1);
      setPosition2(prevPosition2);
      setHistory(history);
      if (prevPosition1 === 0 && prevPosition2 === 0) {
        setDisplayText('Inicio');
        setGameOver(true);
      }
      if (position1 < 100 && position2 < 100) {
        setGameOver(false);
      }
    }
  };
  const resetPosition = () => {
    setPosition1(0);
    setPosition2(0);
    setHistory([]);
    setDisplayText('Inicio');
    setGameOver(false);
  };

  const startRace = () => {
    const intervalId = setInterval(() => {
      handleHorse1();
      if (currentPosition1 >= maxPosition || currentPosition2 >= maxPosition) {
        clearInterval(intervalId);
      }
    }, speedInterval);
  };

  let currentPosition1 = position1;
  let currentPosition2 = position2;

  const handleHorse1 = () => {
    if (gameOver) return;

    const maxPosition = 1200;
    const newPosition1 = Math.min(
      maxPosition,
      Math.floor(currentPosition1 + Math.random() * (speed - 10) + speed),
    );
    const newPosition2 = Math.min(
      maxPosition,
      Math.floor(currentPosition2 + Math.random() * (speed - 10) + speed),
    );
    const leftPosition1 = maxPosition - newPosition1;
    const leftPosition2 = maxPosition - newPosition2;
    setLeftPosition1(leftPosition1);
    setLeftPosition2(leftPosition2);
    setPosition1(newPosition1);
    setPosition2(newPosition2);
    currentPosition1 = newPosition1;
    currentPosition2 = newPosition2;
    setHistory([...history, currentPosition1, currentPosition2]);

    if (newPosition1 >= maxPosition && newPosition2 >= maxPosition) {
      setDisplayText('Empate!');
      setGameOver(true);
    } else if (newPosition1 >= maxPosition) {
      setDisplayText('Cavalo 1 venceu!');
      setShowStar(true);
      setGameOver(true);
    } else if (newPosition2 >= maxPosition) {
      setDisplayText('Cavalo 2 venceu!');
      setShowStar(true);
      setGameOver(true);
    } else if (newPosition1 > newPosition2) {
      setDisplayText('Cavalo 1 está na frente!');
    } else if (newPosition2 > newPosition1) {
      setDisplayText('Cavalo 2 está na frente!');
    } else if (newPosition2 == newPosition1) {
      setDisplayText('Empate');
    }
  };

  return (
    <main className="container mx-auto">
      <div className="">
        <div className="bg-gray-100 p-5 rounded-lg shadow-md shadow-slate-500">
          {horses.map(item => (
            <div className="bg-road">
              <div className="relative">
                <div className="absolute right-0 top-3 text-3xl flex items-end">
                  <FaFlagCheckered />
                </div>
                <div className="absolute right-10 top-3">
                  {item.position === 'position1'
                    ? leftPosition1
                    : leftPosition2}
                </div>
              </div>
              <div
                className="relative duration-700 w-14"
                style={{
                  left: item.position === 'position1' ? position1 : position2,
                  borderRight: showBorder ? '1px solid blue' : 'none',
                }}
              >
                <div className="text-center absolute">
                  {showDistance && (
                    <div className="absolute -left-8 top-2">
                      {item.position === 'position1' ? position1 : position2}
                    </div>
                  )}
                </div>
                {showStar &&
                item.position === 'position1' &&
                displayText === 'Cavalo 1 venceu!' ? (
                  <div className="absolute left-14 ">
                    <GiStarsStack className="text-yellow-300 text-xl" />
                  </div>
                ) : null}

                {showStar &&
                item.position === 'position2' &&
                displayText === 'Cavalo 2 venceu!' ? (
                  <div className="absolute left-14 ">
                    <GiStarsStack className="text-yellow-300 text-xl" />
                  </div>
                ) : null}
                <Image
                  className="scale-x-[-1]"
                  src={item.image}
                  width={50}
                  height={50}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1">
            <div className="">
              <div className="p-5 mt-5 bg-gray-100  rounded-lg shadow-md">
                <div className="flex">
                  <div className=" w-5/6">
                    <div className="text-lg font-semibold mb-2">
                      {displayText}
                    </div>
                    <div className="border p-2 rounded-lg mb-2">
                      {position1}
                    </div>
                    <div className="border p-2 rounded-lg mb-4">
                      {position2}
                    </div>
                  </div>
                  <div className="w-1/6 p-2 flex flex-col justify-center items-center">
                    <button onClick={handleShowBorder}>
                      <AiOutlineBorderRight className="text-2xl" />
                    </button>
                    <button onClick={handleShowDistance}>
                      <MdSocialDistance className="text-2xl" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <button
                    className=" bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={handleUndo}
                  >
                    Voltar
                  </button>
                  <button
                    className=" bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={handleHorse1}
                  >
                    Avançar
                  </button>
                  <button
                    className=" bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={resetPosition}
                  >
                    Resetar
                  </button>
                  <button
                    className=" bg-violet-500 hover:bg-violet-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={startRace}
                  >
                    auto
                  </button>
                </div>
              </div>
            </div>
            <div className="p-5 mt-5 bg-gray-100 flex  rounded-lg shadow-md">
              <div className="flex gap-5 flex-col">
                <div className="flex">
                  <input
                    type="number"
                    value={speed}
                    min={13}
                    max={600}
                    onChange={e => {
                      const value = e.target.value;
                      if (value >= 13 && value <= 600) {
                        setSpeed(value);
                      }
                    }}
                    className="shadow-sm shadow-slate-500 rounded-md p-2 w-1/4"
                  />
                  <div className="text-lg font-bold flex  justify-center items-center ml-2">
                    Velocidade
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="number"
                    value={speedInterval}
                    onChange={e => setSpeedInterval(e.target.value)}
                    className="shadow-sm shadow-slate-500 rounded-md p-2 w-1/4"
                  />
                  <div className="text-lg font-bold flex justify-center items-center ml-2">
                    Intervalo
                  </div>
                </div>
              </div>
              <div className="p-2  flex flex-col justify-center items-center">
                <button
                  className="hover:scale-110 transition-all text-2xl"
                  onClick={() => {
                    setSpeed(30);
                    setSpeedInterval(400);
                  }}
                >
                  <GrPowerReset />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="p-5 mt-5 bg-gray-100 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold mb-4">
                Threads em uma corrida de cavalos
              </h1>
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  O que são threads?
                </h2>
                <p className="mb-4">
                  Threads são uma maneira de dividir um programa em duas ou mais
                  tarefas simultâneas que podem ser executadas
                  independentemente. Isso significa que cada thread pode
                  executar uma parte diferente do código ao mesmo tempo que
                  outras threads. Isso pode ser útil quando você tem várias
                  tarefas que precisam ser executadas ao mesmo tempo, mas não
                  dependem uma da outra para serem concluídas.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Como usar threads em uma corrida de cavalos?
                </h2>
                <p className="mb-4">
                  Em uma simulação de corrida de cavalos com dois cavalos, você
                  pode usar threads para controlar o movimento de cada cavalo de
                  forma independente. Cada thread pode ser responsável por
                  atualizar a posição do cavalo na pista e verificar se ele
                  cruzou a linha de chegada.
                  <br /> Os cavalos precisam de uma margem de variação em sua
                  velocidade, se a velocidade máxima for 50, varia entre 40 a
                  50.
                </p>
              </div>
              <div className="p-5 mt-5 bg-gray-100 rounded-lg shadow-md shadow-slate-500">
                <h1 className="text-2xl font-bold mb-4">
                  Exemplos de variação do cálculo
                </h1>
                <table className="table-auto w-full mb-4 text-center">
                  <thead>
                    <tr className="text-center">
                      <th className="px-4 py-2 ">Speed</th>
                      <th className="px-4 py-2 ">Calculo</th>
                      <th className="px-4 py-2 ">Resultado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {explication.textExample.map(item => (
                      <tr>
                        <td>{item.value}</td>
                        <td>{item.formula}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
