'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../../styles';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import GraphicsImage from '../../../images/HowToUse/Graphics.svg';
import {
  HowToGraph1,
  HowToGraph2,
  HowToGraph3,
  HowToGraph4,
} from '../../components/Charts';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Graphics = () => (
  <section
    id="graphics"
    className="bg-slate-200 rounded-lg shadow-3xl shadow-slate-300 container mx-auto my-20"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2 mx-5 py-10"
    >
      <motion.div
        animate={{
          scale: [1.1, 1.1, 1.11, 1.1, 1.1],
          rotate: [0.1, -0.1, 0.1, -0.1, 0.1],
          borderRadius: ['50%', '46%', '50%', '46%', '50%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 1,
        }}
        variants={fadeIn('left', 'tween', 0, 1)}
        drag
        dragConstraints={{
          top: -0.2,
          left: -0.2,
          right: 0.2,
          bottom: 0.2,
        }}
        className="col-span-1 my-10 flex justify-center items-center"
      >
        <Image
          src={GraphicsImage}
          onDragStart={ImpedirArrastar}
          width={500}
          height={500}
        />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0, 1)}
        className="col-span-1 flex justify-center items-center"
      >
        <div className="px-5">
          <h1 className="font-bold mb-5 font-mono text-5xl">Gráficos</h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">
            Dados dos Gráficos
          </h3>
          <p className="text text-justify font-mono">
            &nbsp; Os gráficos apresentam informações importantes sobre os
            resultados da corrida. Eles mostram a quantidade de vitórias de cada
            cavalo e também fornecem informações sobre a eficiência média e o
            atraso médio dos cavalos. Esses cálculos são realizados com base nos
            resultados da corrida e ajudam a entender melhor o desempenho dos
            cavalos.
          </p>
        </div>
      </motion.div>
    </motion.div>
    <div className="text-center font-bold font-mono ">
      <div className="text-3xl mb-10">Exemplos</div>
      <div className="grid grid-cols-3 gap-5 p-2">
        <div className="border p-2 border-slate-800 shadow-md shadow-slate-500 bg-slate-300">
          <h1 className="text-center text-2xl">Vitórias dos cavalos</h1>
          <HowToGraph1 />
        </div>
        <div className="border col-span-2 p-5 border-slate-800 shadow-md shadow-slate-500 bg-slate-300">
          <h1 className="text-center text-2xl">Média dos cavalos</h1>
          <HowToGraph2 />
        </div>
        <div className="col-span-4 grid gap-5">
          <div className="border p-5 border-slate-800 shadow-md shadow-slate-500 bg-slate-300">
            <h1 className="text-center text-2xl">Atendimentos realizados</h1>
            <HowToGraph3 />
          </div>
          <div className="border p-5 border-slate-800 shadow-md shadow-slate-500 bg-slate-300">
            <h1 className="text-center text-2xl">Gráfico misto</h1>
            <HowToGraph4 />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Graphics;
