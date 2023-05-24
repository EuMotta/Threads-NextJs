'use client';

import React, { useEffect, useState } from 'react';
import { TypingText } from '../../components/CustomTexts';
import { developingList } from '../../constants';

const Barber = () => {
  const [queue, setQueue] = useState(500);
  const [atendido, setAtendido] = useState(0);
  const [speed] = useState(5000);

  useEffect(() => {
    if (queue > 0) {
      const timer = setTimeout(() => {
        setQueue(queue - 1);
        setAtendido(atendido + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [queue]);

  return (
    <section className="container mx-auto">
      <div className="text-center">
        {developingList.Barber.map((barber) => (
          <div key={barber.title}>
            <TypingText
              title={barber.title}
              textStyles="text-center font-bold p-10 sm:mb-12 text-3xl sm:text-5xl z-50"
            />
            {barber.description}
          </div>
        ))}
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h3>Exemplo</h3>
          </div>
          <h4 className="mb-2">Clientes na fila: {queue}</h4>
          <p className="mb-4">Clientes atendidos: {atendido}</p>
        </div>
      </div>
    </section>
  );
};

export default Barber;
