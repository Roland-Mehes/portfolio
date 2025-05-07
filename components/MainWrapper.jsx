import React from 'react';
import styles from './MainWrapper.module.css';

const MainWrapper = ({ children }) => {
  return <div className={styles.MainWrapper}>{children}</div>;
};

export default MainWrapper;
