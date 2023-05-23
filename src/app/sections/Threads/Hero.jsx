'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import aboutPageSvg from '../../../images/Threads/Hero.svg';
import { fadeIn, staggerContainer } from '../../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}

const Hero = () => (
  <section className="z-10 container mx-auto paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid lg:grid-cols-2 paddings"
    >
      <div className="col-span-1">
        <motion.div
          variants={fadeIn('up', 'tween', 0, 1)}
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
            src={aboutPageSvg}
            width={600}
            height={600}
            unoptimized
            onDragStart={ImpedirArrastar}
            alt="Hero"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('down', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="mx-5">
          <h1 className="font-bold mb-5 text-center lg:text-start font-mono text-blue-600 text-7xl leading-none">
            Threads
          </h1>
          <div className="text-4xl text-center lg:text-start font-bold mb-2 leading-tight">
            <h2>
              O que é um thread? Entenda como funciona e sua utilidade em um
              sistema operacional
            </h2>
            <div className="text-blue-600 my-5 text-5xl">
              <Typewriter
                options={{
                  strings: ['O que é?', 'MultiThreading', 'Exemplos'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
