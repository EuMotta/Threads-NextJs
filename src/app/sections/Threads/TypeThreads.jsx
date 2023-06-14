'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import KernelSpace from '../../../images/Threads/KernelSpace.svg';
import Hibrid from '../../../images/Threads/Hibrid.svg';
import { fadeIn, staggerContainer, textVariant } from '../../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const TypeThreads = () => (
  <section className="paddings container mx-auto z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col gap-20"
    >
      <div className="text-center mb-20">
        <h1>Tipos de threads</h1>
        <h4>User-level, Kernel-level e Híbridos</h4>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <h1 className="mb-5">Threads</h1>
            <div>
              <motion.div variants={textVariant(1)} className="mb-1 mt-5">
                <div>
                  <h4 className="font-bold">User-level</h4>
                </div>
                <p>
                  &nbsp;Os threads em nível de usuário são criados e gerenciados
                  por uma biblioteca na aplicação, sem a intervenção do núcleo
                  do sistema. Esses threads têm a vantagem de serem rápidos na
                  criação e na troca de contexto, mas podem enfrentar
                  dificuldades com operações de entrada/saída ou de paginação
                  que bloqueiam todo o processo . Além disso, eles possibilitam
                  que cada processo escolha o algoritmo de escalonamento mais
                  adequado para os seus threads.
                </p>
                <br />
                <div>
                  <h4 className="font-bold">Kernel-level</h4>
                </div>
                <p>
                  &nbsp;São threads que são reconhecidas e escalonadas pelo
                  núcleo do sistema. Elas podem fazer chamadas de sistema e
                  bloquear sem afetar as outras threads do mesmo processo, mas
                  são mais lentas na criação e na troca de contexto
                </p>
                <br />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="">
          <motion.div
            variants={fadeIn('down', 'tween', 0, 1)}
            drag
            dragConstraints={{
              top: -0.2,
              left: -0.2,
              right: 0.2,
              bottom: 0.2,
            }}
            className="col-span-1 card_1 "
          >
            <motion.div className="flex justify-center items-center">
              <Image
                src={KernelSpace}
                width={450}
                height={450}
                unoptimized
                alt="threadss"
                onDragStart={ImpedirArrastar}
              />
            </motion.div>
          </motion.div>
          <p className="text-center">
            Threads Hibridos desenvolvido no LucidChart
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="">
          <motion.div
            variants={fadeIn('down', 'tween', 0, 1)}
            className="col-span-1 card_1 "
            drag
            dragConstraints={{
              top: -0.2,
              left: -0.2,
              right: 0.2,
              bottom: 0.2,
            }}
          >
            <motion.div className="flex justify-center items-center">
              <Image
                src={Hibrid}
                width={550}
                height={550}
                unoptimized
                alt="threadss"
                onDragStart={ImpedirArrastar}
              />
            </motion.div>
          </motion.div>
          <p className="text-center">
            Threads Hibridos desenvolvido no LucidChart
          </p>
        </div>
        <div className="col-span-1">
          <div className="px-5">
            <div>
              <motion.div variants={textVariant(1)} className="mb-1 mt-5">
                <div>
                  <h4 className="font-bold">Hibridos</h4>
                </div>
                <p>
                  &nbsp;Threads híbridas são implementadas tanto no espaço do
                  usuário quanto no núcleo do sistema operacional. O sistema
                  operacional sabe das threads do usuário e faz o seu
                  gerenciamento.
                </p>
                <p>
                  &nbsp;A vantagem das threads híbridas é a flexibilidade em
                  função das duas implementações. Elas são implementadas tanto
                  no espaço do usuário quanto no núcleo do sistema operacional.
                  O sistema operacional sabe das threads do usuário e faz o seu
                  gerenciamento . Isso permite que o sistema operacional
                  gerencie as threads de maneira mais eficiente e flexível.
                </p>
                <br />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default TypeThreads;
