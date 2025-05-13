'use client';

import React from 'react';
import styles from './AboutMe.module.css';
import Image from 'next/image';
import {
  education,
  experience,
  languages,
  skills,
  tools,
} from '@/data/profileData';
import Link from 'next/link';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="text-[32px] font-bold leading-[140%]">{children}</h2>;

const AboutMe: React.FC = () => {
  return (
    <section id="aboutme">
      <div className="pt-[64px] pb-[128px]">
        <div className="grid gap-[15px]">
          <h1 className="text-center text-[40px] leading-[140%] font-bold">
            About me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {/* Profile Image */}
            <div className="flex items-center justify-center">
              <div className={styles.imageWrapper}>
                <Image
                  alt="Me in working time."
                  src="/images/profile-anime-working-large.png"
                  width={505}
                  height={1}
                  className="rounded-[12px]"
                />
              </div>
            </div>

            {/* Intro */}
            <div className="flex items-start md:items-center">
              <p className="md:text-[18px] sm:text-[16px] leading-[180%]">
                Hi, I&apos;m Roland Méhes, a junior software developer. I&apos;m
                passionate about creating clean, efficient, and user-friendly
                solutions. I love tackling complex challenges with simple,
                intuitive designs. I&apos;m always exploring new technologies
                and finding better ways to deliver high-quality results.
              </p>
            </div>

            {/* Education + Skills */}
            <div className="flex flex-col gap-[16px] order-2 lg:order-none">
              <div className="grid gap-[16px]">
                <div>
                  <SectionTitle>Education</SectionTitle>
                  {education.map((item, idx) => (
                    <div key={idx}>
                      <p className="text-[16px] text-[var(--color-2)] leading-[180%]">
                        {item.title}
                      </p>
                      <p className="text-[18px] font-semibold leading-[180%]">
                        {item.institution}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <SectionTitle>Languages</SectionTitle>
                  {languages.map((lang, idx) => (
                    <p
                      key={idx}
                      className="text-[18px] font-semibold leading-[180%]"
                    >
                      {lang}
                    </p>
                  ))}
                </div>

                <div>
                  <SectionTitle>Skills</SectionTitle>
                  <div className="grid gap-5 grid-cols-4 max-w-[200px] ">
                    {skills.map(({ name, Icon, url }) => (
                      <Link
                        key={name}
                        href={`${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="grid  justify-items-center items-center cursor-pointer group relative">
                          <Icon />
                          <p className="!text-[10px] hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2">
                            {name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionTitle>Tools</SectionTitle>
                  <div className="flex gap-[16px]  ">
                    {tools.map(({ name, Icon, url }) => (
                      <Link
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="group relative cursor-pointer">
                          <Icon />
                          <p className="!text-[10px] hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2">
                            {name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-[21px] order-1 lg:order-none">
              <SectionTitle>Experience</SectionTitle>
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[16px] leading-[180%] text-[var(--color-2)]">
                        {exp.role}
                      </h3>
                      <p className="text-[18px] font-semibold leading-[180%]">
                        {exp.company}
                      </p>
                    </div>
                    <div>
                      <p className="text-[16px] leading-[180%]">{exp.type}</p>
                      <p className="text-[16px] leading-[180%]">{exp.period}</p>
                    </div>
                  </div>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
