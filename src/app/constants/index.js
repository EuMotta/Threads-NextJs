import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import horse1 from '../../images/horse1.svg';
import horse2 from '../../images/horse2.svg';

export const horses = [
  {
    name: 'Mario',
    image: horse1,
    position: 'position1',
  },
  {
    name: 'Josivaldo',
    image: horse2,
    position: 'position2',
  },
];
export const exploreWorlds = [
  {
    id: 'world-1',
    description: (
      <>
        <p>
          &nbsp;Threads híbridas são implementadas tanto no espaço do
          usuário quanto no núcleo do sistema operacional. O sistema
          operacional sabe das threads do usuário e faz o seu
          gerenciamento.
        </p>
        <br />
        <p>
          &nbsp;A vantagem das threads híbridas é a flexibilidade em
          função das duas implementações. Elas são implementadas tanto
          no espaço do usuário quanto no núcleo do sistema operacional.
          O sistema operacional sabe das threads do usuário e faz o seu
          gerenciamento . Isso permite que o sistema operacional
          gerencie as threads de maneira mais eficiente e flexível.
        </p>
      </>
    ),
    title: (
      <div>
        <h4 className="font-bold">Hibridos</h4>
      </div>
    ),
    imgUrl: 'texto aqui',
  },
  {
    id: 'world-2',
    description: (
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
    ),
    title: (
      <div>
        <h4 className="font-bold">User-level</h4>
      </div>
    ),
    imgUrl: 'texto aqui',
  },
  {
    id: 'world-3',
    description: (
      <p>
        &nbsp;São threads que são reconhecidas e escalonadas pelo
        núcleo do sistema. Elas podem fazer chamadas de sistema e
        bloquear sem afetar as outras threads do mesmo processo, mas
        são mais lentas na criação e na troca de contexto
      </p>
    ),
    title: (
      <div>
        <h4 className="font-bold">Kernel-level</h4>
      </div>
    ),
    imgUrl: 'texto aqui',
  },
];
export const resultsListDb = [
  {
    label: 'Atrasos do cavalo 1',
    key: 'horse1.delay',
    title: 'Atrasos do cavalo 1:',
  },
  {
    label: 'Atrasos do cavalo 2',
    key: 'horse2.delay',
    title: 'Atrasos do cavalo 2:',
  },
  {
    label: 'Média do cavalo 1',
    key: 'horse1.mediaDelay',
    title: 'Média do cavalo 1:',
  },
  {
    label: 'Média do cavalo 2',
    key: 'horse2.mediaDelay',
    title: 'Média do cavalo 2:',
  },
  {
    label: 'Eficiência do cavalo 1',
    key: 'horse1.efficiency',
    title: 'Eficiência do cavalo 1:',
  },
  {
    label: 'Eficiência do cavalo 2',
    key: 'horse2.efficiency',
    title: 'Eficiência do cavalo 2:',
  },
  {
    label: 'Média de eficiência do cavalo 1',
    key: 'horse1.mediaEfficiency',
    title: 'Média de eficiência do cavalo 1:',
  },
  {
    label: 'Média de eficiência do cavalo 2',
    key: 'horse2.mediaEfficiency',
    title: 'Média de eficiência do cavalo 2:',
  },
];
export const explication = {

  textExample: [
    {
      value: 20,
      formula: 'Math.random() * (20 - 10) + 20',
      description: 'Valor entre 10 e 20',
    },
    {
      value: 30,
      formula: 'Math.random() * (30 - 10) + 30',
      description: 'Valor entre 20 e 30',
    },
    {
      value: 40,
      formula: 'Math.random() * (40 - 10) + 40',
      description: 'Valor entre 30 e 40',
    },
    {
      value: 50,
      formula: 'Math.random() * (50 - 10) + 50',
      description: 'Valor entre 40 e 50',
    },
  ],
};

export const navbarlinks = {
  main: [
    {
      name: 'Inicio',
      href: '/',
    },
    {
      name: 'Como usar',
      href: '/HowToUse',
    },
    {
      name: 'Simular',
      href: '/Start',
    },
    {
      name: 'Threads',
      href: '/Threads',
    },
  ],
  dropdown: [
    {
      name: 'Projeto',
      href: '/About',
    },
    {
      name: 'Desenvolvedor',
      href: '/Me',
    },
  ],
};

