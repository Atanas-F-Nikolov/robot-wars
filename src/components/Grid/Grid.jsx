import React from 'react';
import { GeneralRoboCard } from '../GeneralRoboCard';
import styles from './Grid.module.scss';

function Grid({ robots }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {robots.map(robot => (
          <GeneralRoboCard key={robot.id} robot={robot}></GeneralRoboCard>
        ))}
      </div>
    </div>
  );
}

export default Grid;
