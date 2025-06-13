'use client';
import { motion } from 'framer-motion';
import { projects } from '@/components/sections/Projects/projectsData';
import { iconMap } from '@/data/IconLibrary/IconLibrary';
import Image from 'next/image';

const betaProjects = () => {
  return (
    <div className="grid gap-[40px]">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        const direction = isEven ? 'left' : 'right';

        const image = (
          <motion.div className="relative w-full ">
            <Image
              src={project.imageURL}
              alt={project.title}
              width={500}
              height={500}
              className="rounded-xl shadow-lg brightness-90 hover:brightness-100 transition-all duration-300 aspect-[16/9]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        );

        const content = (
          <motion.div className="space-y-4 max-w-[50ch] bg-white/80 dark:bg-black/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-extrabold tracking-tight">
              {project.title}
            </h3>
            <div className="flex gap-2.5 pb-3">
              {project.tech.map((tech, id) => (
                <span key={id}>{iconMap[tech]}</span>
              ))}
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        );

        return (
          <motion.div
            key={project.id}
            variants={fadeInFrom(direction)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className={`md:grid sm:flex flex-col gap-10 grid-cols-2 items-center py-10`}
          >
            {isEven ? (
              <>
                {image}
                {content}
              </>
            ) : (
              <>
                {content}
                {image}
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default betaProjects;

const fadeInFrom = (direction: 'left' | 'right') => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
});
