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

  const handleUndo = () => {
    if (history.length > 1) {
      const prevPosition2 = history.pop();
      const prevPosition1 = history.pop();
      setPosition1(prevPosition1);
      setPosition2(prevPosition2);
      setHistory(history);
      if (prevPosition1 === 0 && prevPosition2 === 0) {
        setDisplayText('Inicio');
      }
    }
  };
  const resetPosition = () => {
    setPosition1(0);
    setPosition2(0);
    setHistory([]);
    setDisplayText('Empate');
  };

  const handleHorse1 = () => {
    const newPosition1 = position1 +  Math.random() * (50 - 10) + 10;
    const newPosition2 = position2 + Math.random() * (50 - 10) + 10;
    setPosition1(newPosition1);
    setPosition2(newPosition2);
    setHistory([...history, position1, position2]);
    if (newPosition1 > newPosition2) {
      setDisplayText('Cavalo 1 está na frente!');
    } else if (newPosition2 > newPosition1) {
      setDisplayText('Cavalo 2 está na frente!');
    } else if (newPosition2 == newPosition1) {
      setDisplayText('Empate');
    }
  };

  return (
    <main>
      <div className="">
          <div className="p-5">
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
        <div>{displayText}</div>
        <div className="border">{position1}</div>
        <div className="border">{position2}</div>
        <div className="flex p-5 gap-5">
          <button className="button-back" onClick={handleUndo}>
            Voltar
          </button>
          <button className="button-go" onClick={handleHorse1}>
            Avançar
          </button>
          <button className="button-go" onClick={resetPosition}>
            Resetar
          </button>
        </div>
      </div>
    </main>
  );
}
