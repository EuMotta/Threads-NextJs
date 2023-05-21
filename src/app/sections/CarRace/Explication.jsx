'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import threadsSvg1 from '../../../images/CarRace/BlockedNoBlocked.svg';

import { fadeIn, staggerContainer, textVariant } from '../../../utils/motion';
import { threadsBarrier } from '../../constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Threads = () => (
  <section className="paddings z-10 ">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="container flex flex-col gap-20 mx-auto"
    >
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <h1 className="mb-5">Barreiras</h1>
            <div>
              {threadsBarrier.part1.slice(0, 1).map((threads) => (
                <motion.div
                  variants={textVariant(`${threads.time}`)}
                  className="mb-1 mt-5"
                  key={threads.title}
                >
                  <div>
                    <h4 className="font-bold">{threads.title}</h4>
                  </div>
                  <p>&nbsp;{threads.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          <motion.div
            variants={fadeIn('down', 'tween', 0, 1)}
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
              src={threadsSvg1}
              width={650}
              height={650}
              unoptimized
              alt="threadss"
              onDragStart={ImpedirArrastar}
            />
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 ">
          <motion.div
            variants={fadeIn('down', 'tween', 0, 1)}
            className="flex justify-center flex-col"
            drag
            dragConstraints={{
              top: -0.2,
              left: -0.2,
              right: 0.2,
              bottom: 0.2,
            }}
          >
            <h3 className="text-center">Clima</h3>
            <iframe
              src="https://www.climatempo.com.br/mapas"
              width="700"
              height="450"
              title="iframe"
              className="rounded-lg w-full shadow-md shadow-slate-500"
            />
          </motion.div>
        </div>
        <div className="col-span-1">
          <div className="px-5">
            <div>
              {threadsBarrier.part1.slice(1, 2).map((threads) => (
                <motion.div
                  variants={textVariant(`${threads.time}`)}
                  className="mb-1 mt-5"
                  key={threads.title}
                >
                  <div>
                    <h4 className="font-bold">{threads.title}</h4>
                  </div>
                  <p>&nbsp;{threads.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Threads;
