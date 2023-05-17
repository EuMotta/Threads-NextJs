/* eslint-disable react/jsx-no-bind */

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../../utils/motion';
import { mongoDBList } from '../../constants';
import mongoLogo from '../../../images/seed/MongoLogo.svg';

const Database = () => {
  function ImpedirArrastar(event) {
    event.preventDefault();
  }
  return (
    <section id="languages" className="paddings ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="z-10 container mx-auto"
      >
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <div className="px-5">
              <h1 className="mb-5">Banco de Dados</h1>
              <div>
                {mongoDBList.slice(0, 2).map((threads) => (
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
          <div className="col-span-1 flex justify-center items-center">
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
                src={mongoLogo}
                width={650}
                height={650}
                unoptimized
                alt="threadss"
                onDragStart={ImpedirArrastar}
              />
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-2 my-10">
          <div className="col-span-1 flex flex-col gap-5  justify-center items-center">
            <motion.div
              variants={fadeIn('down', 'tween', 0, 1)}
              className="card_1 w-full"
            >
              <pre>
                <p className="text-sm">
                  {`const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(api/feedback/{e}, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, rating, comment }),
    });
    const result = await response.json();
    console.log(result);
    window.location.reload();
  };`}
                </p>
              </pre>
            </motion.div>
            <motion.div
              variants={fadeIn('down', 'tween', 0, 1)}
              className="card_1 w-full"
            >
              <pre>
                <p className="text-sm">
                  {`const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    test: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);`}
                </p>
              </pre>
            </motion.div>
          </div>
          <div className="col-span-1">
            <div className="px-5">
              <div>
                {mongoDBList.slice(2, 5).map((threads) => (
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
};

export default Database;
