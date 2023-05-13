'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import HorseImage from '../../../images/HeroHorse.svg';
import CallCenterImage from '../../../images/CallCenter/Hero.svg'

function ImpedirArrastar(event) {
  event.preventDefault();
}
const GoBack = () => (
  <section id="GoBack" className="goback_section">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid lg:grid-cols-2 lg:gap-5 gap-20 mx-5"
    >
      <motion.div
        variants={fadeIn('down', 'tween', 0, 1)}
        className="goback_text card_1"
      >
        <div className="px-5">
          <h1>Botões</h1>
          <h3>Como utilizar a Corrida de Cavalos</h3>
          <p className="">
            &nbsp; Para visualizar o funcionamento de um thread quadro a quadro,
            você pode usar os botões de `avançar` e `voltar` para percorrer cada
            quadro individualmente. Além disso, você pode utilizar a opção
            `auto` para percorrer uma corrida automaticamente. Com essa opção, o
            thread vai rodar até atingir a chegada. Depois disso, será
            necessário pressionar o botão `Resetar` para iniciar uma nova
            corrida.
          </p>
          <br />
          <p className="font-mono text-lg font-bold">
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
        variants={fadeIn('down', 'tween', 0, 1)}
        drag
        dragConstraints={{
          top: -0.2,
          left: -0.2,
          right: 0.2,
          bottom: 0.2,
        }}
        className="col-span-1 hidden mx-auto lg:block my-10 justify-center items-center"
      >
        <Image
          src={HorseImage}
          onDragStart={ImpedirArrastar}
          width={500}
          height={500}
        />
      </motion.div>

      {/*  */}

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
        variants={fadeIn('up', 'tween', 0, 1)}
        drag
        dragConstraints={{
          top: -0.2,
          left: -0.2,
          right: 0.2,
          bottom: 0.2,
        }}
        className="col-span-1 mx-auto hidden lg:block my-10 justify-center items-center"
      >
        <Image
          src={CallCenterImage}
          onDragStart={ImpedirArrastar}
          width={500}
          height={500}
        />
      </motion.div>
      <motion.div
        variants={fadeIn('up', 'tween', 0, 1)}
        className="goback_text card_1"
      >
        <div className="px-5">
          <h1>Call Center</h1>
          <h3>Como utilizar o Call Center</h3>
          <p className="">
            &nbsp; Para visualizar automaticamente o funcionamento de um thread,
            você pode selecionar o número de atendentes e clientes, bem como o
            tempo médio de atendimento para cada atendente. <br />
            &nbsp; Assim que uma jornada de trabalho terminar, uma tabela é
            mostrada abaixo informando a quantidade de atendentes e clientes
            atendidos no dia. Não esqueça de pressionar Resetar sempre que uma
            jornada terminar.
          </p>
          <br />
          <p className="font-mono text-lg font-bold">
            Os botões são representados por:{' '}
          </p>
          <div className="flex gap-5 pt-5">
            <button className="goback_button-go">Iniciar</button>
            <button className="button-reset">Resetar</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GoBack;
