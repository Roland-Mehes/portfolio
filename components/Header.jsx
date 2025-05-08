import styles from './Header.module.css';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={styles.logo}>
        <Link href={'#'}>R.M.</Link>
      </div>
      <div className={styles.links}>
        <Link href="./#projects">My Portfolio</Link>
        <Link href="./#aboutme">About me</Link>
      </div>
    </div>
  );
};

export default Header;
