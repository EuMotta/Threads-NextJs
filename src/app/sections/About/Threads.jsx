'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LibrarySvg1 from '../../../images/About/packageSvg1.svg';
import LibrarySvg2 from '../../../images/About/packageSvg2.svg';

import { fadeIn, staggerContainer, textVariant } from '../../../utils/motion';
import { threadList } from '../../constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Threads = () => (
  <section className='paddings z-10 bg-slate-50'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className='container mx-auto'
    >
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <h2 className=" mb-5 ">
              Threads
            </h2>
            <div>
              {threadList.slice(0, 3).map((thread) => (
                <motion.div
                  variants={textVariant(`${thread.time}`)}
                  className="mb-1 mt-5"
                  key={thread.title}
                >
                  <div className="font-semibold underline hover:text-blue-600 transition-all z-50 font-mono text-2xl">{thread.title}</div>
                  <p>&nbsp;{thread.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 my-10">
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
            <Image src={LibrarySvg1} width={400} height={400} unoptimized alt="Librarys" onDragStart={ImpedirArrastar} />
          </motion.div>
        </div>
      </div>
      <div className="grid mt-10 grid-cols-2">
        <div className="col-span-1 my-10">
          <motion.div
            variants={fadeIn('down', 'tween', 0, 1)}
            className="flex justify-center z-10"
            drag
            dragConstraints={{
              top: -0.2,
              left: -0.2,
              right: 0.2,
              bottom: 0.2,
            }}
          >
            <Image className="pointer-events-none" src={LibrarySvg2} width={400} height={400} unoptimized alt="Librarys" onDragStart={ImpedirArrastar} />
          </motion.div>
        </div>
        <div className="col-span-1">
          <div className="px-5">
            <div className="z-50">
              {threadList.slice(3, 6).map((thread) => (
                <motion.div
                  variants={textVariant(`${thread.time}`)}
                  className="mb-1 mt-5"
                  key={thread.title}
                >
                  <div className="font-semibold underline hover:text-blue-600 transition-all font-mono text-2xl">{thread.title}</div>
                  <p>&nbsp;{thread.description}</p>
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