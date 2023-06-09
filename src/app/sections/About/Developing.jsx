'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LibrarySvg1 from '../../../images/About/Developing2.svg';

import { fadeIn, staggerContainer, textVariant } from '../../../utils/motion';
import { developingList } from '../../constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Developing = () => (
  <section className="paddings z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container flex flex-col gap-10 mx-auto"
    >
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <h1 className="font-bold mb-5 font-mono">Desenvolvimento</h1>
            <div>
              {developingList.idea.slice(0, 3).map((item) => (
                <motion.div
                  variants={textVariant(`${item.time}`)}
                  className="mb-1 mt-5"
                  key={item.title}
                >
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                  </div>
                  <p className="text-justify font-mono">
                    &nbsp;{item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 my-10">
          <motion.div
            variants={fadeIn('down', 'tween', 0, 1)}
            className="flex justify-center"
            drag
            dragConstraints={{
              top: -0.2,
              left: -0.2,
              right: 0.2,
              bottom: 0.2,
            }}
          >
            <Image
              src={LibrarySvg1}
              width={600}
              height={600}
              unoptimized
              alt="Librarys"
              onDragStart={ImpedirArrastar}
            />
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1 my-10">
          <div className="card_1 p-5 shadow-sm shadow-slate-600 overflow-scroll h-96 justify-center">
            <h3>Exemplo de useState</h3>
            <pre>
              <p className="text-sm">
                {`import { useState } from 'react';

  function MeuComponente() {
    const [meuEstado, setMeuEstado] = useState(0);

    return (
      <>
        <p>Você clicou {meuEstado} vezes</p>
        <button onClick={() => setMeuEstado(meuEstado + 1)}>
          Clique aqui
        </button>
      </>
    );
  }`}
              </p>
            </pre>
            <p>
              &nbsp;No caso acima, a variavel{' '}
              <span className="constant">meuEstado</span> recebeu o valor
              anterior(0) + 1, sempre que é clicado, é somado +1 na variavel.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="px-5">
            <h1 className="font-bold mb-5 font-mono">Construção</h1>
            <div>
              {developingList.construction.slice(0, 3).map((item) => (
                <motion.div
                  variants={textVariant(`${item.time}`)}
                  className="mb-1 mt-5"
                  key={item.title}
                >
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                  </div>
                  <p className="text-justify font-mono">
                    &nbsp;{item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <h1 className="font-bold mb-5 font-mono">Cálculo de resultado</h1>
            <div>
              {developingList.resultCalc.slice(0, 3).map((item) => (
                <motion.div
                  variants={textVariant(`${item.time}`)}
                  className="mb-1 mt-5"
                  key={item.title}
                >
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                  </div>
                  <p className="text-justify font-mono">
                    &nbsp;{item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 my-10">
          <div className="card_1 p-5 shadow-sm shadow-slate-600 overflow-scroll h-96 justify-center">
            <h3>Cálculo</h3>
            <pre>
              <p className="text-sm">
                {`  ...
  function MeuComponente() {
    ...
    const handleHorse1 = () => {
      const maxPosition = 1400;
      const newPosition1 = Math.min(
      maxPosition,
      Math.floor(currentPosition1 + Math.random() * (speed - 10) + speed),
    );
    const newPosition2 = Math.min(
      maxPosition,
      Math.floor(currentPosition2 + Math.random() * (speed - 10) + speed),
    );
    ...
    }
  }`}
              </p>
            </pre>
            <h3>Velocidade:</h3>
            <pre>
              {' '}
              <p className="text-sm">
                {` const [speedInterval, setSpeedInterval] = useState(400);

    const startRace = () => {
    const intervalId = setInterval(() => {
      handleHorse1();
      if (currentPosition1 >= maxPosition || currentPosition2 >= maxPosition) {
        clearInterval(intervalId);
      }
    }, speedInterval);
  };`}{' '}
              </p>
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Developing;
