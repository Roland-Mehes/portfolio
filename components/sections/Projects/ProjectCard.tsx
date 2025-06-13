'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from './projectsData';
import { iconMap } from '@/data/IconLibrary/IconLibrary';
import { fadeInFrom } from '@/helperFunctions/ProjectFadeInFrom';

const ProjectCard = ({ project }: { project: Project }) => {
  const direction = project.id % 2 === 0 ? 'RightContainer' : 'LeftContainer';

  return (
    <motion.div
      key={project.id}
      variants={fadeInFrom(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="bg-[var(--bg-color-2)] rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300"
    >
      <Link href={project.url} target="_blank" rel="noopener norefferer">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={project.imageURL}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex pt-[20px] px-8 gap-4 justify-self-center">
          {/* <p> Tech Stack</p> */}
          <div className="flex gap-[20px]">
            {project.tech?.map((tech, index) => (
              <p key={tech}>{iconMap[tech]}</p>
            ))}
          </div>
        </div>
        {/* Title and description */}
        <div className="p-[32px]">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="md:text-[18px] sm:text-[16px] leading-[180%]">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