export const packageList = [
  {
    title: 'React-icons',
    href: 'https://react-icons.github.io/react-icons',
    description: 'O React-Icons é uma biblioteca de ícones para o React, o que significa que ela permite a inserção de ícones em aplicações React de maneira fácil e rápida. A biblioteca inclui uma ampla variedade de ícones de diferentes fontes, como Font Awesome, Material Design e muito mais.',
    time: 0.25,
  },

  {
    title: 'Typewriter',
    href: 'https://github.com/tameemsafi/typewriterjs#readme',
    description: 'O Typewriter é uma biblioteca de animação para JavaScript que cria um efeito de escrita em efeito máquina de escrever. Ele permite que você adicione esse efeito a qualquer elemento HTML de maneira fácil e rápida.',
    time: 0.50,
  },
  {
    title: 'TailwindCSS',
    href: 'https://tailwindcss.com',
    description: 'O Tailwind CSS é uma biblioteca de estilo baseada em classes que facilita a criação de designs customizados. Ele permite que você adicione estilos a elementos HTML de maneira rápida e fácil, usando classes pré-definidas que seguem uma sintaxe padrão. Resumido em um Bootstrap com esteroides',
    time: 0.75,
  },
  {
    title: 'Framer Motion',
    href: 'https://www.framer.com/motion/',
    description: 'O Framer Motion é uma biblioteca de animação para o React que permite criar animações de maneira fácil e rápida. Ele foi projetado para ser uma alternativa ao react-motion, oferecendo uma API mais simples e intuitiva para criar animações.',
    time: 1.00,
  },
  {
    title: 'Recharts',
    href: 'http://recharts.org/en-US/',
    description: 'Recharts é uma biblioteca de gráficos para React que permite criar gráficos de maneira fácil e rápida. Ele foi projetado para ser uma alternativa ao D3.js, oferecendo uma API mais simples e intuitiva para criar gráficos.',
    time: 1.25,
  },
  {
    title: 'ESLint',
    href: 'https://eslint.org/',
    description: 'ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript. Ele foi projetado para ajudar a escrever código mais limpo e consistente, e para evitar erros comuns.',
    time: 1.50,
  },
];

