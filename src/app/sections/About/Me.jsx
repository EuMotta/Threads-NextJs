'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCoffee } from 'react-icons/fi';
import { FaGlobeAsia } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import Eu from '../../../images/About/Me.jpg';
import { staggerContainer, fadeIn } from '../../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Me = () => (
  <section id="Me" className="paddings  sm:16 sm:pl-6 z-10">
    <div className="container mx-auto">
      <div className="grid w-full h-full  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-7">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="col-span-3"
        >
          <motion.div
            variants={fadeIn('up', 'tween', 0, 1)}
            className="flex justify-center md:flex md:justify-center"
          >
            <motion.div
              className="bg-gradient-to-r from-[rgb(86,128,237)] to-[#ed4b15] rounded-full p-2 shadow-md shadow-slate-700"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.8 }}
                className="cursor-pointer"
                drag
                dragConstraints={{
                  top: -10,
                  left: -20,
                  right: 20,
                  bottom: 10,
                }}
              >
                <Image
                  src={Eu}
                  alt="Eu"
                  width={300}
                  height={300}
                  className="rounded-full shadow-md  shadow-slate-800"
                  unoptimized
                  onDragStart={ImpedirArrastar}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="text-slate-900 mt-5 text-center font-mono">
            Opa! clica na foto e veja o efeito!
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="col-span-4 glassmorphism-2 rounded-xl p-5 lg:mr-36"
        >
          <motion.div
            variants={fadeIn('down', 'tween', 0, 1)}
            className="flex flex-col sm:text-center md:text-center lg:text-start lg:justify-start gap-5"
          >
            <div className="flex gap-3 text-center glassmorphism-2 p-2 rounded-xl xs:flex-col sm:f lg:text-start sm:justify-center md:justify-center lg:justify-start items-center">
              <FiCoffee className="text-indigo-400 text-5xl" />
              <p className=" font-bold font-mono text-xl">
                O café e a música são elementos fundamentais para a minha
                concentração
              </p>
            </div>
            <div className="flex gap-3 text-center glassmorphism-2  p-2 rounded-xl sm:text-center lg:text-start  md:justify-center lg:justify-start items-center">
              <FaGlobeAsia className="text-indigo-600 text-3xl" />
              <p className=" font-bold font-mono text-xl">
                Brasil, São Paulo, Guaratinguetá
              </p>
            </div>
            <div className="flex gap-3 text-center glassmorphism-2  p-2 rounded-xl sm:text-center lg:text-start  md:justify-center lg:justify-start items-center">
              <IoMdSchool className="text-orange-500 text-6xl" />
              <p className="font-bold font-mono text-xl">
                Cursando Analise e Desenvolvimento de Sistemas pela FATEC Guaratinguetá
              </p>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Me;
