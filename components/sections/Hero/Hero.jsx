import React from 'react';
import styles from './Hero.module.css';
import HeroText from './HeroText';
import HeroLinks from './HeroLinks';
import HeroCTAButton from './HeroCTAButton';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row gap-[64px] py-[64px] md:py-[128px] justify-between"
    >
      <div className="grid gap-[24px]">
        <div className="grid gap-[16px]">
          <HeroText />
          <HeroLinks />
        </div>
        <HeroCTAButton />
      </div>
      <HeroImage />
    </section>
  );
}
