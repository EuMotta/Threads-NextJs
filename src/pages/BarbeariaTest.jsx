import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import Dormindo from '../images/Barbearia/Dormindo.svg';
import Cortando from '../images/Barbearia/Cortando.svg';
import '../styles/globals.css';

const BarbeariaTest = () => {
  const [queue, setQueue] = useState(0);
  const [atendido, setAtendido] = useState(0);

  useEffect(() => {
    if (queue > 0) {
      const timer = setTimeout(() => {
        setQueue(queue - 1);
        setAtendido(atendido + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [queue]);

  const handleAddCliente = () => {
    setQueue(queue + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Barbearia do Barbeiro Sonolento
      </h1>
      <p className="mb-2">Clientes na fila:</p>
      <div className="flex space-x-2 my-4">
        {[...Array(queue)].map((_, i) => (
          <FaUser key={i} />
        ))}
      </div>
      <p className="mb-4">Clientes atendidos: {atendido}</p>
      {queue === 0 ? (
        <>
          <p className="mb-2">O barbeiro está dormindo.</p>
          <Image src={Dormindo} width={400} height={400} />
        </>
      ) : (
        <>
          <p className="mb-2">O barbeiro está atendendo um cliente.</p>
          <Image src={Cortando} width={400} height={400} />
        </>
      )}
      <button
        type="button"
        onClick={handleAddCliente}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Adicionar cliente
      </button>
    </div>
  );
};

export default BarbeariaTest;
