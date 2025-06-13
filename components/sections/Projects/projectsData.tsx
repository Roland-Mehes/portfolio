export type Project = {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  url: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'RM-Games',
    description: `A web-based platform offering a variety of interactive and
      engaging games for users of all ages. Simple, fun, and easy to
      access, bringing classic gaming experiences to your browser with
      a modern twist.`,
    imageURL: '/images/rm-games.jpg',
    url: 'https://rm-games.netlify.app/',
    tech: ['ReactSVG', 'Css3'],
  },
  {
    id: 2,
    title: 'Tic-Tac-Toe',
    description: `A Tic-Tac-Toe game with easy, medium, and hard difficulty levels
      against an AI opponent. The design was part of a Figma project
      inspired by a platform that provides ideas for junior-level
      projects.`,
    imageURL: '/images/tic-tac-toe.jpg',
    url: 'https://tic-tac-toe-react-lyart-psi.vercel.app/',
    tech: ['ReactSVG', 'Css3'],
  },
  {
    id: 3,
    title: 'Basic Calculator',
    description: `A basic calculator built with JavaScript and React, supporting
      standard arithmetic operations. The project was inspired by a
      platform offering ideas for junior-level developers and designed
      as part of a Figma-based UI concept.`,
    imageURL: '/images/react-calculator.png',
    url: 'https://basic-calculator-murex.vercel.app/',
    tech: ['ReactSVG', 'Css3'],
  },
];
