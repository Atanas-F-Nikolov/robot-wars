import React from 'react';
import styles from './PersonalCard.module.scss';

function PersonalCard({ robot }) {
  return (
    <div className={styles.wrapper}>
      <img
        alt="robot"
        className={styles.robotImg}
        src={`https://robohash.org/${robot.id}?set=set2&size=180x180`}
      />
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.cellName}>Id:</th>
            <th className={styles.cellValue}>{robot.id}</th>
          </tr>
          <tr>
            <th className={styles.cellName}>Name:</th>
            <th className={styles.cellValue}>{robot.name}</th>
          </tr>
          <tr>
            <th className={styles.cellName}>Username:</th>
            <th className={styles.cellValue}>{robot.username}</th>
          </tr>
          <tr>
            <th className={styles.cellName}>Coordinates:</th>
            <th className={styles.cellValue}>
              ({robot.address.geo.lat}, {robot.address.geo.lng})
            </th>
          </tr>
          <tr>
            <th className={styles.cellName}>Catch phrase:</th>
            <th className={styles.cellValue}>{robot.company.catchPhrase}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PersonalCard;
