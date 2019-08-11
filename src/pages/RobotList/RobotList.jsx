import React, { useState, useEffect } from 'react';
import { CardList } from '../../components/CardList';
import styles from './RobotList.module.scss';

function RobotList() {
  const [robots, setRobots] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setRobots(users);
      })
      .catch(err => {
        setHasError(true);
      })
      .finally(() => {
        setIsPending(false);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      {isPending && <h2 className={styles.centerMessageOnPage}>Loading...</h2>}
      {hasError && <h2 className={styles.centerMessageOnPage}>Oops! Something went wrong.</h2>}
      {robots.length > 0 && (
        <>
          <h1 className={styles.title}>Robot Warriors List</h1>
          <CardList robots={robots}></CardList>
        </>
      )}
    </div>
  );
}

export default RobotList;
