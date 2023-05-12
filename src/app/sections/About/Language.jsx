'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Nextjs from '../../../images/About/nextjs.svg';
import { fadeIn, staggerContainer } from '../../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Languages = () => (
  <section
    id="languages"
    className="paddings bg-slate-100 "
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2 z-10 container mx-auto"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="px-5">
          <h1 className="font-bold mb-5 font-mono text-2xl">
            Base de desenvolvimento
          </h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">NEXTjs</h3>
          <p className=" text-justify text-lg font-mono font-bold">
            &nbsp;No desenvolvimento deste projeto, utilizei o NEXTjs como
            plataforma principal. Trata-se de uma extensão do React que auxilia
            no desenvolvimento de projetos web, permitindo uma rápida criação de
            aplicações de alta performance. Além disso, o NEXTjs é baseado em
            JavaScript, o que facilita bastante no desenvolvimento web. <br />
            <br />
            &nbsp;Durante o processo de desenvolvimento, busquei criar uma
            interface atrativa e da forma mais facil de entender o funcionamento
            de um Thread, não é uma taréfa fácil, porém com esforço tudo é
            possivel!.
          </p>
        </div>
      </motion.div>
      <div className="col-span-1 ">
        <motion.div
          animate={{
            scale: [1.4, 1.4, 1.41, 1.4, 1.4],
            rotate: [0.1, -0.1, 0.1, -0.1, 0.1],
            borderRadius: ['50%', '48%', '50%', '48%', '50%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
          variants={fadeIn('left', 'tween', 0, 1)}
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
            src={Nextjs}
            width={400}
            height={400}
            unoptimized
            alt="NEXTjs"
            onDragStart={ImpedirArrastar}
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Languages;
