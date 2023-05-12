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
  }
]

export const explication = {

  textExample: [
    {
      value: 20,
      formula: 'Math.random() * (20 - 10) + 20',
      description: 'Valor entre 10 e 20'
    },
    {
      value: 30,
      formula: 'Math.random() * (30 - 10) + 30',
      description: 'Valor entre 20 e 30'
    },
    {
      value: 40,
      formula: 'Math.random() * (40 - 10) + 40',
      description: 'Valor entre 30 e 40'
    },
    {
      value: 50,
      formula: 'Math.random() * (50 - 10) + 50',
      description: 'Valor entre 40 e 50'
    }
  ]
}

export const navbar_links = [
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
    name: 'Sobre',
    href: '/About',
  },
]

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
  }
];

export const developingList = [
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
]
export const threadList = [
  {
    title: 'O que é um Thread',
    description: 'Um thread é uma sequência de instruções que pode ser executada de forma independente dentro de um processo. Isso permite que várias tarefas sejam executadas simultaneamente dentro do mesmo programa.',
    time: 0.25,
  },
  {
    title: 'Multithreading',
    description: 'Multithreading é o processo de usar vários threads para executar tarefas simultaneamente dentro de um programa. Isso pode melhorar o desempenho e a responsividade do programa.',
    time: 0.5,
  },
  {
    title: 'Criação de Threads',
    description: 'Threads podem ser criados usando funções específicas da linguagem de programação ou do sistema operacional. Por exemplo, em Java, você pode criar um thread criando uma instância da classe `Thread` e fornecendo o código a ser executado pelo thread.',
    time: 0.75,
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
]