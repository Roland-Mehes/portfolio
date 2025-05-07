import styles from './Header.module.css';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logo}>R.M.</div>
      <div className={styles.links}>
        <Link href="/">My Portfolio</Link>
        <Link href="/about">About me</Link>
      </div>
    </div>
  );
};

export default Header;
