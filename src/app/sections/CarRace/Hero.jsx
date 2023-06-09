'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import HeroCallCenter from '../../../images/CarRace/Hero.svg';
import { fadeIn, staggerContainer } from '../../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}

const Hero = () => (
  <section className="container yPaddings mx-auto">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2"
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0, 1)}
        className="col-span-1 flex flex-col justify-center items-center"
      >
        <div className="mx-5">
          <h1 className="font-bold mb-5 font-mono text-blue-600 text-6xl leading-none">
            Corrida de carros
          </h1>
          <div className="text-3xl font-bold mb-2 leading-tight">
            <h3>Atendentes e clientes &nbsp;</h3>
            <div className="text-blue-600 text-3xl">
              <Typewriter
                options={{
                  strings: ['Escolha a quantidade', 'Pit stops Obrigatórios'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="font-mono text-xl">
            <h4> Inicie sua corrida!</h4>
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
          src={HeroCallCenter}
          width={400}
          height={400}
          unoptimized
          onDragStart={ImpedirArrastar}
          alt="Hero"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
