'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Projects = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

const projects: Projects[] = [
  {
    id: 1,
    title: 'RM-Games',
    description: ` A web-based platform offering a variety of interactive and
                engaging games for users of all ages. Simple, fun, and easy to
                access, bringing classic gaming experiences to your browser with
                a modern twist.`,
    image: '/images/rm-games.png',
    url: 'https://rm-games.netlify.app/',
  },
  {
    id: 2,
    title: 'Tic-Tac-Toe',
    description: `    A Tic-Tac-Toe game with easy, medium, and hard difficulty levels
                against an AI opponent. The design was part of a Figma project
                inspired by a platform that provides ideas for junior-level
                projects.`,
    image: '/images/tic-tac-toe.png',
    url: 'https://tic-tac-toe-react-lyart-psi.vercel.app/',
  },
  {
    id: 3,
    title: 'Basic Calculator',
    description: `              A basic calculator built with JavaScript and React, supporting
                standard arithmetic operations. The project was inspired by a
                platform offering ideas for junior-level developers and designed
                as part of a Figma-based UI concept.`,
    image: '/images/react-calculator.png',
    url: 'https://basic-calculator-murex.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={`py-36 grid gap-[68px]`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="md:text-[40px] leading-[140%] font-bold ">
          My Portfolio
        </h2>
        <p className="md:text[18px] leading-[180%]">
          From projects to experiments that I do in my spare time.
        </p>
      </div>
      <div>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 ">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300"
            >
              <Link href={project.url}>
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-[32px]">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 ">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
