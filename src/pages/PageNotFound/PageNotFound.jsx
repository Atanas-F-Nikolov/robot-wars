import React from 'react';
import styles from './PageNotFound.module.scss';
import sadRobot from './404-robot.png';

function PageNotFound() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.robotImg} src={sadRobot} alt="Sad robot - page not found" />
      <h1>Page/Robot not found!</h1>
    </div>
  );
}

export default PageNotFound;
