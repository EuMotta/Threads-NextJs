/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '../../../../../utils/motion';
import Process5 from '../../../../../images/Process/Process5.jpg';

const ProcessUse = () => {
  function ImpedirArrastar(event) {
    event.preventDefault();
  }
  return (
    <section className="container paddings mx-auto">
      <motion.div
        className=""
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
      >
        <div className="text-center my-5 ">
          <h1>Exemplo de renderização 3D</h1>
          <p className="text-center">
            Uma das formas de representar o uso dos núcleos de um processador e
            também de threads, seria em uma renderização 3D, onde dependendo do
            tipo de renderização, busca utilizar o máximo de um processador,
            principalmente em testes de benchmark. No caso abaixo, é utilizado
            um rosto com movimentação de acordo com a posição do mouse
          </p>
          <p className="text-center">Passe o mouse em torno da área escura</p>
        </div>
        <div>
          <iframe
            title="Process3D"
            src="https://my.spline.design/nancylookingaround-ff5e070f7fb5fbad40adbb696c2f3ed3/"
            width="100%"
            height={600}
            className="shadow-lg shadow-slate-500 rounded-xl"
          />
        </div>
        <div className="my-10 text-center">
          <h2>Outro exemplo de renderização 3D:</h2>
          <p className="text-center">
            Outro exemplo poderia ser a carteira de entrada da FATEC
            Guaratinguetá, onde também consome recursos do processador,
            obviamente consome menos que o rosto acima.
          </p>
        </div>
        <div>
          <iframe
            title="Process3D"
            src="https://my.spline.design/digitalpass-6d6d2fb8f63fe774f50d254f55d769e2/"
            width="100%"
            height={800}
            className="shadow-lg shadow-slate-500 rounded-xl"
          />
        </div>
      </motion.div>
      <div className="container mx-auto yPaddings">
        <h1 className="text-center">Consumo</h1>
        <div className="grid grid-cols-2 gap-10">
          <div className="">
            <h4 className="font-bold mb-5">Consumo do processador</h4>
            <p>
              &nbsp;&nbsp;Ao exibir a renderização 3D na tela, o consumo do
              processador aumentará, conforme observado no gerenciador de
              tarefas. Movimentos na tela aumentam ainda mais o consumo, pois a
              CPU precisa de mais poder de processamento para executar os
              movimentos do renderizador em um objeto 3D, exigindo mais da
              máquina para executar o processo de entrada de dados,
              processamento e saída.
            </p>
            <p>
              &nbsp;&nbsp;Usar threads pode ajudar a melhorar o desempenho da
              renderização 3D ao dividir o trabalho entre vários núcleos de CPU.
              Isso pode ser feito através de configurações em programas de
              renderização, como o Blender, ou através do uso de APIs que
              suportam multithreading, como o Direct3D 11 da Microsoft.
            </p>
          </div>
          <div className="flex justify-center items-center">
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
                src={Process5}
                width={950}
                height={950}
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

export default ProcessUse;
