import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="grid gap-[24px]">
        <div className="grid gap-[16px]">
          <div className={styles.textContainer}>
            <p>Hey, I'm</p>
            <h1>Roland Méhes</h1>
            <h1 style={{ color: 'var(--color-2)' }}>Software Developer</h1>
            <p>
              Hi, I'm Roland Méhes, a Junior Frontend Developer with a strong
              foundation in JavaScript and React, recently graduated from SDA
              Academy. For me, coding is more than a skill — it's a mindset and
              a way of life.
            </p>
          </div>
          <div className="flex gap-[16px] justify-center md:justify-start">
            <Link href="https://www.linkedin.com/in/roland-mehes/">
              <FaLinkedin size={'32'} color={'#a9c5f1'} />
            </Link>
            <Link href="https://github.com/Roland-Mehes">
              <FaGithub size={'32'} color={'#a9c5f1'} />
            </Link>
          </div>
        </div>
        <Link href="#">
          <span className="custom-button">Let's work together</span>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          alt="Profil Picture"
          src="/images/profile-anime-image.png"
          height={280}
          width={280}
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
