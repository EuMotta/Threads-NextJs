'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import aboutPageSvg from '../../../../images/SecAbout/MeHero.svg';
import { fadeIn, staggerContainer } from '../../../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}

const Hero = () => (
  <section className="z-10 container mx-auto paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2"
    >
      <div className="col-span-1">
        <motion.div
          variants={fadeIn('up', 'tween', 0, 1)}
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
            src={aboutPageSvg}
            width={400}
            height={400}
            unoptimized
            onDragStart={ImpedirArrastar}
            alt="Hero"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('down', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="mx-5">
          <h1 className="font-bold mb-5 font-mono text-blue-600 text-7xl leading-none">
            José Antonio Motta
          </h1>
          <div className="text-4xl font-bold mb-2 text-color leading-tight">
            <h2>Descubra a fonte da criatividade!</h2>
            <div className="text-blue-600 my-5 text-5xl">
              <Typewriter
                options={{
                  strings: [
                    'Desenvolvedor',
                    'Explorador de linguagens',
                    'Mestre das imagens',
                    'Calculador experiente',
                    'Mago dos pacotes',
                    'E muito mais!',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div>
              <div className="flex gap-x-5 justify-center lg:justify-start text-5xl">
                <Link target="blank" href="https://github.com/EuMotta">
                  <AiFillGithub className="text-slate-900 hover:text-slate-400 transition-all hover:scale-110" />
                </Link>
                <Link
                  target="blank"
                  href="https://www.instagram.com/joseantonio.motta/"
                >
                  <AiFillInstagram className="text-slate-900 hover:text-orange-600 transition-all hover:scale-110" />
                </Link>
                <Link href="/">
                  <AiFillLinkedin className="text-slate-900 hover:text-indigo-400 transition-all hover:scale-110" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
