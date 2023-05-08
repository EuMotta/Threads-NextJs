import Image from 'next/image';
import { useState } from 'react';
import '../../styles/Horse.css'
import horse1 from '../../images/horse1.svg';
import { horses } from '../constants';


export default function Horse() {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [history, setHistory] = useState([]);

  const handleUndo = () => {
    if (history.length > 1) {
      const prevPosition2 = history.pop();
      const prevPosition1 = history.pop();
      setPosition1(prevPosition1);
      setPosition2(prevPosition2);
      setHistory(history);
    }
  };

  const handleHorse1 = () => {
    const newPosition1 = position1 + Math.random() * (30 - 10) + 10;
    const newPosition2 = position2 + Math.random() * (30 - 10) + 10;
    setPosition1(newPosition1);
    setPosition2(newPosition2);
    setHistory([...history, position1, position2]);
  };

  return (
    <main>
      <div className="p-5">
        {horses.map(item => (
          <div
            className="relative w-14"
            style={{ left: item.position === 'position1' ? position1 : position2 }}
          >
            <Image
              className="scale-x-[-1]"
              src={item.image}
              width={50}
              height={50}
            />
          </div>
        ))}
        <div className="flex p-5 gap-5">
          <button className="button-back" onClick={handleUndo}>
            Voltar
          </button>
          <button className="button-go" onClick={handleHorse1}>
            Avançar
          </button>
        </div>
      </div>
    </main>
  );
}