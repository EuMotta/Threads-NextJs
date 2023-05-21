import { useState } from 'react';
import { FaCar } from 'react-icons/fa';
import '../styles/globals.css';

const CarRace = () => {
  const [carCount, setCarCount] = useState(0);
  const [positions, setPositions] = useState([]);
  const [position1, setPosition1] = useState(100);
  const [position2, setPosition2] = useState(200);
  const [position3, setPosition3] = useState(400);
  const [position4, setPosition4] = useState(600);
  const [position5, setPosition5] = useState(800);

  const handleAddCar = () => {
    setCarCount(carCount + 1);
    setPositions([...positions, 0]);
  };

  const handleAdvance = () => {
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

    let maxPosition;
    if (allCarsAtPosition5) {
      maxPosition = position5 + 200;
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

    const updatedPositions = positions.map((position) => {
      const newPosition = position + Math.floor(Math.random() * 30);
      return newPosition >= maxPosition ? maxPosition : newPosition;
    });
    setPositions(updatedPositions);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="grid grid-cols-5">
        <div className="">
          {[...Array(carCount)].map((_, index) => (
            <div
              key={index}
              className="transition-transform duration-500 transform hover:translate-x-4"
              style={{
                transform: `translateX(${positions[index]}px)`,
              }}
            >
              <FaCar size={24} />
            </div>
          ))}
        </div>
        <div className="">
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
          >
            Avançar
          </button>
          <div className="flex flex-col space-y-2">
            <label className="flex flex-row items-center space-x-2">
              <span>Position 1:</span>
              <input
                type="number"
                value={position1}
                onChange={(event) => setPosition1(Number(event.target.value))}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <label className="flex flex-row items-center space-x-2">
              <span>Position 2:</span>
              <input
                type="number"
                value={position2}
                onChange={(event) => setPosition2(Number(event.target.value))}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <label className="flex flex-row items-center space-x-2">
              <span>Position 3:</span>
              <input
                type="number"
                value={position3}
                onChange={(event) => setPosition3(Number(event.target.value))}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <label className="flex flex-row items-center space-x-2">
              <span>Position 4:</span>
              <input
                type="number"
                value={position4}
                onChange={(event) => setPosition4(Number(event.target.value))}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <label className="flex flex-row items-center space-x-2">
              <span>Position 5:</span>
              <input
                type="number"
                value={position5}
                onChange={(event) => setPosition5(Number(event.target.value))}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
          </div>
          {[...Array(carCount)].map((_, index) => (
            <div key={index} className="">
              <p>{positions[index]}px</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarRace;
