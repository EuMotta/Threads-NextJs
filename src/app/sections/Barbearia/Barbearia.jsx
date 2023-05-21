import Image from 'next/image';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Dormindo from '../../../images/Barbearia/Dormindo.svg';
import Cortando from '../../../images/Barbearia/Cortando.svg';
import Boost from '../../../images/Barbearia/Boost.svg';
import '../../../styles/globals.css';
import Client from '../../../images/Barbearia/QueueClient.svg';
import Client2 from '../../../images/Barbearia/FinalClient.svg';

const Barbearia = () => {
  const [queue, setQueue] = useState(0);
  const [atendido, setAtendido] = useState(0);
  const [speed, setSpeed] = useState(5000);
  const [queueStatus, setQueueStatus] = useState(false);
  const [speedStatus, setSpeedStatus] = useState(false);
  const [endService, setEndService] = useState([]);

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

  const HandleEndDay = () => {
    if (queue > 0) {
      toast('Espere a fila acabar!', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      const day = endService.length + 1;
      setEndService([...endService, { day, attended: atendido }]);
      console.log(endService);
    }
  };

  const handleReset = () => {
    setQueue(0);
    setAtendido(0);
  };

  return (
    <div className="p-4 font-mono container mx-auto">
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
      <div className="grid grid-cols-4 gap-10">
        <div className="card_1 col-span-1">
          <div className="">
            <h4 className="mb-2">Clientes na fila: {queue}</h4>
            <div className="flex flex-wrap h-10 gap-2 justify-center items-center my-4">
              {[...Array(Math.min(queue, 20))].map((_, i) => (
                <Image
                  src={Client}
                  width={20}
                  height={20}
                  key={i}
                  alt="client"
                />
              ))}
              {queue > 20 && <p>...</p>}
            </div>
          </div>
          <div className="mb-2">
            <p className="mb-4">Clientes atendidos: {atendido}</p>
            <div className="flex flex-wrap h-10 gap-2 justify-center items-center my-4">
              {[...Array(Math.min(atendido, 20))].map((_, i) => (
                <Image
                  src={Client2}
                  width={20}
                  height={20}
                  key={i}
                  alt="client"
                />
              ))}
              {atendido > 20 && <p>...</p>}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="items-center">
              <p className="font-bold text-lg">Clientes</p>
              <div className="flex flex-col gap-2">
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
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remover cliente
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">Adicionais</p>
              <div className="flex flex-col gap-2">
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
                  className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
                >
                  Energético
                </button>
                <button
                  type="button"
                  onClick={HandleEndDay}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Finalizar dia
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Resetar
                </button>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <p className="font-bold text-lg">Tempo de corte:</p>
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
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center">
          {queue === 0 ? (
            <>
              <p className="mb-2">O barbeiro está dormindo.</p>
              <Image src={Dormindo} width={500} height={500} alt="barber" />
            </>
          ) : (
            <div>
              {speedStatus ? (
                <>
                  <p className="mb-2">O barbeiro está com boost.</p>
                  <Image src={Boost} width={500} height={500} alt="barber" />
                </>
              ) : (
                <>
                  <p className="mb-2">O barbeiro está atendendo um cliente.</p>
                  <Image src={Cortando} width={500} height={500} alt="barber" />
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
