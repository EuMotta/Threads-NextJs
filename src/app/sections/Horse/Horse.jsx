/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
/* eslint-disable no-shadow */
import Image from 'next/image';
import { useState } from 'react';
import '../../../styles/Horse.css';
import { AiOutlineBorderRight } from 'react-icons/ai';
import { MdSocialDistance } from 'react-icons/md';
import { GiStarsStack } from 'react-icons/gi';
import { FaFlagCheckered } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { horses } from '../../constants';

import { Explication } from '.';
import { Graph1, Graph2, Graph3 } from '../../components/Charts';

// eslint-disable-next-line react/function-component-definition
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
  const [winner, setWinner] = useState('');
  const [isRaceStarted, setIsRaceStarted] = useState(false);
  const maxPosition = 1400;
  const handleShowBorder = () => {
    setShowBorder((prevShowBorder) => !prevShowBorder);
  };
  const handleShowDistance = () => {
    setShowDistance((prevShowDistance) => !prevShowDistance);
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
    setIsRaceStarted(false);
    setPosition1(0);
    setPosition2(0);
    setLeftPosition1(1400);
    setLeftPosition2(1400);
    setHistory([]);
    setDisplayText('Inicio');
    setGameOver(false);
  };

  let currentPosition1 = position1;
  let currentPosition2 = position2;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      horse1: {
        name: 'Mario',
        delay: positionMedia1,
        mediaDelay: positionMedia1 / raceResults.length,
        efficiency: horseEfficiency1,
        mediaEfficiency: horseEfficiency1 / raceResults.length,
      },
      horse2: {
        name: 'Josivaldo',
        delay: positionMedia2,
        mediaDelay: positionMedia2 / raceResults.length,
        efficiency: horseEfficiency2,
        mediaEfficiency: horseEfficiency2 / raceResults.length,
      },
      race: {
        raceNumber: raceResults.length,
        raceResult: winner,
      },
    };

    const response = await fetch(`/api/HistoryHorse/${e}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  };
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
      toast('🐎 Empate!', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      handleSubmit(new Event('submit'));
      setWinner('Empate');
      setGameOver(true);
    } else if (newPosition1 >= maxPosition) {
      setDisplayText('Mario venceu!');
      setRaceResults([...raceResults, 'Mario']);
      setVictoryHorse1(victoryHorse1 + 1);
      setPositionMedia2(positionMedia2 + leftPosition2);
      setShowStar(true);
      toast('🐎 Mario venceu!', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      handleSubmit(new Event('submit'));
      setWinner('Mario');
      setIsRaceStarted(true);
      setGameOver(true);
    } else if (newPosition2 >= maxPosition) {
      setDisplayText('Josivaldo venceu!');
      toast('🐎 Josivaldo venceu!', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setWinner('Josivaldo');
      setRaceResults([...raceResults, 'Josivaldo']);
      setVictoryHorse2(victoryHorse2 + 1);
      setPositionMedia1(positionMedia1 + leftPosition1);
      setShowStar(true);
      handleSubmit(new Event('submit'));
      setIsRaceStarted(true);
      setGameOver(true);
    } else if (newPosition1 > newPosition2) {
      setDisplayText('Mario está na frente!');
    } else if (newPosition2 > newPosition1) {
      setDisplayText('Josivaldo está na frente!');
    } else if (newPosition2 === newPosition1) {
      setDisplayText('Empate');
    }
  };
  const startRace = () => {
    setIsRaceStarted(true);
    const intervalId = setInterval(() => {
      handleHorse1();
      if (currentPosition1 >= maxPosition || currentPosition2 >= maxPosition) {
        clearInterval(intervalId);
      }
    }, speedInterval);
    setIsRaceStarted(false);
  };

  /* test */
  const [isFixed, setIsFixed] = useState(false);

  const handleButtonClick = () => {
    setIsFixed((prevIsFixed) => !prevIsFixed);
  };
  return (
    <main className="container mx-auto">
      <h4 className=" text-center">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </h4>
      <div className="">
        <div className={`card_2 ${isFixed ? 'fixed w-[1550px] opacity-80 z-50 bottom-64' : ''} duration-500 p-5 rounded-lg shadow-md shadow-slate-500`}>
          {horses.map((item) => (
            <div className="bg-road">
              <div className="relative">
                <div className="absolute right-0 top-3 text-3xl flex items-end">
                  <h3>
                    <FaFlagCheckered />
                  </h3>
                </div>
                <div className="absolute right-10 top-3">
                  {item.position === 'position1' ? (
                    <p> {leftPosition1}</p>
                  ) : (
                    <p> {leftPosition2}</p>
                  )}
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
                      {item.position === 'position1' ? (
                        <p>{position1}</p>
                      ) : (
                        <p>{position2}</p>
                      )}
                    </div>
                  )}
                </div>
                {showStar
                && item.position === 'position1'
                && displayText === 'Mario venceu!' ? (
                  <div className="absolute left-14 ">
                    <GiStarsStack className="text-yellow-300 text-xl" />
                  </div>
                  ) : null}

                {showStar
                && item.position === 'position2'
                && displayText === 'Josivaldo venceu!' ? (
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
        <div className="grid font-mono grid-cols-4 gap-5">
          <div className="col-span-1 flex flex-col gap-5">
            <div className="">
              <div className={`p-5 mt-5 card_2 ${isFixed ? 'fixed z-50 opacity-90 bottom-0' : ''} duration-500 rounded-lg shadow-md`}>
                <div className="flex">
                  <div className=" w-5/6">
                    <div className="text-lg font-semibold mb-2">
                      <h4>{displayText}</h4>
                    </div>
                    <div className="border p-2 rounded-lg mb-2">
                      <h4> {position1}</h4>
                    </div>
                    <div className="border p-2 rounded-lg mb-4">
                      <h4> {position2}</h4>
                    </div>
                  </div>
                  <div className="w-1/6 p-2 flex flex-col justify-center items-center">
                    <button type="button" onClick={handleShowBorder}>
                      <AiOutlineBorderRight className="text-2xl" />
                    </button>
                    <button type="button" onClick={handleShowDistance}>
                      <MdSocialDistance className="text-2xl" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <button
                    type="button"
                    className=" bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={handleUndo}
                    disabled={isRaceStarted}
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    className=" bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={handleHorse1}
                    disabled={isRaceStarted}
                  >
                    Avançar
                  </button>
                  <button
                    type="button"
                    className=" bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={() => {
                      resetPosition();
                      toast.success('Corrida Reiniciada!', {
                        position: 'bottom-center',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                      });
                    }}
                    disabled={!isRaceStarted}
                  >
                    Reiniciar
                  </button>
                  <button
                    type="button"
                    className="bg-violet-500 hover:bg-violet-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={() => {
                      startRace();
                      setIsRaceStarted(true);
                    }}
                    disabled={isRaceStarted}
                  >
                    auto
                  </button>
                  <button
                    type="button"
                    className="bg-violet-500 hover:bg-violet-700 text-white text-sm font-bold py-2 px-4 rounded"
                    onClick={handleButtonClick}
                    disabled={isRaceStarted}
                  >
                    {isFixed ? 'Desfixar' : 'Fixar'}
                  </button>
                </div>
              </div>
            </div>
            <div className="p-5 mt-5 card_2 flex gap-5  rounded-lg shadow-md">
              <div className="flex  gap-5 flex-col">
                <div className="flex flex-wrap items-center justify-center">
                  <input
                    type="number"
                    value={speed}
                    min={13}
                    max={600}
                    onChange={(e) => {
                      const { value } = e.target;
                      if (value >= 13 && value <= 600) {
                        setSpeed(value);
                      }
                    }}
                    className="shadow-sm shadow-slate-500 rounded-md p-2 w-2/5"
                  />
                  <div className="text-lg font-bold flex  justify-center items-center ml-2">
                    <p>Velocidade</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center">
                  <input
                    type="number"
                    value={speedInterval}
                    onChange={(e) => setSpeedInterval(e.target.value)}
                    className="shadow-sm shadow-slate-500 rounded-md p-2 w-2/5"
                  />
                  <div className="text-lg font-bold flex justify-center items-center ml-2">
                    <p> Intervalo</p>
                  </div>
                </div>
              </div>
              <div className="p-2  flex flex-col justify-center items-center">
                <button
                  type="button"
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
            <table className="card_2 font-semibold rounded-md shadow-sm shadow-slate-300 p-5 text-xl">
              <tbody className="text-center">
                <tr>
                  <td>
                    <h5>Atrasos do cavalo 1:</h5>
                  </td>
                  <td>
                    <h4>{positionMedia1}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Atrasos do cavalo 2:</h5>
                  </td>
                  <td>
                    <h4>{positionMedia2}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Média do cavalo 1:</h5>
                  </td>
                  <td>
                    <h4>
                      {Number.isNaN(
                        Math.floor(positionMedia1 / raceResults.length),
                      )
                        ? 0
                        : Math.floor(positionMedia1 / raceResults.length)}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Média do cavalo 2:</h5>
                  </td>
                  <td>
                    <h4>
                      {Number.isNaN(
                        Math.floor(positionMedia2 / raceResults.length),
                      )
                        ? 0
                        : Math.floor(positionMedia2 / raceResults.length)}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Eficiência do cavalo 1:</h5>
                  </td>
                  <td>
                    <h4>{horseEfficiency1}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Eficiência do cavalo 2:</h5>
                  </td>
                  <td>
                    <h4>{horseEfficiency2}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Média de eficiência do cavalo 1:</h5>
                  </td>
                  <td>
                    <h4>
                      {Number.isNaN(
                        Math.floor(horseEfficiency1 / raceResults.length),
                      )
                        ? 0
                        : Math.floor(horseEfficiency1 / raceResults.length)}
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Média de eficiência do cavalo 2:</h5>
                  </td>
                  <td>
                    <h4>
                      {Number.isNaN(
                        Math.floor(horseEfficiency2 / raceResults.length),
                      )
                        ? 0
                        : Math.floor(horseEfficiency2 / raceResults.length)}
                    </h4>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="">
              <button
                type="button"
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
                  toast.success('🐎 Resetado!', {
                    position: 'bottom-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                }}
              >
                resetar
              </button>
              <table className="table-auto w-full mb-4 text-center card_2 rounded-md shadow-sm shadow-slate-300">
                <thead>
                  <tr>
                    <th className="px-4 py-2">
                      <p className="text-center">Corrida</p>
                    </th>
                    <th className="px-4 py-2">
                      <p className="text-center">Resultado</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {raceResults.map((result, index) => (
                    <tr key={index}>
                      <td>
                        <p>{index + 1}</p>
                      </td>
                      <td>
                        <p>{result}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-3 card_2 my-5">
            <div className="flex col-span-3 flex-col items-center justify-center py-10">
              <div className="flex  flex-wrap justify-center items-center gap-5">
                <div className="card_1 p-3 rounded-lg shadow-md">
                  <h1 className="text-xl text-center font-bold mb-5">
                    Quantidade de vitórias e empates
                  </h1>
                  <Graph1
                    victoryHorse1={victoryHorse1}
                    victoryHorse2={victoryHorse2}
                    draw={draw}
                  />
                </div>
                <div className="card_1  p-3 rounded-lg shadow-md">
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
                <div className="card_1  p-3 rounded-lg shadow-md">
                  <h1 className="text-xl text-center font-bold mb-5">
                    Eficiência e média da eficiência
                  </h1>
                  <Graph3
                    horseEfficiency1={horseEfficiency1}
                    horseEfficiency2={horseEfficiency2}
                    horseEfficiencyCalc1={Math.floor(
                      horseEfficiency1 / raceResults.length,
                    )}
                    horseEfficiencyCalc2={Math.floor(
                      horseEfficiency2 / raceResults.length,
                    )}
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
