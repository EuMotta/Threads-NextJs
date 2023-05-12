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