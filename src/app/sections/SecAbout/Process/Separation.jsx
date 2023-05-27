import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../../../utils/motion';
import '../../../../styles/Process.css';

const Separation = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className=" container mx-auto yPaddings"
    >
      <div className="bg-process rounded-xl">
        <div className=" h-52  glassmorphism p-10 ">
          <div className="flex flex-col glassmorphism-2 justify-center items-center">
            <h1 className=" !text-7xl ">Mas então, qual a relação?</h1>
            <div>
              <h3 className="font-bold">
                <Typewriter
                  options={{
                    strings: [
                      'Onde um processo e um thread se encontram?',
                      'Qual a relação entre os dois?',
                      'São a mesma coisa?',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Separation;
