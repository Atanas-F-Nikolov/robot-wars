import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

function Card({ robot }) {
  return (
    <Link className={styles.link} to={`/robots/${robot.id}`}>
      <h4 className={styles.marginReset}>{robot.id}</h4>
      <img alt="robot" src={`https://robohash.org/${robot.id}?set=set2&size=180x180`} />
      <h4 className={styles.roboName}>{robot.name}</h4>
    </Link>
  );
}

export default Card;
