'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../../styles';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import GoBackImage from '../../../images/HowToUse/GoBack.svg';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Speed = () => (
  <section
    id="GoBack"
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
          <h1 className="font-bold mb-5 font-mono text-5xl">
            Velocidade e intervalo
          </h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">
            Controle de velocidade e intervalo
          </h3>
          <p className="text text-justify font-mono">
            &nbsp; A velocidade que os cavalos vão percorrer por frame pode ser
            ajustada, permitindo assim controlar o tempo que vai levar para o
            cavalo completar a corrida.
          </p>
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

export default Speed;
