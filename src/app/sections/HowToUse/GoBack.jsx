'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../../styles';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import GoBackImage from '../../../images/HowToUse/GoBack.svg';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const GoBack = () => (
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
          <h1 className="font-bold mb-5 font-mono text-5xl">Botões</h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">
            Botões principais
          </h3>
          <p className="text text-justify font-mono">
            &nbsp; Para visualizar o funcionamento de um thread quadro a quadro,
            você pode usar os botões de `avançar` e `voltar` para percorrer cada
            quadro individualmente. Além disso, você pode utilizar a opção
            `auto` para percorrer uma corrida automaticamente. Com essa opção, o
            thread vai rodar até atingir a chegada. Depois disso, será
            necessário pressionar o botão `Resetar` para iniciar uma nova
            corrida.
          </p>
          <p className="font-mono font-bold">
            Os botões são representados por:{' '}
          </p>
          <div className="flex gap-5 pt-5">
            <button className="button-go">Avançar</button>
            <button className="button-back">Voltar</button>
            <button className="button-reset">Resetar</button>
            <button className="button-auto">auto</button>
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

export default GoBack;
