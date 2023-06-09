/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Process2 from '../../../../images/Process/Process2.jpg';
import { fadeIn } from '../../../../utils/motion';
import { process } from './constants';

const Identification = () => {
  function ImpedirArrastar(event) {
    event.preventDefault();
  }
  return (
    <section className="container mx-auto yPaddings">
      <div>
        <div className="mb-10">
          <h1 className="text-center">Identificação</h1>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            {process.identification.map((item) => (
              <div className="">
                <h4 className="font-bold mb-5">{item.subtitle}</h4>
                {item.description}
              </div>
            ))}
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <motion.div
              variants={fadeIn('down', 'tween', 0, 1)}
              className=""
              drag
              dragConstraints={{
                top: -0.2,
                left: -0.2,
                right: 0.2,
                bottom: 0.2,
              }}
            >
              <Image
                src={Process2}
                width={750}
                height={750}
                unoptimized
                onDragStart={ImpedirArrastar}
                alt="threadss"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identification;
