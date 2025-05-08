import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="Hero"
      className={`flex flex-col md:flex-row gap-[64px] py-[64px] md:py-[128px] justify-between`}
    >
      <div className="grid gap-[24px]">
        <div className="grid gap-[16px]">
          <div className="max-w-[466px]">
            <p className="text-[16px]   text-center leading-[180%] md:text-[18px] md:text-start">
              Hey, I'm
            </p>
            <h1 className="text-[36px] text-center md:text-start md:text-[48px] ">
              Roland Méhes
            </h1>
            <h1 className="text-[36px] md:text-[48px] text-center md:text-start text-[var(--color-2)]">
              Software Developer
            </h1>
            <p className="text-[16px] md:text-[18px] text-center md:text-start leading-[180%]">
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

        <Link href="#" className="justify-self-center md:justify-self-start">
          <span className="custom-button ">Let's work together</span>
        </Link>
      </div>
      <div className={`${styles.imageContainer} self-center`}>
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
