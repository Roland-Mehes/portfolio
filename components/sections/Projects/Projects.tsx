import { projects } from './projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className={`py-[64px] grid gap-[68px] className = 'px-[16px] md:px-[64px] lg:px-[128px]';`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[40px] leading-[140%] font-bold">My Portfolio</h2>
        <p className="md:text-[18px] sm:text-[16px] leading-[180%]">
          From projects to experiments that I do in my spare time.
        </p>
      </div>
      <div>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
