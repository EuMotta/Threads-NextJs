'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import aboutPageSvg from '../../../images/HowToUse/Hero.svg';
import { fadeIn, staggerContainer } from '../../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}

const Hero = () => (
  <section className=" py-20 container mx-auto">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid md:grid-cols-2"
    >
      <div className="col-span-1">
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
            src={aboutPageSvg}
            width={400}
            height={400}
            unoptimized
            onDragStart={ImpedirArrastar}
            alt="Hero"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('left', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="hero_text text-center md:text-start">
          <h1>Como utilizar</h1>
          <div>
            <h2>Confira todos os recursos como: &nbsp;</h2>
            <div className="hero_typewriter">
              <Typewriter
                options={{
                  strings: ['Botões', 'Velocidade', 'Gráficos'],
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
