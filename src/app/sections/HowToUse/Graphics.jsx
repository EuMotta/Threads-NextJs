'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../../styles';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import GoBackImage from '../../../images/HowToUse/GoBack.svg';
import { HowToGraph1, HowToGraph2 } from '../../components/Charts';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Graphics = () => (
  <section
    id="languages"
    className=" bg-slate-200 rounded-lg shadow-3xl shadow-slate-300 container mx-auto"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2 mx-5"
    >
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
          <div className="text-center font-bold font-mono ">
            <span className='text-xl'>Exemplos</span>
            <div className="grid grid-cols-2 p-2">
              <HowToGraph1 />
              <HowToGraph2 />
            </div>
          </div>
        </div>
      </motion.div>
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
        variants={fadeIn('right', 'tween', 0, 1)}
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
          src={GoBackImage}
          onDragStart={ImpedirArrastar}
          width={500}
          height={500}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Graphics;
