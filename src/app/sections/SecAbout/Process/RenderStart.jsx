import React from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../../../utils/motion';
import '../../../../styles/Process.css';

const RenderStart = () => (
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
          <Link href="/Process/ProcessUse">
            <div className="flex flex-col glassmorphism-2 justify-center items-center">
              <h1 className=" !text-7xl ">Renderizador</h1>
              <div>
                <h3 className="font-bold">
                  <Typewriter
                    options={{
                      strings: ['Clique aqui para abrir o renderizador 3D'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
              </div>
            </div>{' '}
          </Link>
        </div>
      </div>
    </motion.div>
  </section>
);

export default RenderStart;
