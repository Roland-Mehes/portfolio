import styles from './page.module.css';
import Hero from '../components/sections/Hero/Hero';
import Projects from '@/components/sections/Projects/Projects';
import AboutMe from '@/components/sections/AboutMe/AboutMe';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Hero />
      <Projects />
      <AboutMe />
    </div>
  );
}
