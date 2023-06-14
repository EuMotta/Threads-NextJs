/* eslint-disable react/jsx-no-bind */

'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Process4 from '../../../../images/Process/Process4.svg';
import { fadeIn } from '../../../../utils/motion';
import { process } from './constants';

const Relation = () => {
  function ImpedirArrastar(event) {
    event.preventDefault();
  }
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [showFinalTime, setShowFinalTime] = useState(0);

  const stopAnimation = () => {
    clearInterval(timerId);
    setIsRunning(false);
  };
  const animateProgress = (duration) => {
    let elapsedTime = 0;
    const increment = 100 / (duration * 10);

    const id = setInterval(() => {
      setProgress((prevProgress) => {
        const total = prevProgress + increment;
        if (total < 350) {
          elapsedTime += 0.1;
          return total;
        }
        clearInterval(id);
        setShowFinalTime(elapsedTime);
        console.log(`Tempo decorrido: ${elapsedTime.toFixed(1)} segundos`);
        return 350;
      });
    }, 100);

    setTimerId(id);
  };
  console.log(isRunning);
  const resetProgress = () => {
    stopAnimation();
    setProgress(0);
  };

  const handleClick = (duration) => {
    if (progress === 0) {
      setIsRunning(true);
      animateProgress(duration);
    }
  };

  useEffect(
    () => () => {
      stopAnimation();
    },
    [],
  );

  return (
    <section className="container mx-auto yPaddings">
      <div>
        <div className="mb-10">
          <h1 className="text-center">Onde se encontram?</h1>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            {process.relation.map((item) => (
              <div className="">
                <h4 className="font-bold mb-5">{item.subtitle}</h4>
                {item.description}
              </div>
            ))}
            <div className="mt-5">
              <h4>Exemplo:</h4>
              <p>
                &nbsp;&nbsp; Um processo precisa executar 350 pontos para
                concluir uma leitura de dados, escolha a quantidade de threads
                que vai executar esse processo.
              </p>
              <div className="p-5">
                <div className="shadow-sm shadow-slate-500">
                  <svg width="100%" height="20">
                    <rect
                      x="0"
                      y="0"
                      width={progress * 2}
                      height="20"
                      fill="blue"
                    />
                  </svg>
                </div>
                {progress <= 0 ? (
                  progress === 0 ? (
                    <div>
                      <p>Escolha quantos threads vão executar</p>
                    </div>
                  ) : (
                    <div className="flex gap-5">
                      <p>Processando...</p>
                      {progress}
                    </div>
                  )
                ) : progress === 350 ? (
                  <div>
                    <div className="flex gap-5">
                      <p>Processo concluído.</p>
                      {progress}
                    </div>
                    <p>{showFinalTime.toFixed(2)} segundos</p>
                  </div>
                ) : (
                  <div className="flex gap-5">
                    <p>Processando...</p>
                    {progress}
                  </div>
                )}
              </div>

              <div className="flex gap-5">
                <button
                  type="button"
                  onClick={() => handleClick(4)}
                  className="p-2 bg-blue-100"
                >
                  <p>1 Thread</p>
                </button>
                <button
                  type="button"
                  onClick={() => handleClick(2)}
                  className="p-2 bg-blue-100"
                >
                  <p>2 Threads</p>
                </button>
                <button
                  type="button"
                  onClick={() => handleClick(1)}
                  className="p-2 bg-blue-100"
                >
                  <p>3 Threads</p>
                </button>
                <button
                  type="button"
                  onClick={resetProgress}
                  className="p-2 bg-blue-100"
                >
                  <p>Resetar</p>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <motion.div
              variants={fadeIn('down', 'tween', 0, 1)}
              className="card_1"
              drag
              dragConstraints={{
                top: -0.2,
                left: -0.2,
                right: 0.2,
                bottom: 0.2,
              }}
            >
              <Image
                src={Process4}
                width={750}
                height={750}
                unoptimized
                onDragStart={ImpedirArrastar}
                alt="threadss"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relation;
