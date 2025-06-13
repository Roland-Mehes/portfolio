import {
  Html5,
  Css3,
  JavaScriptSVG,
  ReactSVG,
  NextSVG,
  TailwindCss,
  Figma,
  TypeScript,
} from './IconLibrary/index';

export const skills = [
  {
    name: 'Html5',
    Icon: Html5,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'Css3',
    Icon: Css3,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    Icon: JavaScriptSVG,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    Icon: TypeScript,
    url: 'https://www.typescriptlang.org/docs/',
  },
  { name: 'React', Icon: ReactSVG, url: 'https://react.dev/' },
  { name: 'Next.js', Icon: NextSVG, url: 'https://nextjs.org/' },
];

export const tools = [
  { name: 'Figma', Icon: Figma, url: 'https://www.figma.com/' },
  { name: 'TailwindCSS', Icon: TailwindCss, url: 'https://tailwindcss.com/' },
];

export const education = [
  { title: 'Frontend Development (JS+React)', institution: 'SDA Academy' },
  {
    title: 'Mathematics and Computer Science',
    institution: 'LicRomCat Oradea',
  },
];

export const languages = [
  'Hungarian (Native)',
  'Romanian (C1)',
  'English (B2)',
  'German (B2)',
];

export const experience = [
  {
    role: 'Mentor',
    company: 'BeCoder',
    type: 'Remote',
    period: 'June 2025 - Present',
    description: 'Small desc',
  },

  {
    role: 'Warehouse Manager',
    company: 'Graficard',
    type: 'On-site',
    period: 'Oct 2024 - Present',
    description:
      'Warehouse coordinator responsible for invoicing, inventory, product preparation, and shipping logistics.',
  },
  {
    role: 'Shift Leader',
    company: 'Playmobil Herrieden',
    type: 'On-site',
    period: 'Jul 2017 - Jul 2024',
    description:
      'Warehouse coordinator responsible for team coordination, invoicing, inventory, product preparation, and shipping logistics.',
  },
];
