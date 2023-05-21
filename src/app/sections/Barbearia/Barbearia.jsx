import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import Dormindo from '../../../images/Barbearia/Dormindo.svg';
import Cortando from '../../../images/Barbearia/Cortando.svg';
import Boost from '../../../images/Barbearia/Boost.svg';
import '../../../styles/globals.css';

const Barbearia = () => {
  const [queue, setQueue] = useState(0);
  const [atendido, setAtendido] = useState(0);
  const [speed, setSpeed] = useState(5000);
  const [queueStatus, setQueueStatus] = useState(false);
  const [speedStatus, setSpeedStatus] = useState(false);

  useEffect(() => {
    if (queue > 0) {
      const timer = setTimeout(() => {
        setQueue(queue - 1);
        setAtendido(atendido + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [queue]);

  const handleAddCliente = () => {
    setQueue(queue + 1);
    setQueueStatus(false);
  };
  const handleRemoveCliente = () => {
    if (queue > 0) {
      setQueue(queue - 1);
      setQueueStatus(false);
    } else setQueueStatus(true);
  };

  return (
    <div className="p-4 font-mono container mx-auto">
      <div className="grid grid-cols-4 gap-10">
        <div className="card_1">
          <div className="">
            <h4 className="mb-2">Clientes na fila:</h4>
            <div className="flex flex-wrap justify-center items-center space-x-2 my-4">
              {[...Array(queue)].map((_, i) => (
                <FaUser key={i} />
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className="mb-4">Clientes atendidos: {atendido}</p>
            <div className="flex flex-wrap justify-center items-center space-x-2 my-4">
              {[...Array(atendido)].map((_, i) => (
                <FaUser key={i} />
              ))}
            </div>
          </div>
          <div className="">
            <p>Clientes</p>
            <button
              type="button"
              onClick={handleAddCliente}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Adicionar cliente
            </button>
            <button
              type="button"
              onClick={handleRemoveCliente}
              disabled={queueStatus}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remover cliente
            </button>
          </div>
          <div className="">
            <div className="">
              <p>Adicionais</p>
            </div>
            <div className="">
              <button
                type="button"
                onClick={() => {
                  setSpeed(1000);
                  setSpeedStatus(true);
                  setTimeout(() => {
                    setSpeed(5000);
                    setSpeedStatus(false);
                  }, 8000);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Energético
              </button>
              <p>Tempo de corte:</p>
              <input
                type="number"
                value={speed / 1000}
                min={3}
                max={10}
                onChange={(e) => {
                  const { value } = e.target;
                  if (value >= 2 && value <= 10) {
                    setSpeed(value * 1000);
                  }
                }}
                className="shadow-sm shadow-slate-500 rounded-md p-2 w-2/5"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          {queue === 0 ? (
            <>
              <p className="mb-2">O barbeiro está dormindo.</p>
              <Image src={Dormindo} width={400} height={400} />
            </>
          ) : (
            <div>
              {speedStatus ? (
                <>
                  <p className="mb-2">O barbeiro está com boost.</p>
                  <Image src={Boost} width={400} height={400} />
                </>
              ) : (
                <>
                  <p className="mb-2">O barbeiro está atendendo um cliente.</p>
                  <Image src={Cortando} width={400} height={400} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Barbearia;
