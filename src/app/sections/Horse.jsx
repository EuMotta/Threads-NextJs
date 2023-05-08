import Image from 'next/image';
import { useState } from 'react';
import '../../styles/Horse.css';
import horse1 from '../../images/horse1.svg';
import { horses } from '../constants';

export default function Horse() {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [history, setHistory] = useState([]);
  const [displayText, setDisplayText] = useState('Empate');
  const [gameOver, setGameOver] = useState(false);

  const handleUndo = () => {
    if (history.length > 1) {
      const prevPosition2 = history.pop();
      const prevPosition1 = history.pop();
      setPosition1(prevPosition1);
      setPosition2(prevPosition2);
      setHistory(history);
      if (prevPosition1 === 0 && prevPosition2 === 0) {
        setDisplayText('false');
        setGameOver(true);
      }
      if(position1 < 100 && position2 < 100){
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

 

const handleHorse1 = () => {
  if (gameOver) return;

  const maxPosition = 1200;
  const newPosition1 = Math.min(
    maxPosition,
    Math.floor(position1 + Math.random() * (40 - 10) + 30)
  );
  const newPosition2 = Math.min(
    maxPosition,
    Math.floor(position2 + Math.random() * (40 - 10) + 30)
  );
  setPosition1(newPosition1);
  setPosition2(newPosition2);
  setHistory([...history, position1, position2]);

  if (newPosition1 >= maxPosition && newPosition2 >= maxPosition) {
    setDisplayText("Empate!");
    setGameOver(true);
  } else if (newPosition1 >= maxPosition) {
    setDisplayText("Cavalo 1 venceu!");
    setGameOver(true);
  } else if (newPosition2 >= maxPosition) {
    setDisplayText("Cavalo 2 venceu!");
    setGameOver(true);
  } else if (newPosition1 > newPosition2) {
    setDisplayText("Cavalo 1 está na frente!");
  } else if (newPosition2 > newPosition1) {
    setDisplayText("Cavalo 2 está na frente!");
  } else if (newPosition2 == newPosition1) {
    setDisplayText("Empate");
  }
};

  return (
    <main className="p-5">
      <div className="">
        <div className="">
          {horses.map(item => (
            <div className="bg-road">
              <div
                className="relative w-14"
                style={{
                  left: item.position === 'position1' ? position1 : position2,
                }}
              >
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
        <div className="p-5 mt-5 bg-gray-100 w-1/4 rounded-lg shadow-md">
          <div className="text-lg font-semibold mb-2">{displayText}</div>
          <div className="border p-2 rounded-lg mb-2">{position1}</div>
          <div className="border p-2 rounded-lg mb-4">{position2}</div>
          <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </main>
  );
}
