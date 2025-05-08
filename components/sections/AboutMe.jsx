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
    <section id="aboutme">
      <div className="pt-[64px] pb-[128px]">
        <div className="grid gap-[15px] p">
          <h1 className="text-center text-[40px] leading-[140%] font-bold">
            About me
          </h1>
          <div className={` grid grid-cols-1 md:grid-cols-2 gap-[32px]`}>
            <div className={` flex items-center justify-center`}>
              <div className={styles.imageWrapper}>
                <Image
                  alt="Me in working time."
                  src={'/images/profile-anime-working-large.png'}
                  height={1}
                  width={505}
                  className="rounded-[12px]"
                ></Image>
              </div>
            </div>
            <div>
              <p className="md:text-[18px] sm:text-[16px] leading-[180%]">
                Hi, I'm Roland Méhes, a junior software developer. I’m
                passionate about creating clean, efficient, and user-friendly
                solutions, and I love tackling complex challenges with simple,
                intuitive designs. I'm always exploring new technologies and
                finding better ways to deliver high-quality results..
              </p>
            </div>
            <div className="flex flex-col gap-[16px] ">
              {/*Education Container */}
              <div className="order-first ">
                <h2 className="text-[32px] font-bold leading-[140%]">
                  Education
                </h2>
                <p className="text-[16px] text-[var(--color-2)] leading-[180%]">
                  Frontend Developement (JS+React)
                </p>
                <p className="text-[18px] font-semibold leading-[180%]">
                  SDA Academy
                </p>
                <p className="text-[16px] text-[var(--color-2)] leading-[180%]">
                  Mathematics and Computer Science
                </p>
                <p className="text-[18px] font-semibold leading-[180%]">
                  LicRomCat Oradea
                </p>
              </div>
              {/*Language Container */}
              <div className="order-last">
                <h2 className="text-[32px] font-bold leading-[140%]">
                  Languages
                </h2>
                <p className="text-[18px] font-semibold leading-[180%]">
                  Hungarian (Native)
                </p>
                <p className="text-[18px] font-semibold leading-[180%]">
                  Romanian (C1)
                </p>
                <p className="text-[18px] font-semibold leading-[180%]">
                  English (B2)
                </p>
                <p className="text-[18px] font-semibold leading-[180%]">
                  German (B2)
                </p>
              </div>
              {/*Skill Container */}
              <div>
                <h1 className="text-[32px] font-bold leading-[140%]">Skills</h1>
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
                <h1 className="text-[32px] font-bold leading-[140%]">Tools</h1>
                <div>
                  <Figma></Figma>
                </div>
              </div>
            </div>
            {/* Experience Container */}
            <div className="flex flex-col gap-[21px]">
              <h1 className="text-[32px] font-bold leading-[140%]">
                Experience
              </h1>
              {/* First Experience */}
              <div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-[16px] leading-[180%] text-[var(--color-2)] ">
                      Warehouse Manager
                    </h3>
                    <p className="text-[18px] leading-[180%] font-semibold">
                      Graficard
                    </p>
                  </div>
                  {/* Working period */}
                  <div>
                    <p className="font-[16px] leading-[180%] ">On-site</p>
                    <p className="font-[16px] leading-[180%] ">
                      Oct 2024 - Present
                    </p>
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
                    <h3 className="font-[16px] leading-[180%] text-[var(--color-2)]">
                      Shift Leader
                    </h3>
                    <p className="text-[18px] leading-[180%] font-semibold">
                      Playmobil Herrieden
                    </p>
                  </div>
                  {/* Working period */}
                  <div>
                    <p className="font-[16px] leading-[180%] ">On-site</p>
                    <p className="font-[16px] leading-[180%] ">
                      Jul 2017 - Jul 2024
                    </p>
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
