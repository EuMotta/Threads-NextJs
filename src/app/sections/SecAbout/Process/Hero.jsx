import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../../../utils/motion';
import '../../../../styles/Process.css';

const Hero = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className=" bg-hero  "
    >
      <div className="container mx-auto h-[30rem] flex flex-col justify-center items-center">
        <h1 className="text-slate-50 !text-7xl">Processo</h1>
        <div>
          <h3 className="text-slate-50">
            <Typewriter
              options={{
                strings: [
                  'O que é?',
                  'Como funciona?',
                  'Entenda o funcionamento',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
