'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import LibrarySvg1 from '../../../images/About/packageSvg1.svg';
import LibrarySvg2 from '../../../images/About/packageSvg2.svg';

import { fadeIn, staggerContainer, textVariant } from '../../../utils/motion';
import { packageList } from '../../constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Packages = () => (
  <section className="paddings z-10 ">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container mx-auto"
    >
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <h1 className="mb-5">Bibliotecas</h1>
            <div>
              {packageList.slice(0, 3).map((library) => (
                <motion.div
                  variants={textVariant(`${library.time}`)}
                  className="mb-1 mt-5"
                  key={library.title}
                >
                  <Link
                    href={library.href}
                    className="font-semibold hover:text-blue-600 transition-all z-50 font-mono text-2xl"
                  >
                    <div>
                      <h4 className="font-bold">{library.title}</h4>
                    </div>
                  </Link>
                  <p>&nbsp;{library.description}</p>
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
            <Image
              src={LibrarySvg1}
              width={500}
              height={500}
              unoptimized
              alt="Librarys"
              onDragStart={ImpedirArrastar}
            />
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
            <Image
              className="pointer-events-none"
              src={LibrarySvg2}
              width={500}
              height={500}
              unoptimized
              alt="Librarys"
              onDragStart={ImpedirArrastar}
            />
          </motion.div>
        </div>
        <div className="col-span-1">
          <div className="px-5">
            <div className="z-50">
              {packageList.slice(3, 6).map((library) => (
                <motion.div
                  variants={textVariant(`${library.time}`)}
                  className="mb-1 mt-5"
                  key={library.title}
                >
                  <Link
                    href={library.href}
                    className="font-semibold  transition-all font-mono"
                  >
                    <div>
                      <h4 className="font-bold">{library.title}</h4>
                    </div>
                  </Link>
                  <p>&nbsp;{library.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Packages;
