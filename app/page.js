import styles from './page.module.css';
import Hero from '../components/sections/Hero';
import Projects from '@/components/sections/Projects';
import AboutMe from '@/components/sections/AboutMe';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Hero />
      <Projects />
      <AboutMe />
    </div>
  );
}
