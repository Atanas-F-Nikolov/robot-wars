import React from 'react';
import styles from './PageNotFound.module.scss';
import sadRobbot from './404-robot.png';

function PageNotFound() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.robbotImg} src={sadRobbot} alt="Sad robbot - page not found" />
      <h1>Page not found!</h1>
    </div>
  );
}

export default PageNotFound;
