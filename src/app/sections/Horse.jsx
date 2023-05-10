import Image from 'next/image';
import { useState } from 'react';
import '../../styles/Horse.css';
import horse1 from '../../images/horse1.svg';
import { horses } from '../constants';
import { AiOutlineBorderRight } from 'react-icons/ai';
import { MdSocialDistance } from 'react-icons/md';
import { GiStarsStack } from 'react-icons/gi';
import { FaFlagCheckered } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

import Explication from './Explication';
import { Graph1, Graph2, Graph3 } from '../components/Charts';

export default function Horse() {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [positionMedia1, setPositionMedia1] = useState(0);
  const [positionMedia2, setPositionMedia2] = useState(0);
  const [horseEfficiency1, setHorseEfficiency1] = useState(0);
  const [horseEfficiency2, setHorseEfficiency2] = useState(0);
  const [victoryHorse1, setVictoryHorse1] = useState(0);
  const [victoryHorse2, setVictoryHorse2] = useState(0);
  const [draw, setDraw] = useState(0);
  const [leftPosition1, setLeftPosition1] = useState(0);
  const [leftPosition2, setLeftPosition2] = useState(0);
  const [raceResults, setRaceResults] = useState([]);
  const [history, setHistory] = useState([]);
  const [displayText, setDisplayText] = useState('Empate');
  const [gameOver, setGameOver] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [showStar, setShowStar] = useState(false);
  const [speed, setSpeed] = useState(30);
  const [speedInterval, setSpeedInterval] = useState(400);
  const maxPosition = 1400;
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
    setLeftPosition1(1400);
    setLeftPosition2(1400);
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

    const maxPosition = 1400;
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
    setHorseEfficiency1(horseEfficiency1 + newPosition1);
    setHorseEfficiency2(horseEfficiency2 + newPosition2);

    if (newPosition1 >= maxPosition && newPosition2 >= maxPosition) {
      setDisplayText('Empate!');
      setRaceResults([...raceResults, 'Empate']);
      setDraw(draw + 1);
      setGameOver(true);
    } else if (newPosition1 >= maxPosition) {
      setDisplayText('Cavalo 1 venceu!');
      setRaceResults([...raceResults, 'Cavalo 1']);
      setVictoryHorse1(victoryHorse1 + 1);
      setPositionMedia2(positionMedia2 + leftPosition2);
      setShowStar(true);
      setGameOver(true);
    } else if (newPosition2 >= maxPosition) {
      setDisplayText('Cavalo 2 venceu!');
      setRaceResults([...raceResults, 'Cavalo 2']);
      setVictoryHorse2(victoryHorse2 + 1);
      setPositionMedia1(positionMedia1 + leftPosition1);
      setShowStar(true);
      setGameOver(true);
    } else if (newPosition1 > newPosition2) {
      setDisplayText('Cavalo 1 está na frente!');
    } else if (newPosition2 > newPosition1) {
      setDisplayText('Cavalo 2 está na frente!');
    } else if (newPosition2 === newPosition1) {
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
          <div className="col-span-1 flex flex-col gap-5">
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
            <div className="p-5 mt-5 bg-gray-100 flex gap-5  rounded-lg shadow-md">
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
                    className="shadow-sm shadow-slate-500 rounded-md p-2 w-2/5"
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
                    className="shadow-sm shadow-slate-500 rounded-md p-2 w-2/5"
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
            <table className="bg-gray-100 font-semibold rounded-md shadow-sm shadow-slate-300 p-5 text-xl">
              <tbody className="text-center">
                <tr>
                  <td>Atrasos do cavalo 1:</td>
                  <td>{positionMedia1}</td>
                </tr>
                <tr>
                  <td>Atrasos do cavalo 2:</td>
                  <td>{positionMedia2}</td>
                </tr>
                <tr>
                  <td>Média do cavalo 1:</td>
                  <td>{Math.floor(positionMedia1 / raceResults.length)}</td>
                </tr>
                <tr>
                  <td>Média do cavalo 2:</td>
                  <td>{Math.floor(positionMedia2 / raceResults.length)}</td>
                </tr>
                <tr>
                  <td>Eficiência do cavalo 1:</td>
                  <td>{horseEfficiency1}</td>
                </tr>
                <tr>
                  <td>Eficiência do cavalo 2:</td>
                  <td>{horseEfficiency2}</td>
                </tr>
                <tr>
                  <td>Média de eficiência do cavalo 1:</td>
                  <td>{Math.floor(horseEfficiency1 / raceResults.length)}</td>
                </tr>
                <tr>
                  <td>Média de eficiência do cavalo 2:</td>
                  <td>{Math.floor(horseEfficiency2 / raceResults.length)}</td>
                </tr>
              </tbody>
            </table>

            <div className="">
              <button
                className="bg-red-500 w-full hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded"
                onClick={() => {
                  setRaceResults([]);
                  setVictoryHorse1(0);
                  setVictoryHorse2(0);
                  setDraw(0);
                  setPositionMedia1(0);
                  setPositionMedia2(0);
                  setHorseEfficiency1(0);
                  setHorseEfficiency2(0);
                }}
              >
                resetar
              </button>
              <table className="table-auto w-full mb-4 text-center bg-gray-100 rounded-md shadow-sm shadow-slate-300">
                <thead>
                  <tr className="text-center">
                    <th className="px-4 py-2">Corrida</th>
                    <th className="px-4 py-2">Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  {raceResults.map((result, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-3 bg-gray-100 my-5">
            <div className="flex col-span-3 flex-col items-center justify-center py-10">
              <div className="grid grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h1 className="text-xl text-center font-bold mb-5">
                    Quantidade de vitórias e empates
                  </h1>
                  <Graph1
                    victoryHorse1={victoryHorse1}
                    victoryHorse2={victoryHorse2}
                    draw={draw}
                  />
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h1 className="text-xl text-center font-bold mb-5">
                    Atrasos e Média dos atrasos
                  </h1>
                  <Graph2
                    positionMedia1={positionMedia1}
                    positionMedia2={positionMedia2}
                    positionMediaCalc1={Math.floor(
                      positionMedia1 / raceResults.length,
                    )}
                    positionMediaCalc2={Math.floor(
                      positionMedia2 / raceResults.length,
                    )}
                  />
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h1 className="text-xl text-center font-bold mb-5">
                    Eficiência e média da eficiência
                  </h1>
                  <Graph3
                    horseEfficiency1={horseEfficiency1}
                    horseEfficiency2={horseEfficiency2}
                    horseEfficiencyCalc1={Math.floor(horseEfficiency1 / raceResults.length)}
                    horseEfficiencyCalc2={Math.floor(horseEfficiency2 / raceResults.length)}
                  />
                </div>
              </div>
            </div>
            <Explication />
          </div>
        </div>
      </div>
    </main>
  );
}
