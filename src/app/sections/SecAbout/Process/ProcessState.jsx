/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Process3 from '../../../../images/Process/Process3.svg';
import { fadeIn } from '../../../../utils/motion';

const ProcessState = () => {
  function ImpedirArrastar(event) {
    event.preventDefault();
  }
  return (
    <section className="container mx-auto yPaddings">
      <div>
        <div className="mb-10">
          <h1 className="text-center">Estado</h1>
        </div>
        <div>
          <div>
            <h4 className="font-bold mb-5">Estados de um processo</h4>
            <p className="!text-xl">
              &nbsp;&nbsp; Um processo em um sistema operacional pode estar em
              um de vários estados, como em execução, pronto, bloqueado ou
              encerrado. O estado do processo determina suas atividades e
              interações com o sistema operacional. Um processo em estado de
              execução está utilizando ativamente a CPU para executar suas
              instruções.
            </p>
            <p>
              &nbsp;&nbsp; Geralmente, apenas um processo pode estar em execução
              em um dado momento em uma única CPU, devido à natureza sequencial
              da execução do processador. Quando um processo está em estado de
              execução, seu contexto de execução, incluindo o contador de
              programa e os registradores de CPU, está sendo atualizado
              continuamente para acompanhar a próxima instrução a ser executada.
            </p>
            <p>
              &nbsp;&nbsp;Um processo em estado pronto está pronto para ser
              executado e aguarda sua vez na fila de prontos. Ele já foi
              carregado na memória e possui todos os recursos necessários para a
              execução, mas está esperando a CPU ficar disponível. Um processo
              pode ser colocado no estado bloqueado quando está aguardando a
              conclusão de uma operação de entrada/saída, como a leitura de
              dados de um dispositivo de armazenamento ou a resposta a uma
              solicitação de rede.
            </p>
            <p>
              &nbsp;&nbsp; Durante esse período, o processo é suspenso até que a
              operação seja concluída. Quando um processo atinge seu ponto de
              saída ou é explicitamente encerrado, ele entra no estado
              encerrado. Nesse estado, o sistema operacional libera todos os
              recursos alocados para o processo e remove suas informações da
              tabela de processos.
            </p>
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
                src={Process3}
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

export default ProcessState;
