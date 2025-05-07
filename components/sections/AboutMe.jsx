import React from 'react';
import styles from './AboutMe.module.css';
import Image from 'next/image';
import Html5 from '@/public/svg/html5';
import Css3 from '@/public/svg/css3';
import ReactSVG from '@/public/svg/React';
import NextSVG from '@/public/svg/NextSVG';
import JavaScriptSVG from '@/public/svg/JavaScriptSVG';
import TailwindCss from '@/public/svg/TailwindCss';
import Figma from '@/public/svg/Figma';
import TypeScript from '@/public/svg/TypeScript';

const AboutMe = () => {
  return (
    <section>
      <div className={styles.mainContainer}>
        <div className="grid gap-[15px] p">
          <h1 className="text-center">About me</h1>
          <div className={styles.gridContainer}>
            <div className={`${styles.firstRow} `}>
              <div className={styles.imageWrapper}>
                <Image
                  alt="Me in working time."
                  src={'/images/profile-anime-working-large.png'}
                  height={1}
                  width={505}
                ></Image>
              </div>
            </div>
            <div className={styles.card}>
              <p>
                Hi, I'm Roland Méhes, a junior software developer. I’m
                passionate about creating clean, efficient, and user-friendly
                solutions, and I love tackling complex challenges with simple,
                intuitive designs. I'm always exploring new technologies and
                finding better ways to deliver high-quality results..
              </p>
            </div>
            <div className={styles.left}>
              {/*Education Container */}
              <div className={styles.education}>
                <h1>Education</h1>
                <p className={styles.jobTitle}>
                  Frontend Developement (JS+React)
                </p>
                <p className={styles.companyName}> SDA Academy</p>
                <p className={styles.jobTitle}>
                  Mathematics and Computer Science
                </p>
                <p className={styles.companyName}> LicRomCat Oradea</p>
              </div>
              {/*Language Container */}
              <div>
                <h1>Languages</h1>
                <ul>
                  <li>Hungarian (Native)</li>
                  <li>Romanian (C1)</li>
                  <li>English (B2)</li>
                  <li>German (B2)</li>
                </ul>
              </div>
              {/*Skill Container */}
              <div>
                <h1>Skills</h1>
                <div className="flex gap-[16px] ">
                  <Html5 />
                  <Css3 />
                  <JavaScriptSVG />
                  <TypeScript />
                  <ReactSVG />
                  <NextSVG />
                  <TailwindCss />
                </div>
              </div>
              {/* Tools Container */}
              <div>
                <h1>Tools</h1>
                <div>
                  <Figma></Figma>
                </div>
              </div>
            </div>
            {/* Experience Container */}
            <div className={styles.right}>
              <h1>Experience</h1>
              {/* First Experience */}
              <div>
                <div className="flex justify-between">
                  <div>
                    <h3 className={styles.jobTitle}>Warehouse Manager </h3>
                    <p className="font-bold">Graficard</p>
                  </div>
                  {/* Working period */}
                  <div>
                    <p className={styles.jobLocation}>On-site</p>
                    <p className={styles.jobLocation}>Oct 2024 - Present</p>
                  </div>
                </div>
                <p>
                  Warehouse coordinator responsible for invoicing, inventory,
                  product preparation, and shipping logistics.
                </p>
              </div>
              {/* {Second Experience} */}
              <div>
                <div className="flex justify-between">
                  <div>
                    <h3 className={styles.jobTitle}>Shift Leader </h3>
                    <p className="font-bold">Playmobil Herrieden</p>
                  </div>
                  {/* Working period */}
                  <div>
                    <p className={styles.jobLocation}>On-site</p>
                    <p className={styles.jobLocation}>Jul 2017 - Jul 2024</p>
                  </div>
                </div>
                <p>
                  Warehouse coordinator responsible for team coordination,
                  invoicing, inventory, product preparation, and shipping
                  logistics.
                </p>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
