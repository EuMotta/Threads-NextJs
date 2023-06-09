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
    className="paddings "
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2 z-10 container mx-auto"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="px-5">
          <h2 className="mb-5">
            Base de desenvolvimento
          </h2>
          <h3 className="mb-5">NEXTjs</h3>
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
