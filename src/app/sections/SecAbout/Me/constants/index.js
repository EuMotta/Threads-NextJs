import { AiFillHtml5 } from 'react-icons/ai';
import { FaJava } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiReact, SiNextdotjs } from 'react-icons/si';

export const AboutSection = [
  {
    id: 'about-1',
    title: 'Experiência de vida',
    subtitle: ' Enfrentando desafios e me tornando mais forte',
    description: 'Já enfrentei momentos difíceis, mas consegui superá-los com determinação e força de vontade. Isso me deu confiança e me inspirou a lutar pelos meus objetivos. Acredito que essas experiências me tornaram mais forte e experiente para qualquer oportunidade de trabalho. Estou pronto para enfrentar novos desafios e continuar crescendo como pessoa e profissional.',
    fadeIn: 'right',
  },
  {
    id: 'about-2',
    title: 'Procurando novos desafios',
    subtitle: 'Determinado e comprometido com a excelência',
    description: 'Acredito que, com determinação e esforço, é possível superar qualquer obstáculo. Na programação, trabalho duro para atingir meus objetivos e me sinto realizado quando os alcanço. Busco me atualizar constantemente e estou sempre pronto para enfrentar novos desafios. Sou um profissional comprometido e dedicado, que busca sempre superar seus objetivos.',
    fadeIn: 'left',
  },
  {
    id: 'about-3',
    title: 'Criando soluções',
    subtitle: 'Pronto para evoluir e encarar novos desafios',
    description: 'Programar é minha paixão e meu hobby. Desde cedo, a informática sempre esteve presente em minha vida e, quando descobri a programação, me apaixonei ainda mais por essa área. Cada linguagem trás um desafio diferente que tenho o prazer de enfrentar. Programar é muito mais do que um simples trabalho para mim e estou sempre pronto para enfrentar novos desafios e me desenvolver na minha carreira.',
    fadeIn: 'up',
  },
  {
    id: 'about-4',
    title: 'Idéias em código',
    subtitle: 'Desenvolvendo soluções inovadoras com paixão',
    description: 'Transformo ideias em código com paixão. Acredito que, com determinação e esforço, é possível superar qualquer obstáculo. Desde cedo, a informática sempre esteve presente em minha vida e, quando descobri a programação, me apaixonei ainda mais por essa área. Cada linguagem trás um desafio diferente que tenho o prazer de enfrentar.',
    fadeIn: 'up',
  },
];
export const educationInformation = {
  education: [
    {
      id: 'education1',
      year: '2022 - 2025',
      title: 'Técnologo',
      school: 'FATEC Guaratinguetá',
      description: 'Estou me formando em  em Análise e Desenvolvimento de Sistemas pela FATEC Guaratinguetá.',
    },
  ],
  experience: [
    {
      id: 'experience1',
      year: '0000 - 0000',
      title: 'Ainda sem experiência profissional',
      description: 'Ainda sem experiência profissional.',
    },
  ],
};
export const skills = {
  language: [
    { name: 'HTML_5', percentage: 45, icon: AiFillHtml5, color: '#FF0000', fadeIn: 'right', speed: 0.5 },
    { name: 'CSS_3', percentage: 85, icon: IoLogoCss3, color: '#007ACC', fadeIn: 'right', speed: 1 },
    { name: 'JAVA', percentage: 35, icon: FaJava, color: '#d4ab23', fadeIn: 'right', speed: 1.5 },
    { name: 'REACT_JS', percentage: 60, icon: SiReact, color: '#6E24FF', fadeIn: 'right', speed: 2 },
    { name: 'NEXT_JS', percentage: 72, icon: SiNextdotjs, color: '#512121', fadeIn: 'right', speed: 2.5 },
  ],
  framework: [
    { name: 'Tailwindcss', percentage: 45, icon: AiFillHtml5, color: '#FF0000', fadeIn: 'left', speed: 1 },
    { name: 'Recharts', percentage: 45, icon: AiFillHtml5, color: '#FF0000', fadeIn: 'left', speed: 1 },
    { name: 'Bootstrap', percentage: 45, icon: AiFillHtml5, color: '#FF0000', fadeIn: 'left', speed: 1 },
  ],
};
