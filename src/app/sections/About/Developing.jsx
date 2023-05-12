'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LibrarySvg1 from '../../../images/About/Developing2.svg';

import { fadeIn, staggerContainer, textVariant } from '../../../utils/motion';
import { developingList, packageList } from '../../constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Developing = () => (
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
            <h1 className="font-bold mb-5 font-mono text-2xl">
              Bibliotecas
            </h1>
            <div>
              {developingList.slice(0, 3).map((library) => (
                <motion.div
                  variants={textVariant(`${library.time}`)}
                  className="mb-1 mt-5"
                  key={library.title}
                >
                  <div className="font-semibold underline hover:text-blue-600 transition-all z-50 font-mono text-xl">{library.title}</div>
                  <p className="text-justify font-mono">&nbsp;{library.description}</p>
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
    </motion.div>
  </section>
);

export default Developing;