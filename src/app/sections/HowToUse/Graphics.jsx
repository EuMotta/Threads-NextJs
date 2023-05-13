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
    className="graphics_section"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid lg:grid-cols-2 mx-5 py-10"
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
        className="col-span-1 my-10 lg:block hidden justify-center items-center"
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
        className="col-span-1 graphics_text card_1"
      >
        <div className="graphics_text_text">
          <h1>Gráficos</h1>
          <h3>
            Dados dos Gráficos
          </h3>
          <p>
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
    <div className="graphics_graphics">
      <h2 className="text-3xl mb-10">Exemplos</h2>
      <div className="grid grid-cols-3 gap-5 p-2">
        <div className="graphics_graphics_graphic card_1">
          <h3>Vitórias dos cavalos</h3>
          <HowToGraph1 />
        </div>
        <div className="graphics_graphics_graphic card_1">
          <h3>Média dos cavalos</h3>
          <HowToGraph2 />
        </div>
        <div className="col-span-3 flex flex-col gap-5">
          <div className="graphics_graphics_graphic card_1">
            <h3>Atendimentos realizados</h3>
            <HowToGraph3 />
          </div>
          <div className="graphics_graphics_graphic card_1">
            <h3>Gráfico misto</h3>
            <HowToGraph4 />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Graphics;
