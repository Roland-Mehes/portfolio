import styles from './Projects.module.css';
import Image from 'next/image';

const Projects = () => {
  return (
    <section>
      <div className={styles.mainContainer}>
        <div className={styles.headerText}>
          <h1>My Portfolio</h1>
          <p>From projects to experiments that I do in my spare time.</p>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectCards}>
            <div className={styles.image}>
              <Image
                alt="RM-Games"
                src="/images/RM-Games.png"
                width={576}
                height={200}
              ></Image>
            </div>
            <div className={styles.cardTextContainer}>
              <h2 className="text-[32px]">RM-Games</h2>
              <p className="text-[18px]">
                A web-based platform offering a variety of interactive and
                engaging games for users of all ages. Simple, fun, and easy to
                access, bringing classic gaming experiences to your browser with
                a modern twist.
              </p>
            </div>
          </div>
          <div className={styles.projectCards}>
            <div className={styles.image}>
              <Image
                alt="Tic-Tac-Toe Game"
                src="/images/Tic-Tac-Toe.png"
                width={576}
                height={600}
              ></Image>
            </div>
            <div className={styles.cardTextContainer}>
              <h2 className="text-[32px]">Tic-Tac-Toe</h2>
              <p className="text-[18px]">
                A Tic-Tac-Toe game with easy, medium, and hard difficulty levels
                against an AI opponent. The design was part of a Figma project
                inspired by a platform that provides ideas for junior-level
                projects.
              </p>
            </div>
          </div>
          <div className={styles.projectCards}>
            <div className={styles.image}>
              <Image
                alt="Tic-Tac-Toe Game"
                src="/images/React-Calculator.png"
                width={576}
                height={600}
              ></Image>
            </div>
            <div className={styles.cardTextContainer}>
              <h2 className="text-[32px]">Basic Calculator</h2>
              <p className="text-[18px]">
                A basic calculator built with JavaScript and React, supporting
                standard arithmetic operations. The project was inspired by a
                platform offering ideas for junior-level developers and designed
                as part of a Figma-based UI concept.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
