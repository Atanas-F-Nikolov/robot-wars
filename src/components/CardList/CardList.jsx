import React from 'react';
import { Card } from '../Card';
import styles from './CardList.module.scss';

function CardList({ robots }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {robots.map(robot => (
          <Card robot={robot}></Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;