export const developingList = {

  idea: [
    {
      title: 'A idéia',
      description: 'De acordo com o andamento da matéria de Sistemas Operacionais, ao entender o funcionamento de um thread podemos perceber que não é dificil sua representação em uma tela, e existem varias formas de representar um thread, até mesmo em um jogo da velha, corrida de cavalos, call center, etc. Então procurei os que fossem mais simples de entender e de reproduzir',
      time: 0.25,
    },
    {
      title: 'Por que React/NextJS?',
      description: 'Diferente do javascript, o react tem uma interface mais agradavel de se entender, e principalmente a funcionalidade UseState que facilitou muito o trabalho, podendo armazenar o estado de qualquer variavel e até mesmo de arrays de forma simples, basicamente um get e set. E claro, é a linguagem que eu mais tenho trabalhado nos ultimos meses.',
      time: 0.25,
    },
    {
      title: 'Quanto tempo demorou?',
      description: 'Projetos experimentais não têm um prazo de desenvolvimento definido, pois sempre há algo a ser adicionado ou ajustado. Até agora, este projeto levou cerca de 7 dias para ser desenvolvido.',
      time: 0.25,
    },
  ],
  construction: [
    {
      title: 'Como foi a construção?',
      description: (
        <>
          &nbsp; Comecei a desenvolver a ideia dos cavalos e, para isso, precisei encontrar uma maneira de armazenar o estado e os valores de cada cavalo a cada frame. Decidi usar o <span className="constant">useState</span> do React para armazenar não apenas o estado dos cavalos, mas também o histórico de corridas e todas as outras variáveis que utilizei.
        </>
      ),
      time: 0.25,
    },
    {
      title: 'Como funciona o useState?',
      description: (
        <>
          O <span className="constant">useState</span> é um Hook do React que permite adicionar estado ao componente criado. Ele retorna um par de valores: o valor atual do estado e uma função para atualizá-lo, como se fosse um get e set em Java. Quando a função de atualização é chamada com um novo valor, o componente é renderizado novamente com o novo estado.
        </>
      ),
      time: 0.5,
    },

  ],
  resultCalc: [
    {
      title: 'Valor aleatório',
      description: (
        <>
          Para representar um thread em uma linguagem web é um pouco complicado, e para facilitar eu utilizei um valor aleatório gerado em um intervalo, pela formula: <span className="constant">(Math.random() * (valorInserido - 10) + valorInserido)</span>, ao inserir, por exemplo 30, o cálculo seria 30-10, assim a velocidade varia de 20 a 30.
        </>
      ),
      time: 0.5,
    },
    {
      title: 'Atualizado a cada segundo',
      description: (
        <>
          Para simular um thread de maneira eficiente, implementei um sistema automatizado que permite ao usuário ajustar a velocidade da simulação em milissegundos. Isso oferece flexibilidade para realizar a simulação de várias maneiras diferentes, desde processos lentos até processos rápidos.
        </>
      ),
      time: 0.5,
    },
  ],

};
export const threadList = [
  {
    title: 'O que é um Thread',
    description: (
      <>
        Em português, Thread significa fio ou linha, porém na computação tem
        outro significado, que é uma <u>sequencia de comandos que um processo ou programa executa</u>.
        Basicamente é uma forma de um processo se autodividir em duas ou
        mais tarefas que podem ser executadas concorrentemente'
      </>
    ),
    time: 0.5,
  },
  {
    title: 'Criação de Threads',
    description: 'Threads podem ser criados usando funções específicas da linguagem de programação ou do sistema operacional. Por exemplo, em Java, você pode criar um thread criando uma instância da classe `Thread` e fornecendo o código a ser executado pelo thread.',
    time: 0.75,
  },
  {
    title: 'Multithreading',
    description: 'Multithreading é uma técnica de programação que permite que um programa execute várias tarefas ao mesmo tempo, usando diferentes fluxos de execução chamados threads. Cada thread pode realizar uma parte da lógica do programa de forma independente e concorrente com as outras threads..',
    time: 0.5,
  },
  {
    title: 'Sincronização de Threads',
    description: 'A sincronização de threads é o processo de coordenar a execução de vários threads para garantir que eles não interfiram uns com os outros. Isso é feito usando técnicas como semáforos, mutexes e monitores.',
    time: 1,
  },
  {
    title: 'Aplicação de Threads',
    description: 'Threads têm muitas aplicações práticas, como melhorar o desempenho e a responsividade de programas, permitir a execução simultânea de tarefas e simplificar o design de programas complexos.',
    time: 1.25,
  },
  {
    title: 'Exemplo de aplicação de Threads',
    description: (
      <>
        Um exemplo de uso de thread em um programa é o de um editor de textos, como o <u> Microsoft Word</u>. Tem uma thread que fica esperando você digitar algumas teclas e exibir na tela. Outra thread que fica verificando a ortografia e gramática do texto. Outra thread que fica salvando o documento periodicamente. E assim por diante. Cada thread realiza uma tarefa específica e independente das outras, mas todas contribuem para o funcionamento do programa.',
      </>
    ),
    time: 1.25,
  },
  {
    title: 'Relógio digital',
    description: (
      <>
        Outro exemplo simples de thread é o de um <u> relógio digital</u>. Imagine que você tem um relógio que mostra as horas, os minutos e os segundos. Cada um desses elementos pode ser atualizado por uma thread diferente. Por exemplo, a thread dos segundos incrementa o valor dos segundos a cada segundo. A thread dos minutos incrementa o valor dos minutos a cada 60 segundos. A thread das horas incrementa o valor das horas a cada 60 minutos.,
      </>
    ),
    time: 1.25,
  },
  {
    title: 'Semáforo',
    description: (
      <>
        Outro exemplo simples de thread é o de um <u> Semáforo </u>. Em um semáforo, os threads precisam se comunicar de forma sincronizada, para não interferir no acionamento da cor do sinal.',
      </>
    ),
    time: 1.25,
  },
  {
    title: 'Cancelamento Threads',
    description: (
      <>
        O cancelamento de threads corresponde à tarefa de terminar um thread antes que se complete. Por exemplo, se múltiplos threads estão pesquisando concorrentemente em um banco de dados e um thread retorna o resultado, os threads que ainda estão sendo executados podem ser cancelados. Uma outra situação pode ocorrer quando um usuário pressionar um botão em um navegador da Web. Com frequência, uma página da Web é carregada em um thread separado. Quando um usuário pressionar o botão stop, o thread que estava carregando a página é cancelado. Um thread que está para ser cancelado é frequêntemente denominado thread-alvo.',
      </>
    ),
    time: 1.25,
  },
  {
    title: 'Foguete com dois threads',
    description: (
      <>
        Quando mais de um thread é executado em cima de um ator, diminui a sobrecarga sobre os threads, dividindos em proporções iguais de potencia, porém dependendo da ação a ser realizada é estritamente essencial que a execução seja simultanea. No caso do foguete ao lado, o objetivo do thread é apenas impulsionar para cima, independente de qual thread vá fazer o impulsionamento no momento não haverá problemas se não for sincronizado. <br /> &nbsp; Caso o objetivo do thread fosse direcionar o foguete, é indispensavel a sincronização, pois sem a sincronização o foguete poderia facilmente sair de rota e até mesmo cair, pois não haveria como seguir uma direção.
      </>
    ),
    time: 1.25,
  },
  {
    title: 'Exemplo da falta de sincronização em um sistema critico',
    description: (
      <>
        Utilizando o mesmo exemplo do foguete, mas acrescentando a direção sem sincronização, podemos ver que não há uma direção especifica para o foguete, pois os threads executam de forma "aleatoria" e isso pode ser um problema gigantesco em um sistema critico. <br /> &nbsp; Assim que os propulsores são acionados o foguete começa a subir, quando acionar a direção ele se direcionará para posições aleatorias exemplo: <span className="flex gap-2"><FaArrowLeft /><FaArrowRight /><FaArrowLeft /><FaArrowLeft /><FaArrowRight /><FaArrowLeft /><FaArrowLeft /><FaArrowLeft /><FaArrowRight />.</span> <br /> &nbsp; Agora imagine uma situação dessa em um sistema como <u>Controle de Tráfego Aéreo</u>, ou até mesmo <u>Sistemas Bancários</u>, quanto maior é o sistema, maior é a gravidade da falta de sincronização.
      </>
    ),
    time: 1.25,
  },
];
export const mongoDBList = [
  {
    title: 'MongoDB',
    description: (
      <>
        &nbsp; MongoDB é um banco de dados de documentos de código aberto, projetado para facilitar o desenvolvimento de aplicativos e a escalabilidade. Ele usa documentos flexíveis em vez de tabelas e linhas para processar e armazenar vários tipos de dados. Isso permite que os desenvolvedores trabalhem com dados de maneira mais natural e intuitiva. MongoDB é conhecido por sua capacidade de escalonamento horizontal e balanceamento de carga, oferecendo aos desenvolvedores um alto nível de flexibilidade e escalabilidade.
      </>
    ),
    time: 0.25,
  },
  {
    title: 'Não relacional',
    description: (
      <>
        &nbsp; O MongoDB é um banco de dados não relacional, o que permite desenvolvedores trabalharem com dados de maneira mais intuitiva e natural, oferecendo mais flexibilidade na modelagem de dados.
      </>
    ),
    time: 0.25,
  },
  {
    title: 'Enviando para o modelo',
    description: (
      <>
        &nbsp; Quando um comentário é enviado através do formulário, a função handleSubmit é chamada. Essa função envia os dados do formulário para a API em formato JSON usando uma requisição POST. Os dados são armazenados no MongoDB de acordo com o modelo definido. Após o envio dos dados, a página é atualizada para exibir as alterações.
      </>
    ),
    time: 0.25,
  },
  {
    title: 'Estrutura do Modelo',
    description: (
      <>
        &nbsp; A estrutura do modelo é simples e facil de interpretar, no modelo de feedback ao lado foram utilizados os campos <span className="constant">name</span>, <span className="constant">rating</span>, <span className="constant">comment</span> e <span className="constant">test</span>(somente para comentários de backup). <br /> &nbsp; Todos os campos do modelo precisam de um tipo de variável e de um required. O required vai indicar se aquele campo é necessário ou não para o comentário ser enviado, caso não tenha, é retornado um erro.
      </>
    ),
    time: 0.25,
  },
  {
    title: 'Por que eu utilizei?',
    description: (
      <>
        &nbsp; Foi o primeiro banco de dados que eu tive experiência, e pelo fato de ser não relacional acabou facilitando o trabalho, ainda mais por ser um projeto que não necessita de uma alta complexidade no banco de dados.
      </>
    ),
    time: 0.25,
  },
];
