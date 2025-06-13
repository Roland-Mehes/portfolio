import Hero from '../components/sections/Hero/Hero';
import Projects from '@/components/sections/Projects/Projects';
import AboutMe from '@/components/sections/AboutMe/AboutMe';
import ContactLink from '@/components/Footer/components/ContactLink';

export default function Home() {
  return (
    <div className={`flex flex-col`}>
      <Hero />
      <Projects />
      <AboutMe />
      <ContactLink />
    </div>
  );
}
