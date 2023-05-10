import Image from 'next/image';
import React from 'react';
import HomeImage from '../../../images/Home.jpg';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid md:grid-cols-8 w-full"
      >
        <div className="col-span-5 flex flex-wrap justify-center items-center w-5/8">
          <motion.div variants={fadeIn('right', 'tween', 0, 1)}>
            <Image
              src={HomeImage}
              width={750}
              height={500}
              className="rounded-xl shadow-3xl shadow-slate-400"
            />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('left', 'tween', 0, 1)}
          className="col-span-3 flex flex-wrap flex-col justify-center items-center w-3/8 text-white p-8 rounded-xl"
        >
          <h1 className="text-7xl font-bold mb-2">ThreadHorses</h1>
          <h3 className="text-4xl font-semibold mb-4">Project</h3>
          <p className="text-center text-xl mb-4">
            Projeto de Threads desenvolvido em Next.js
          </p>
          <div className="duration-700  hover:scale-x-110">
            <Link
              href="/Horse"
              className="rounded-full px-16 bg-slate-600  text-lg font-bold text-white py-4 hover:bg-slate-700 hover:shadow-lg hover:-translate-y-1 transition duration-500"
            >
              Iniciar
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
