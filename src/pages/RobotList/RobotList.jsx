import React from 'react';
import styles from './RobotList.module.scss';

function RobotList() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Robot Wars List</h1>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>1</div>
          <div className={styles.gridItem}>2</div>
          <div className={styles.gridItem}>3</div>
          <div className={styles.gridItem}>4</div>
          <div className={styles.gridItem}>5</div>
          <div className={styles.gridItem}>6</div>
          <div className={styles.gridItem}>7</div>
          <div className={styles.gridItem}>8</div>
        </div>
      </div>
    </div>
  );
}

export default RobotList;
