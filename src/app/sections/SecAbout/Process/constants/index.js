export const process = {
  definition: [
    {
      subtitle: 'O que é um processo?',
      description: (
        <>
          <p>
            &nbsp;&nbsp;Um processo em um sistema operacional é uma instância em
            execução de um programa. Ele consiste em um conjunto de instruções,
            dados, contexto de execução e recursos necessários para a execução
            de um programa.
          </p>
          <p>
            &nbsp;&nbsp;Um processo é uma entidade independente que pode ser
            gerenciada pelo sistema operacional, incluindo seu escalonamento,
            atribuição de recursos e comunicação com outros processos. Cada
            processo possui seu próprio espaço de endereçamento, o que significa
            que eles são isolados uns dos outros em termos de acesso a memória.
            O sistema operacional mantém informações sobre cada processo, como
            seu identificador (PID), estado atual, recursos alocados e
            prioridade. Essas informações são usadas para coordenar a execução
            dos processos e garantir a correta alocação de recursos do sistema.
          </p>
        </>
      ),
      time: 0.5,
    },
  ],
  creation: [
    {
      subtitle: 'Como é criado?',
      description: (
        <>
          <p>
            &nbsp;&nbsp;Os processos podem ser criados de várias maneiras. Um
            dos métodos mais comuns é o carregamento de um programa a partir do
            disco rígido. Quando um programa é iniciado, o sistema operacional
            aloca memória para o processo e carrega as instruções e dados do
            programa na memória.
          </p>
          <p>
            &nbsp;&nbsp;Além disso, os processos também podem ser criados por
            solicitação de outro processo, conhecido como processo pai. Nesse
            caso, o processo pai invoca uma chamada de sistema específica para
            criar um novo processo. O novo processo herda algumas propriedades
            do processo pai, como recursos alocados e permissões de acesso a
            arquivos. Também é possível que o sistema operacional crie
            automaticamente processos quando é inicializado. Esses processos,
            geralmente chamados de processos do sistema, são responsáveis por
            tarefas essenciais, como gerenciamento de dispositivos e serviços de
            rede.
          </p>
        </>
      ),
      time: 1,
    },
  ],
  identification: [
    {
      subtitle: 'Estados de um processo',
      description: (
        <>
          <p>
            &nbsp;&nbsp; Cada processo em um sistema operacional possui um
            identificador exclusivo, conhecido como <u>PID (Process ID)</u>. O
            PID é usado pelo sistema operacional para identificar e controlar um
            processo específico. Ele é atribuído quando o processo é criado e
            permanece único durante a vida útil do processo.
          </p>
          <p>
            &nbsp;&nbsp;O PID é usado para várias finalidades, como
            monitoramento e gerenciamento de recursos. Por exemplo, os
            administradores do sistema podem usar o PID para rastrear o
            desempenho de um processo específico ou identificar um processo que
            esteja consumindo muitos recursos do sistema. Além disso, o PID é
            usado em chamadas de sistema que envolvem a manipulação de
            processos, como a criação de um novo processo ou o encerramento de
            um processo existente.
          </p>
          <p>
            &nbsp;&nbsp;O sistema operacional mantém uma tabela de processos,
            onde cada entrada contém informações associadas a um processo
            específico, incluindo seu PID, estado atual, recursos alocados e
            identificação do processo pai. Essa tabela permite ao sistema
            operacional rastrear e gerenciar todos os processos em execução no
            sistema.
          </p>
        </>
      ),
      time: 1.5,
    },
  ],
  processState: [
    {
      subtitle: 'Estados de um processo',
      description: (
        <>
          <p>
            &nbsp;&nbsp; Cada processo em um sistema operacional possui um
            identificador exclusivo, conhecido como <u>PID (Process ID)</u>. O
            PID é usado pelo sistema operacional para identificar e controlar um
            processo específico. Ele é atribuído quando o processo é criado e
            permanece único durante a vida útil do processo.
          </p>
          <p>
            &nbsp;&nbsp;O PID é usado para várias finalidades, como
            monitoramento e gerenciamento de recursos. Por exemplo, os
            administradores do sistema podem usar o PID para rastrear o
            desempenho de um processo específico ou identificar um processo que
            esteja consumindo muitos recursos do sistema. Além disso, o PID é
            usado em chamadas de sistema que envolvem a manipulação de
            processos, como a criação de um novo processo ou o encerramento de
            um processo existente.
          </p>
          <p>
            &nbsp;&nbsp;O sistema operacional mantém uma tabela de processos,
            onde cada entrada contém informações associadas a um processo
            específico, incluindo seu PID, estado atual, recursos alocados e
            identificação do processo pai. Essa tabela permite ao sistema
            operacional rastrear e gerenciar todos os processos em execução no
            sistema.
          </p>
        </>
      ),
      time: 1.5,
    },
  ],
};
