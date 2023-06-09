import Image from 'next/image';
import React from 'react';
import '../../../styles/Home.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HomeImage from '../../../images/Home.jpg';
import { fadeIn, staggerContainer } from '../../../utils/motion';

const Hero = () => (
  <section className="home_section">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid md:grid-cols-8 w-full"
    >
      <div className="home_image">
        <motion.div variants={fadeIn('down', 'tween', 1, 3)}>
          <Image
            src={HomeImage}
            width={750}
            height={500}
            className="home_image_image"
          />
        </motion.div>
      </div>
      <motion.div variants={fadeIn('up', 'tween', 1, 3)} className="home_text">
        <h1>ThreadWorld</h1>
        <h3>Project</h3>
        <p>Projeto de Threads desenvolvido em Next.js</p>
        <div className="home_buttons">
          <Link href="/HowToUse" className="button_howtouse">
            Como usar?
          </Link>
          <Link href="/Start" className="button_start">
            Iniciar
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
