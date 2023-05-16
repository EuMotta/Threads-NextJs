'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import threadsSvg1 from '../../../images/Threads/cartoon-animated.gif';
import threadsSvg2 from '../../../images/Threads/MultiThreading.svg';

import { fadeIn, staggerContainer, textVariant } from '../../../utils/motion';
import { threadList } from '../../constants';
import Clock from '../../components/Clock';
import Semaphore from '../../components/Semaphore';
import { RocketLaunch, RocketLaunch2 } from '../../components/RocketLauch';

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
            <h1 className="mb-5">Threads</h1>
            <div>
              {threadList.slice(0, 3).map((threads) => (
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
      <div className="grid mt-10 grid-cols-2">
        <div className="col-span-1 ">
          <motion.div
            variants={fadeIn('down', 'tween', 0, 1)}
            className="flex justify-center z-10 card_1"
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
              src={threadsSvg2}
              width={600}
              height={600}
              unoptimized
              alt="threadss"
              onDragStart={ImpedirArrastar}
            />
          </motion.div>
          <p className="text-center">
            MultiThreading desenvolvido no LucidChart
          </p>
        </div>
        <div className="col-span-1">
          <div className="px-5">
            <div className="z-50">
              {threadList.slice(3, 6).map((threads) => (
                <motion.div
                  variants={textVariant(`${threads.time}`)}
                  className="mb-1 mt-5"
                  key={threads.title}
                >
                  <div className="">
                    <h4 className="font-bold">{threads.title}</h4>
                  </div>
                  <p>&nbsp;{threads.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid mt-10 grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <div className="z-50">
              {threadList.slice(6, 9).map((threads) => (
                <motion.div
                  variants={textVariant(`${threads.time}`)}
                  className="mb-1 mt-5"
                  key={threads.title}
                >
                  <div className="">
                    <h4 className="font-bold">{threads.title}</h4>
                  </div>
                  <p>&nbsp;{threads.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-14 ">
          <div className="">
            <motion.div
              variants={fadeIn('down', 'tween', 0, 1)}
              className="flex justify-center z-10 card_1"
              drag
              dragConstraints={{
                top: -0.2,
                left: -0.2,
                right: 0.2,
                bottom: 0.2,
              }}
            >
              <Clock />
            </motion.div>
            <p className="text-center">Relógio simulando Threads</p>
          </div>
          <div className="">
            <motion.div
              variants={fadeIn('down', 'tween', 0, 1)}
              className=" card_1"
              drag
              dragConstraints={{
                top: -0.2,
                left: -0.2,
                right: 0.2,
                bottom: 0.2,
              }}
            >
              <Semaphore />
            </motion.div>
            <p className="text-center">Semáforo simulando Threads</p>
          </div>
        </div>
      </div>
      <div className="grid mt-10 grid-cols-2">
        <div className="col-span-1 ">
          <motion.div
            variants={fadeIn('down', 'tween', 0, 1)}
            className="flex justify-center z-10 card_1"
            drag
            dragConstraints={{
              top: -0.2,
              left: -0.2,
              right: 0.2,
              bottom: 0.2,
            }}
          >
            <RocketLaunch />
          </motion.div>
          <p className="text-center">
            Lançamento de foguete simulando dois Threads.
          </p>
        </div>
        <div className="col-span-1">
          <div className="px-5">
            <div className="z-50">
              {threadList.slice(9, 10).map((threads) => (
                <motion.div
                  variants={textVariant(`${threads.time}`)}
                  className="mb-1 mt-5"
                  key={threads.title}
                >
                  <div className="">
                    <h4 className="font-bold">{threads.title}</h4>
                  </div>
                  <p>&nbsp;{threads.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid mt-10 grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <div className="z-50">
              {threadList.slice(10, 11).map((threads) => (
                <motion.div
                  variants={textVariant(`${threads.time}`)}
                  className="mb-1 mt-5"
                  key={threads.title}
                >
                  <div className="">
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
            className="flex justify-center z-10 card_1"
            drag
            dragConstraints={{
              top: -0.2,
              left: -0.2,
              right: 0.2,
              bottom: 0.2,
            }}
          >
            <RocketLaunch2 />
          </motion.div>
          <p className="text-center">
            Lançamento de foguete simulando dois Threads.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Threads;
