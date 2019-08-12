import React from 'react';
import { GeneralCard } from '../GeneralCard';
import styles from './CardList.module.scss';

function CardList({ robots }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {robots.map(robot => (
          <GeneralCard key={robot.id} robot={robot}></GeneralCard>
        ))}
      </div>
    </div>
  );
}

export default CardList;
